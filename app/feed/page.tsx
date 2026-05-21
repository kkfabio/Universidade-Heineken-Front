import { Topbar } from "@/components/layout/Topbar";


const news = [
  {
    id: 1, 
    title: "Metas 2030: O caminho para o impacto zero na nossa produção.",
    description:
      "Conheça o plano da empresa para acelerar sustentabilidade, eficiência e inovação industrial.",
    tag: "Destaque",
    image: "/images/feed/2030.jpg",
  },
  {
    id: 2,
    title: "UNNK: Nova plataforma e IA para treinamento.",
    description:
      "Nossa plataforma centraliza conteúdos, trilhas e atualizações para todos os colaboradores.",
    tag: "Tecnologia",
    image: "/images/feed/ia.jpg",
  },
  {
    id: 3,
    title: "Da fazenda à origem: parceria com produtores locais.",
    description:
      "Uma nova etapa de cooperação fortalece qualidade, rastreabilidade e impacto regional.",
    tag: "Sustentabilidade",
    image: "/images/feed/fazenda.jpg",
  },
  {
    id: 4,
    title: "Atualização das diretrizes de diversidade e inclusão 2026.",
    description:
      "Boas práticas, metas e compromissos atualizados para fortalecer a cultura organizacional.",
    tag: "Comunicado",
    image: "/images/feed/2026.jpg",
  },
  {
    id: 5,
    title: "Mensagem do CEO: resultados do Q2 e próximos passos.",
    description:
      "Uma visão estratégica sobre performance, crescimento e prioridades do próximo ciclo.",
    tag: "Negócios",
    image: "/images/feed/ceo.jpg",
  },
];

export default function FeedPage() {
  return (
    <div className="flex min-h-screen bg-[#F3F3EF] text-neutral-900">
      

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
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
              <article className="relative overflow-hidden rounded-[24px] text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-4 lg:row-span-2">
               <img
                 src="/images/feed/destaque.jpg"
                 alt="Metas verdes e inovação para o próximo ciclo industrial"
                 className="absolute inset-0 h-full w-full object-cover"
               />
             
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
             
               <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between p-5">
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

              <article className="relative overflow-hidden rounded-[24px] text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-3">
                <img
                  src="/images/feed/community.jpg"
                  alt="Brewing Better Future Festival 2026"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
                <div className="relative z-10 flex min-h-[180px] flex-col justify-between p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                    Community
                  </span>
              
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">
                      Brewing Better Future Festival 2026
                    </h3>
                    <p className="mt-2 text-sm text-white/85">
                      Evento interno com foco em cultura, colaboração e inovação.
                    </p>
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[24px] text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-3">
  <img
    src="/images/feed/atualizacao.jpg"
    alt="Atualização das diretrizes de diversidade e inclusão 2026"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

  <div className="relative z-10 flex min-h-[180px] flex-col justify-between p-5">
    <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
      Atualização
    </span>

    <div>
      <h3 className="text-lg font-semibold leading-snug">
        Atualização das diretrizes de diversidade e inclusão 2026.
      </h3>
      <p className="mt-2 text-sm text-white/85">
        Novas medidas para fortalecer respeito, equidade e ambiente seguro.
      </p>
    </div>
  </div>
</article>

              <article className="relative overflow-hidden rounded-[24px] text-white transition duration-200 hover:-translate-y-1 hover:shadow-md lg:col-span-2">
  <img
    src="/images/feed/plataforma.jpg"
    alt="Plataforma com IA para aprendizagem personalizada"
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/55" />

  <div className="relative z-10 flex min-h-[180px] flex-col justify-end p-5">
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
                    src={item.image}
                    alt={item.title}
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
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}