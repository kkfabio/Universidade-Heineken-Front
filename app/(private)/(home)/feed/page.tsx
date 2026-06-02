"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Newspaper, Sparkles } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Metas 2030: O caminho para o impacto zero na nossa produção.",
    description:
      "Conheça o plano da empresa para acelerar sustentabilidade, eficiência e inovação industrial.",
    tag: "Destaque",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
  },
  {
    id: 2,
    title: "UNNK: Nova plataforma e IA para treinamento.",
    description:
      "Nossa plataforma centraliza conteúdos, trilhas e atualizações para todos os colaboradores.",
    tag: "Tecnologia",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    id: 3,
    title: "Da fazenda à origem: parceria com produtores locais.",
    description:
      "Uma nova etapa de cooperação fortalece qualidade, rastreabilidade e impacto regional.",
    tag: "Sustentabilidade",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
  },
  {
    id: 4,
    title: "Atualização das diretrizes de diversidade e inclusão 2026.",
    description:
      "Boas práticas, metas e compromissos atualizados para fortalecer a cultura organizacional.",
    tag: "Comunicado",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    id: 5,
    title: "Mensagem do CEO: resultados do Q2 e próximos passos.",
    description:
      "Uma visão estratégica sobre performance, crescimento e prioridades do próximo ciclo.",
    tag: "Negócios",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
  },
];

export default function FeedPage() {
  const [selectedPost, setSelectedPost] = useState<(typeof news)[number] | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPost(null);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="flex-1 px-4 py-6 md:px-6 xl:px-8 bg-[#F8FAFB] min-h-screen w-full">
      <section className="rounded-[24px] sm:rounded-[32px] bg-white p-5 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100 w-full">
        
        {/* --- CABEÇALHO DO FEED --- */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 flex items-center gap-2">
            <Newspaper className="h-3.5 w-3.5 text-[#007041] shrink-0" /> Central de Notícias
          </p>

          <h1 className="mt-3 text-3xl font-black leading-tight text-neutral-900 md:text-5xl tracking-tight">
            Acompanhe o ritmo da nossa herança.
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-slate-500 font-medium md:text-base max-w-2xl">
            Explore as últimas notícias, comunicados e iniciativas em um espaço dinâmico pensado para manter todo o ecossistema conectado ao que realmente importa.
          </p>

          {/* Filtros rápidos */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#007041] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition duration-200 hover:bg-[#005431] active:scale-[0.98] shadow-md shadow-[#007041]/10">
              Todos os comunicados
            </button>
          </div>
        </div>

        {/* --- SEÇÃO GRID DESTACADO (Mosaico Superior) --- */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 w-full">
          
          {/* Card Principal de Destaque */}
          <article className="relative overflow-hidden rounded-[24px] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-4 lg:row-span-2 min-h-[320px] flex flex-col justify-end group">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Metas verdes e inovação"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="w-fit rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="h-3 w-3 shrink-0" /> Em destaque
              </span>
              <div className="mt-12">
                <h2 className="text-xl sm:text-2xl font-black leading-tight tracking-tight">
                  Metas verdes e inovação para o próximo ciclo industrial.
                </h2>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/80 font-medium line-clamp-2">
                  Estratégias consolidadas para reduzir o impacto ambiental e ampliar a eficiência operacional em toda a nossa cadeia global.
                </p>
              </div>
            </div>
          </article>

          {/* Destaque Secundário 1 */}
          <article className="relative overflow-hidden rounded-[24px] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-4 min-h-[200px] flex flex-col justify-end group">
            <Image
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
              alt="Festival 2026"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="relative z-10 p-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-white/75">
                Cultura Interna
              </span>
              <h3 className="text-lg font-black leading-snug tracking-tight mt-1">
                Brewing Better Future Festival 2026
              </h3>
              <p className="mt-1 text-xs text-white/80 font-medium line-clamp-1">
                Evento corporativo focado em pessoas, colaboração e metas de futuro.
              </p>
            </div>
          </article>

          {/* Destaque Secundário 2 */}
          <article className="relative overflow-hidden rounded-[24px] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-4 min-h-[200px] flex flex-col justify-end group">
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Diretrizes de diversidade"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
            <div className="relative z-10 p-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-white/75">
                Diretrizes Globais
              </span>
              <h3 className="text-lg font-black leading-snug tracking-tight mt-1">
                Atualização de Diversidade e Inclusão
              </h3>
              <p className="mt-1 text-xs text-white/80 font-medium line-clamp-1">
                Novas medidas práticas para fortalecer o respeito e um ambiente equitativo.
              </p>
            </div>
          </article>

          {/* Destaque Amplo Inferior */}
          <article className="relative overflow-hidden rounded-[24px] text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg lg:col-span-8 min-h-[160px] flex flex-col justify-end group">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="IA para aprendizagem"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 p-6">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#007041] bg-white px-2 py-0.5 rounded font-mono">
                TECNOLOGIA
              </span>
              <h3 className="text-xl font-black leading-snug tracking-tight mt-2 max-w-xl">
                Plataforma integrada com IA para aceleração e aprendizagem corporativa personalizada.
              </h3>
            </div>
          </article>

        </div>

        {/* --- GRID DINÂMICO DE NOTÍCIAS (Mapeamento Base) --- */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
          {news.map((item) => (
            <article
              key={item.id}
              className="rounded-[24px] border border-slate-100 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.01)] transition duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-4 h-[200px] w-full overflow-hidden rounded-[16px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <span className="inline-block rounded-full bg-[#007041]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#007041]">
                  {item.tag}
                </span>

                <h3 className="mt-3 text-lg font-black leading-snug text-neutral-900 tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500 font-medium line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100/60 w-full">
                <button
                  type="button"
                  onClick={() => setSelectedPost(item)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-[#007041]/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#007041] transition-colors duration-200 hover:bg-[#007041]/20 group/btn"
                >
                  Expandir artigo
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover/btn:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- MODAL DETALHADO (VISUALIZAÇÃO DE POST) --- */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/40 p-4 backdrop-blur-sm transition-opacity"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-[24px] bg-white p-5 sm:p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-colors duration-200 hover:bg-slate-100"
              >
                <ArrowLeft className="h-3.5 w-3.5 shrink-0" /> Fechar painel
              </button>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-slate-100 bg-white">
              <div className="relative h-64 w-full">
                <Image
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="p-5 sm:p-6">
                <span className="inline-block rounded bg-[#007041]/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#007041]">
                  {selectedPost.tag}
                </span>

                <h3 className="mt-3 text-2xl font-black text-neutral-900 tracking-tight leading-tight">
                  {selectedPost.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 font-medium">
                  {selectedPost.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}