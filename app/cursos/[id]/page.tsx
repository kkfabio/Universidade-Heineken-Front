import Link from "next/link";
import { Topbar } from "@/components/layout/Topbar";

type CoursePageProps = {
  params: {
    id: string;
  };
};

const courseData: Record<
  string,
  {
    title: string;
    category: string;
    duration: string;
    modules: string;
    level: string;
    lessons: string;
    description: string;
    content: string[];
    certificateImage: string;
    videoUrl: string;
  }
> = {
  "curso-01": {
    title: "Mestria em Processos Cervejeiros: Da Cevada ao Copo",
    category: "Mestria em Processos",
    duration: "12 Horas",
    modules: "06 Capítulos",
    level: "Avançado",
    lessons: "24 Vídeos",
    description:
      "Mergulhe na profundidade da ciência cervejeira. Este curso foi pensado para profissionais que buscam evolução operacional na produção global da Heineken. Cobrimos da seleção biológica do lúpulo até as técnicas de fermentação de precisão que garantem sabor icônico em qualquer lugar do mundo.",
    content: [
      "Fundamentos da Matéria-Prima",
      "Bio-Química da Mosturação",
      "A Arte da Fermentação Controlada",
      "Filtragem e Envase Sustentável",
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/G1nb0T3Cnss?si=gp7bMU4rB09_RFd0",
  },
  "curso-02": {
    title: "Cultura Heineken e Jornada Institucional",
    category: "Cultura Organizacional",
    duration: "08 Horas",
    modules: "04 Capítulos",
    level: "Intermediário",
    lessons: "16 Vídeos",
    description:
      "Conheça a história, os valores, os rituais e a visão de futuro da organização em uma trilha feita para fortalecer cultura, alinhamento e pertencimento.",
    content: [
      "Origem da Marca",
      "Valores e Liderança",
      "Rituais e Colaboração",
      "Visão de Futuro",
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/TSuK4pbL_tM?si=-N4I-tWLAMGt_Ajf",
  },
};

export default function CourseDetailsPage({ params }: CoursePageProps) {
  const course = courseData[params.id] ?? courseData["curso-01"];

  return (
    <div className="flex min-h-screen bg-[#F4F4F1] text-neutral-900">
     

      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />

        <main className="flex-1 px-4 py-6 md:px-6 xl:px-8">
          <section className="overflow-hidden rounded-[28px] bg-white shadow-sm">
            <div className="relative min-h-[280px] bg-gradient-to-r from-[#4B371C] via-[#80652E] to-[#0B5D2A] p-6 text-white md:min-h-[340px] md:p-8">
              <div className="absolute inset-0 bg-black/20" />

              <div className="relative z-10 max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Curso • {course.category}
                </p>

                <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                  {course.title}
                </h1>

                <div className="mt-5 inline-flex rounded-full bg-[#F7C948] px-4 py-2 text-sm font-semibold text-[#3E2A00]">
                  ⏳ Pendente — você ainda não iniciou este curso
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 p-6 md:p-8 xl:grid-cols-12">
              <div className="xl:col-span-8">
                <div className="rounded-[24px] bg-[#F7F7F4] p-6">
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Duração
                      </p>
                      <p className="mt-2 text-sm font-semibold text-neutral-900">
                        {course.duration}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Módulos
                      </p>
                      <p className="mt-2 text-sm font-semibold text-neutral-900">
                        {course.modules}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Nível
                      </p>
                      <p className="mt-2 text-sm font-semibold text-neutral-900">
                        {course.level}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Aulas
                      </p>
                      <p className="mt-2 text-sm font-semibold text-neutral-900">
                        {course.lessons}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-neutral-900">
                      Sobre este curso
                    </h2>
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600 md:text-base">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Conteúdo Programático
                  </h2>

                  <div className="mt-5 space-y-3">
                    {course.content.map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-[18px] border border-black/5 bg-[#F7F7F4] px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#ECECE6] hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-semibold text-neutral-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm font-medium text-neutral-800 md:text-base">
                            {item}
                          </p>
                        </div>

                        <span className="text-neutral-400">
                          {index === 0 ? "⌄" : "🔒"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="xl:col-span-4 space-y-6">
                <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <h3 className="text-xl font-bold text-neutral-900">
                    Pronto para começar?
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    Inicie hoje o desenvolvimento e avance com os conteúdos da
                    nossa jornada educacional.
                  </p>

                  <a
                    href={course.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[#0B5D2A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#094a22]"
                  >
                    Iniciar Curso
                  </a>
                </div>

                <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                    Certificação Heineken
                  </p>

                  <img
                    src={course.certificateImage}
                    alt={`Certificado do curso ${course.title}`}
                    className="mt-4 h-[180px] w-full rounded-[20px] object-cover"
                  />

                  <p className="mt-4 text-sm leading-6 text-neutral-500">
                    Conclua as etapas para desbloquear seu certificado ao final
                    da jornada.
                  </p>

                  <Link
                    href="/cursos"
                    className="mt-4 inline-flex text-sm font-semibold text-[#0B5D2A]"
                  >
                    ← Voltar para cursos
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}