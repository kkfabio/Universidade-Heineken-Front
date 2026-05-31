import { CoursePlayer } from "@/app/(private)/(home)/certificados/components/CoursePlayer";
import Link from "next/link";

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
    coverImage: string;
    content: {
    id: string;
    title: string;
    videoUrl: string;
    }[];
    certificateImage: string;
    videoUrl: string;
    status: "not-started" | "in-progress" | "completed";
    actionLabel: string;
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
    coverImage: "/images/cursos/curso-1.jpg",
    content: [
      {
        id: "aula-01",
        title: "Fundamentos da Matéria-Prima",
        videoUrl: "https://youtu.be/78tRimI-ryo?si=EyxQ8emKT3Y0RhLS"
      },
      {
        id: "aula-02",
        title: "Bio-Química da Mosturação",
        videoUrl: "https://youtu.be/ZVKB4F7XpHo?si=xlu85u24EzkfVYYJ"
      },
      {
        id: "aula-03",
        title: "A Arte da Fermentação Controlada",
        videoUrl: "https://www.youtube.com/live/JWH_r3vNDNM?si=3GMr1xX2oPadnoBu"
      },
      {
        id: "aula-04",
        title: "Filtragem e Envase Sustentável",
        videoUrl: "https://youtu.be/14IxPad-68E?si=UUMLmC8FNB7JYg6_"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/G1nb0T3Cnss?si=gp7bMU4rB09_RFd0",
    status: "not-started",
    actionLabel: "Iniciar Curso",
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
    coverImage: "/images/cursos/curso-2.jpg",
    content: [
      {
        id: "aula-01",
        title: "Origem da Marca",
        videoUrl: "https://youtu.be/TSuK4pbL_tM?si=CQ2y3nFCTttAbksP"
      },
      {
        id: "aula-02",
        title: "Valores e Liderança",
        videoUrl: "https://youtu.be/_qGP0E9FtYo?si=sr_6IIXGqlR-lMkE"
      },
      {
        id: "aula-03",
        title: "Rituais e Colaboração",
        videoUrl: "https://youtu.be/a8NJoHu_7dI?si=XFx0glhgFqa94uoE"
      },
      {
        id: "aula-04",
        title: "Visão de Futuro",
        videoUrl: "https://youtu.be/B_nJNfGsKI8?si=_zcrzwC9dKT4WoJc"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/TSuK4pbL_tM?si=-N4I-tWLAMGt_Ajf",
    status: "not-started",
    actionLabel: "Iniciar Curso",
  },

  "curso-03": {
    title: "Inovação Digital",
    category: "Transformação Digital",
    duration: "7 Horas",
    modules: "4 Capítulos",
    level: "Intermediário",
    lessons: "14 Vídeos",
    description:
      "Curso voltado à digitalização de processos, inovação aplicada e uso estratégico de tecnologia no ambiente corporativo.",
    coverImage: "/images/cursos/curso-3.jpg",
    content: [
      {
        id: "aula-01",
        title: "Cultura de Inovação",
        videoUrl: "https://youtu.be/MFqZte_Gsm0?si=L9G8t97r-beHx_4H"
      },
      {
        id: "aula-02",
        title: "Ferramentas Digitais",
        videoUrl: "https://youtu.be/7-pe7s9_68Y?si=a15wwJMd6h6bUiGI"
      },
      {
        id: "aula-03",
        title: "Automação de Processos",
        videoUrl: "https://youtu.be/0axOKIo83k4?si=NulJKMyxfg24bsJ1"
      },
      {
        id: "aula-04",
        title: "Transformação no Ambiente de Trabalho",
        videoUrl: "https://youtu.be/DYfVxOPrBXg?si=V_wZ7Kce-9Kci3UX"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/-SSDHhsxPtM?si=VJyRAJqoPdgP9YyC",
    status: "not-started",
    actionLabel: "Iniciar Curso",
  },
  
  "curso-04": {
    title: "Qualidade do Produto",
    category: "Qualidade",
    duration: "6 Horas",
    modules: "4 Capítulos",
    level: "Intermediário",
    lessons: "12 Vídeos",
    description:
      "Curso focado em controle de qualidade, conformidade e padronização de processos para excelência do produto final.",
    coverImage: "/images/cursos/curso-4.jpg",
    content: [
      {
        id: "aula-01",
        title: "Padrões de Qualidade",
        videoUrl: "https://youtu.be/iBbk60UWiMU?si=1cjnvpS-oyPKlEaX"
      },
      {
        id: "aula-02",
        title: "Controle e Inspeção",
        videoUrl: "https://youtu.be/bf2R8FfM9m4?si=jWxruKVPWD6IQ0JK"
      },
      {
        id: "aula-03",
        title: "Boas Práticas",
        videoUrl: "https://youtu.be/iAGvRI-Kg-0?si=RN7tZU9DvKCsefQ7"
      },
      {
        id: "aula-04",
        title: "Melhoria Contínua",
        videoUrl: "https://youtu.be/34XyVMnDqyg?si=UZ87i6IfUp6MESPU"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/yn-hA6hQNDs?si=VMbQ8t7LeZpWlWG9",
    status: "not-started",
    actionLabel: "Iniciar Curso",
  },

  "curso-05": {
    title: "Logística e Operações",
    category: "Operações",
    duration: "8 Horas",
    modules: "4 Capítulos",
    level: "Intermediário",
    lessons: "12 Vídeos",
    description:
      "Curso voltado à organização de processos logísticos, controle operacional e melhoria da eficiência no fluxo de trabalho.",
    coverImage: "/images/cursos/curso-5.jpg",
    content: [
      {
        id: "aula-01",
        title: "Fundamentos da Logística",
        videoUrl: "https://youtu.be/63o70UWJthM?si=XeoHVEfv1vCwamll"
      },
      {
        id: "aula-02",
        title: "Planejamento Operacional",
        videoUrl: "https://youtu.be/JjwZfXnNb3o?si=-T9jzNzg6bQe11gj"
      },
      {
        id: "aula-03",
        title: "Controle de Estoque e Distribuição",
        videoUrl: "https://youtu.be/H5O-BHmkUh4?si=chAgOsc7upfIRAZX"
      },
      {
        id: "aula-04",
        title: "Indicadores de Eficiência",
        videoUrl: "https://youtu.be/f3tZiS2FAsQ?si=OiWTBnnjZDour7GU"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/JRBK_0UYz48?si=-wEZASAS8nHL-iDb",
    status: "in-progress",
    actionLabel: "Continuar Curso",
  },

  "curso-06": {
    title: "Estratégias de Marketing",
    category: "Marketing",
    duration: "6 Horas",
    modules: "4 Capítulos",
    level: "Intermediário",
    lessons: "10 Vídeos",
    description:
      "Curso focado em posicionamento de marca, campanhas estratégicas e ações de comunicação voltadas para resultados.",
    coverImage: "/images/cursos/curso-6.jpg",
    content: [
      {
        id: "aula-01",
        title: "Fundamentos do Marketing",
        videoUrl: "https://youtu.be/mzAgIFptqQ4?si=vXn4tEbeT2Xx2eYD"
      },
      {
        id: "aula-02",
        title: "Posicionamento e Público-Alvo",
        videoUrl: "https://youtu.be/qn5w9_q-kIE?si=AAh_TphOFGCa6tMD"
      },
      {
        id: "aula-03",  
        title: "Planejamento de Campanhas",
        videoUrl: "https://youtu.be/82NoBEH0pWk?si=2o_Qqsz4NTxIxyV6"
      },
      {
        id: "aula-04",
        title: "Métricas e Desempenho",
        videoUrl: "https://youtu.be/7EMVB5YidCo?si=uRtERlERdYoFc3mH"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/CcxRFJY-0ZU?si=Lnaou66ED3kTC4CN",
    status: "in-progress",
    actionLabel: "Continuar Curso",
  },

  "curso-07": {
    title: "Liderança de Equipes",
    category: "Liderança",
    duration: "7 Horas",
    modules: "5 Capítulos",
    level: "Intermediário",
    lessons: "11 Vídeos",
    description:
      "Curso desenvolvido para fortalecer competências de liderança, comunicação, gestão de pessoas e tomada de decisão.",
    coverImage: "/images/cursos/curso-7.jpg",
    content: [
      {
        id: "aula-01",
        title: "Perfil do Líder",
        videoUrl: "https://youtu.be/aKTa4yr_tuU?si=99diO8heZhgICK6L"
      },
      {
        id: "aula-02",
        title: "Comunicação com a Equipe",
        videoUrl: "https://youtu.be/awuLAbNtW2c?si=g1B3r23X2gfpy5XZ"
      },
      {
        id: "aula-03",
        title: "Gestão de Conflitos",
        videoUrl: "https://youtu.be/klivMgjC1ys?si=WEjs8nhH2MndfYoT"
      },
      {
        id: "aula-04",
        title: "Tomada de Decisão",
        videoUrl: "https://youtu.be/i1QX27OcC6M?si=gvlY416mifyU72M4"
      },
      {
        id: "aula-05",
        title: "Desenvolvimento de Times",
        videoUrl: "https://youtu.be/Wz0sHDu4aW8?si=qOrsQlKyAfJu5umN"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/IddGRxARTdA?si=V90Q3tzY3drjjgCN",
    status: "in-progress",
    actionLabel: "Continuar Curso",
  },

  "curso-08": {
    title: "Segurança do Trabalho",
    category: "Segurança",
    duration: "6 Horas",
    modules: "4 Capítulos",
    level: "Intermediário",
    lessons: "10 Vídeos",
    description:
      "Curso voltado à prevenção de riscos, boas práticas no ambiente corporativo e fortalecimento da cultura de segurança nas operações.",
    coverImage: "/images/cursos/curso-8.jpg",
    content: [
      {
        id: "aula-01",
        title: "Fundamentos de Segurança do Trabalho",
        videoUrl: "https://youtu.be/J8d5DH0yDpk?si=SDCw84dKG7P7okXz",
      },
      {
        id: "aula-02",
        title: "Identificação de Riscos",
        videoUrl: "https://youtu.be/XeQN47rl70Y?si=rNjpTVJGz_4Y9NT9",
      },
      {
        id: "aula-03",
        title: "Uso Correto de EPIs",
        videoUrl: "https://youtu.be/OeCtamAHi4A?si=uFmk0rwz4_qp0z0p",
      },
      {
        id: "aula-04",
        title: "Prevenção e Conduta em Situações de Incidente",
        videoUrl: "https://youtu.be/YszzzrkGjDc?si=z4j-_mUxMmba3v-a",
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/J8d5DH0yDpk?si=SDCw84dKG7P7okXz",
    status: "completed",
    actionLabel: "Revisar Curso",
  },
  
  "curso-09": {
    title: "Ética e Compliance",
    category: "Compliance",
    duration: "5 Horas",
    modules: "4 Capítulos",
    level: "Intermediário",
    lessons: "9 Vídeos",
    description:
      "Curso desenvolvido para reforçar princípios éticos, condutas esperadas, transparência e conformidade nas relações internas e externas da organização.",
    coverImage: "/images/cursos/curso-9.jpg",
    content: [
      {
        id: "aula-01",
        title: "Princípios de Ética Corporativa",
        videoUrl: "https://youtu.be/DB-egMDjlr8?si=pvlwFo6-JVRqp3rz"
      },
      {
        id: "aula-02",
        title: "Código de Conduta",
        videoUrl: "https://youtu.be/K_GOXVoDiu0?si=NjToPHzO2p26fokL"
      },
      {
        id: "aula-03",
        title: "Compliance e Responsabilidades",
        videoUrl: "https://youtu.be/dbxDJoSaQSc?si=bc3LhwHvJ8S3n0WF" 
      },
      {
        id: "aula-04",
        title: "Boas Práticas no Ambiente Profissional",
        videoUrl: "https://youtu.be/ypt0YZKqwo8?si=axJTHsbDNQrEJzyf"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/2BDpJ6UMXb4?si=xGXvwErnXDDCa4i8",
    status: "completed",
    actionLabel: "Revisar Curso",
  },
  
  "curso-10": {
    title: "Onboarding Global",
    category: "Integração",
    duration: "4 Horas",
    modules: "3 Capítulos",
    level: "Iniciante",
    lessons: "8 Vídeos",
    description:
      "Curso de integração criado para apresentar a cultura organizacional, os fluxos internos e os principais direcionamentos para novos colaboradores.",
    coverImage: "/images/cursos/curso-10.jpg",
    content: [
      {
        id: "aula-01",
        title: "Boas-vindas e Visão da Empresa",
        videoUrl: "https://youtu.be/aDOuoBu0_24?si=nuxAW2kYmAwj-_IE"
      },
      {
        id: "aula-02",
        title: "Estrutura, Cultura e Processos",
        videoUrl: "https://youtu.be/A8qpKpzNLLQ?si=_AuOh2pfJ05ZWSvd"
      },
      {
        id: "aula-03",
        title: "Primeiros Passos na Jornada do Colaborador",
        videoUrl: "https://youtu.be/qJBvlXLGnoA?si=RS2OQIF0ZnPgNwlW"
      },
    ],
    certificateImage: "/images/cursos/certificado-1.jpg",
    videoUrl: "https://youtu.be/NV95U70ibhU?si=8uKV5DDmFcgyx0Dr",
    status: "completed",
    actionLabel: "Revisar Curso",
  },

};

type CoursePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailsPage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courseData[id] ?? courseData["curso-01"];

  if (!course) {
    return <div className="p-6">Curso não encontrado.</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#F4F4F1] text-neutral-900">

      <div className="flex min-h-screen flex-1 flex-col">

        <main className="flex-1 px-4 py-6 md:px-6 xl:px-8">
          <section className="overflow-hidden rounded-[28px] bg-white shadow-sm">
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[340px]">
              <img
                src={course.coverImage}
                alt={`Capa do curso ${course.title}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            
              <div className="absolute inset-0 bg-black/45" />
            
              <div className="relative z-10 p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Curso • {course.category}
                </p>
            
                <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                  {course.title}
                </h1>
            
                
            
                <div
                  className={`mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                    course.status === "completed"
                      ? "bg-[#E8F3EC] text-[#0B5D2A]"
                      : course.status === "in-progress"
                      ? "bg-[#E8F3EC] text-[#0B5D2A]"
                      : "bg-[#F7C948] text-[#3E2A00]"
                  }`}
                >
                  {course.status === "completed"
                    ? "✅ Concluído — você já finalizou este curso"
                    : course.status === "in-progress"
                    ? "📘 Em andamento — continue sua jornada"
                    : "⏳ Pendente — você ainda não iniciou este curso"}
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
                       key={item.title}
                       className="flex items-center justify-between rounded-[18px] border border-black/5 bg-[#F7F7F4] px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:bg-[#ECECE6] hover:shadow-md"
                     >
                       <div className="flex items-center gap-4">
                         <span className="text-sm font-semibold text-neutral-400">
                           {String(index + 1).padStart(2, "0")}
                         </span>
                   
                         <p className="text-sm font-medium text-neutral-800 md:text-base">
                           {item.title}
                         </p>
                       </div>
                   
                       {index === 0 ? (
                         <a
                           href={item.videoUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="text-neutral-400 transition hover:text-[#0B5D2A]"
                         >
                           ⌄
                         </a>
                       ) : (
                         <span className="text-neutral-400">🔒</span>
                       )}
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
                    {course.actionLabel}
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
        <div className="mt-6">
                 <CoursePlayer 
                   courseId={id}
                   lessons={course.content.map((item) => ({
                     id: item.id,
                     title: item.title,
                     videoId:
                       item.videoUrl.match(
                         /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/live\/)([^?&/]+)/
                       )?.[1] ?? "",
                   }))}
                 />
               </div>
      </div>
    </div>
  );
}