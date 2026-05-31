"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Lesson = {
  id: string;
  title: string;
  videoId: string;
};

type LessonProgress = {
  watchedToEnd: boolean;
  markedDone: boolean;
};

type ProgressMap = Record<string, LessonProgress>;

type CoursePlayerProps = {
  courseId: string;
  lessons: Lesson[];
};

type YouTubePlayerInstance = {
  destroy: () => void;
};

type YouTubePlayerConstructor = new (
  elementId: string,
  options: {
    videoId: string;
    playerVars?: {
      rel?: number;
      modestbranding?: number;
    };
    events?: {
      onStateChange?: (event: { data: number }) => void;
    };
  }
) => YouTubePlayerInstance;

declare global {
  interface Window {
    YT?: {
      Player: YouTubePlayerConstructor;
      PlayerState: {
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isLessonProgress(value: unknown): value is LessonProgress {
  if (!isRecord(value)) return false;

  return (
    typeof value.watchedToEnd === "boolean" &&
    typeof value.markedDone === "boolean"
  );
}

function isProgressMap(value: unknown): value is ProgressMap {
  if (!isRecord(value)) return false;

  return Object.values(value).every((item) => isLessonProgress(item));
}

function parseStoredProgress(value: string): ProgressMap {
  try {
    const parsed: unknown = JSON.parse(value);
    return isProgressMap(parsed) ? parsed : {};
  } catch {
    return {};
  }
}

export function CoursePlayer({ courseId, lessons }: CoursePlayerProps) {
  const [selectedLessonId, setSelectedLessonId] = useState<string>(lessons[0]?.id ?? "");
  const [progress, setProgress] = useState<ProgressMap>(() => {
    if (typeof window === "undefined") return {};

    const saved = localStorage.getItem(`course-progress-${courseId}`);
    return saved ? parseStoredProgress(saved) : {};
  });
  const [apiReady, setApiReady] = useState<boolean>(false);
  const playerRef = useRef<YouTubePlayerInstance | null>(null);

  const selectedLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === selectedLessonId) ?? lessons[0],
    [lessons, selectedLessonId]
  );

  useEffect(() => {
    const saved = localStorage.getItem(`course-progress-${courseId}`);
    if (saved) {
      queueMicrotask(() => setProgress(parseStoredProgress(saved)));
    }
  }, [courseId]);

  useEffect(() => {
    localStorage.setItem(`course-progress-${courseId}`, JSON.stringify(progress));
  }, [courseId, progress]);

  useEffect(() => {
    if (window.YT?.Player) {
      queueMicrotask(() => setApiReady(true));
      return;
    }

    const existingScript = document.getElementById("youtube-iframe-api");
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = "youtube-iframe-api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };
  }, []);

  useEffect(() => {
    if (!apiReady || !selectedLesson || !window.YT?.Player) return;

    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }

    playerRef.current = new window.YT.Player("youtube-player", {
      videoId: selectedLesson.videoId,
      playerVars: {
        rel: 0,
        modestbranding: 1,
      },
      events: {
        onStateChange: (event: { data: number }) => {
          if (window.YT && event.data === window.YT.PlayerState.ENDED) {
            setProgress((prev) => ({
              ...prev,
              [selectedLesson.id]: {
                watchedToEnd: true,
                markedDone: prev[selectedLesson.id]?.markedDone ?? false,
              },
            }));
          }
        },
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [apiReady, selectedLesson]);

  const isUnlocked = (index: number) => {
    if (index === 0) return true;

    const previousLesson = lessons[index - 1];
    if (!previousLesson) return false;

    const previousProgress = progress[previousLesson.id];
    return !!previousProgress?.watchedToEnd && !!previousProgress?.markedDone;
  };

  const markAsDone = () => {
    if (!selectedLesson) return;

    setProgress((prev) => ({
      ...prev,
      [selectedLesson.id]: {
        watchedToEnd: prev[selectedLesson.id]?.watchedToEnd ?? false,
        markedDone: true,
      },
    }));
  };

  const selectedProgress = selectedLesson ? progress[selectedLesson.id] : undefined;
  const canMarkAsDone = !!selectedProgress?.watchedToEnd;

  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-[24px] bg-black p-3 shadow-sm">
        <div className="aspect-video overflow-hidden rounded-[18px] bg-neutral-900">
          <div id="youtube-player" className="h-full w-full" />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={markAsDone}
          disabled={!canMarkAsDone}
          className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
            canMarkAsDone
              ? "bg-[#0B5D2A] text-white hover:bg-[#094a22]"
              : "cursor-not-allowed bg-neutral-200 text-neutral-500"
          }`}
        >
          {selectedProgress?.markedDone ? "Aula concluída" : "Marcar aula como concluída"}
        </button>

        {selectedLesson && (
          <a
            href={`https://www.youtube.com/watch?v=${selectedLesson.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#E8F3EC] px-5 py-3 text-sm font-semibold text-[#0B5D2A] transition hover:bg-[#d8ebdf]"
          >
            Abrir no YouTube
          </a>
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-neutral-900">
          Conteúdo Programático
        </h2>

        <div className="mt-5 space-y-3">
          {lessons.map((lesson, index) => {
            const unlocked = isUnlocked(index);
            const lessonProgress = progress[lesson.id];
            const active = selectedLessonId === lesson.id;

            return (
              <div
                key={lesson.id}
                className={`rounded-[18px] border px-4 py-4 transition-all duration-200 ${
                  unlocked
                    ? "border-black/5 bg-[#F7F7F4] hover:bg-[#ECECE6] hover:shadow-md"
                    : "border-black/5 bg-[#F1F1ED] opacity-70"
                } ${active ? "ring-2 ring-[#0B5D2A]" : ""}`}
              >
                <div className="flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => unlocked && setSelectedLessonId(lesson.id)}
                    disabled={!unlocked}
                    className={`flex flex-1 items-center justify-between gap-4 text-left ${
                      unlocked ? "cursor-pointer" : "cursor-not-allowed"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold text-neutral-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="text-sm font-medium text-neutral-800 md:text-base">
                          {lesson.title}
                        </p>

                        {lessonProgress?.watchedToEnd && (
                          <p className="mt-1 text-xs font-medium text-[#0B5D2A]">
                            Vídeo assistido até o final
                          </p>
                        )}

                        {lessonProgress?.markedDone && (
                          <p className="mt-1 text-xs font-medium text-[#0B5D2A]">
                            Aula marcada como concluída
                          </p>
                        )}
                      </div>
                    </div>

                    <span className="text-neutral-400">
                      {!unlocked ? "🔒" : lessonProgress?.markedDone ? "✅" : "▶"}
                    </span>
                  </button>

                  {unlocked && (
                    <a
                      href={`https://www.youtube.com/watch?v=${lesson.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#0B5D2A] transition hover:bg-[#E8F3EC]"
                    >
                      Link
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}