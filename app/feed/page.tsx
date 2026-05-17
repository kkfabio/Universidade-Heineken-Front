import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";


const news = [
  {
    id: 1, 
    title: "Metas 2030: O caminho para o impacto zero na nossa produção.",
    description:
      "Conheça o plano da empresa para acelerar sustentabilidade, eficiência e inovação industrial.",
    tag: "Destaque",
  },
  {
    id: 2,
    title: "UNNK: Nova plataforma e IA para treinamento.",
    description:
      "Nossa plataforma centraliza conteúdos, trilhas e atualizações para todos os colaboradores.",
    tag: "Tecnologia",
  },
  {
    id: 3,
    title: "Da fazenda à origem: parceria com produtores locais.",
    description:
      "Uma nova etapa de cooperação fortalece qualidade, rastreabilidade e impacto regional.",
    tag: "Sustentabilidade",
  },
  {
    id: 4,
    title: "Atualização das diretrizes de diversidade e inclusão 2026.",
    description:
      "Boas práticas, metas e compromissos atualizados para fortalecer a cultura organizacional.",
    tag: "Comunicado",
  },
  {
    id: 5,
    title: "Mensagem do CEO: resultados do Q2 e próximos passos.",
    description:
      "Uma visão estratégica sobre performance, crescimento e prioridades do próximo ciclo.",
    tag: "Negócios",
  },
];

export default function FeedPage() {
  return (
    <div className="flex min-h-screen bg-[#F3F3EF] text-neutral-900">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />

        <main className="flex-1 px-4 py-6 md:px-6 xl:px-8">
          <section className="rounded-[28px] bg-white p-6 shadow-sm md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Central de Notícias
              </p>

              <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">
                Acompanhe o ritmo da nossa herança.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                Explore as últimas notícias, comunicados e iniciativas da empresa
                em um espaço pensado para manter todos conectados ao que importa.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#0B5D2A] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#08461f] active:scale-[0.98]">
                  Todos
                </button>
                <button className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600 transition duration-200 hover:bg-neutral-200 active:scale-[0.98]">
                  Comunidades
                </button>
                <button className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600 transition duration-200 hover:bg-neutral-200 active:scale-[0.98]">
                  Feed
                </button>
                <button className="rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600 transition duration-200 hover:bg-neutral-200 active:scale-[0.98]">
                  Sustentabilidade
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <article className="overflow-hidden rounded-[24px] bg-[#177245] p-5 text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-4 lg:row-span-2">
                <div className="flex h-full min-h-[280px] flex-col justify-between">
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    Em destaque
                  </span>

                  <div>
                    <h2 className="text-2xl font-bold leading-tight">
                      Metas verdes e inovação para o próximo ciclo industrial.
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-white/80">
                      Estratégias para reduzir impacto ambiental e ampliar eficiência
                      operacional em toda a cadeia produtiva.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[24px] bg-[#A61E2D] p-5 text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-3">
                <div className="flex min-h-[180px] flex-col justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/70">
                    Community
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">
                      Brewing Better Future Festival 2026
                    </h3>
                    <p className="mt-2 text-sm text-white/80">
                      Evento interno com foco em cultura, colaboração e inovação.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[24px] bg-neutral-50 p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-3">
                <div className="flex min-h-[180px] flex-col justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#0B5D2A]">
                    Atualização
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                      Atualização das diretrizes de diversidade e inclusão 2026.
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">
                      Novas medidas para fortalecer respeito, equidade e ambiente seguro.
                    </p>
                  </div>
                </div>
              </article>

              <article className="rounded-[24px] bg-neutral-900 p-5 text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-2">
                <div className="flex min-h-[180px] flex-col justify-end">
                  <h3 className="text-lg font-semibold leading-snug">
                    Plataforma com IA para aprendizagem personalizada.
                  </h3>
                </div>
              </article>

              {news.map((item) => (
                <article
                  key={item.id}
                  className="rounded-[24px] border border-black/5 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-4"
                >
                   <img
                   src="/images/feed/IA.png"
                   alt="Notícia"
                   className="mb-4 h-[220px] w-full rounded-[20px] object-cover"
                   />
                   
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-500">
                    {item.tag}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold leading-snug text-neutral-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-500">
                    {item.description}
                  </p>

                  <button className="mt-5 rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#0B5D2A] transition duration-200 hover:bg-[#d8ebdf] active:scale-[0.98]">
                    Ver mais
                  </button>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}