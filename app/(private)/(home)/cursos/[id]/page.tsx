import { CoursePlayer } from "@/app/(private)/(home)/certificados/components/CoursePlayer";
import Link from "next/link";
import { 
  Clock, 
  Layers, 
  Award, 
  BookOpen, 
  Lock, 
  PlayCircle, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft 
} from "lucide-react";

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
        videoUrl: "https://www.youtube.com/watch?v=mAXUbJd60zc"
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
        title: "Estrutura, Culture e Processos",
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
    return <div className="p-6 font-bold text-slate-700">Curso não encontrado.</div>;
  }

  return (
    <div className="flex min-h-screen bg-[#F8FAFB] text-neutral-900 w-full">
      <div className="flex min-h-screen flex-1 flex-col w-full min-w-0">
        
        <main className="flex-1 p-4 sm:p-6 md:p-8 w-full">
          <section className="overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100">
            
            {/* --- BANNER DE CAPA --- */}
            <div className="relative min-h-[260px] overflow-hidden md:min-h-[340px] flex items-end">
              <img
                src={course.coverImage}
                alt={`Capa do curso ${course.title}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
              <div className="relative z-10 p-5 sm:p-8 text-white w-full">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                  Curso de Aperfeiçoamento • {course.category}
                </p>
            
                <h1 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight max-w-4xl">
                  {course.title}
                </h1>
            
                {/* Status customizado por badges */}
                <div className="mt-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-md border">
                  {course.status === "completed" && (
                    <span className="flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" /> Concluído — Trilha Finalizada
                    </span>
                  )}
                  {course.status === "in-progress" && (
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <Clock className="h-4 w-4" /> Em andamento — Continue estudando
                    </span>
                  )}
                  {course.status === "not-started" && (
                    <span className="flex items-center gap-1.5 text-amber-300">
                      <AlertCircle className="h-4 w-4" /> Pendente — Não iniciado
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* --- CONTEÚDO PRINCIPAL --- */}
            <div className="grid grid-cols-1 gap-6 p-5 sm:p-8 xl:grid-cols-12 w-full">
              
              {/* Coluna da Esquerda (Informações e Aulas) */}
              <div className="xl:col-span-8 space-y-6 min-w-0">
                <div className="rounded-[24px] bg-slate-50/70 border border-slate-100 p-5 sm:p-6">
                  
                  {/* Grid de Metadados */}
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4 border-b border-slate-200/60 pb-6">
                    <div className="flex items-start gap-2.5">
                      <Clock className="h-5 w-5 text-[#007041] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Duração</p>
                        <p className="mt-0.5 text-sm font-black text-slate-800">{course.duration}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Layers className="h-5 w-5 text-[#007041] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Módulos</p>
                        <p className="mt-0.5 text-sm font-black text-slate-800">{course.modules}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Award className="h-5 w-5 text-[#007041] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Nível</p>
                        <p className="mt-0.5 text-sm font-black text-slate-800">{course.level}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <BookOpen className="h-5 w-5 text-[#007041] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Aulas</p>
                        <p className="mt-0.5 text-sm font-black text-slate-800">{course.lessons}</p>
                      </div>
                    </div>
                  </div>

                  {/* Descrição */}
                  <div className="mt-6">
                    <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">
                      Sobre este curso
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 font-medium">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Lista de Aulas */}
                <div>
                  <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-4 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#007041]" /> Conteúdo Programático
                  </h2>

                  <div className="space-y-2.5">
                    {course.content.map((item, index) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between rounded-[16px] border border-slate-100 bg-slate-50/50 px-4 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100/80 hover:shadow-sm"
                      >
                        <div className="flex items-center gap-4 min-w-0">
                          <span className="text-xs font-bold text-slate-400 font-mono bg-white border border-slate-100 h-7 w-7 rounded-lg flex items-center justify-center shrink-0">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm sm:text-base font-bold text-slate-700 truncate">
                            {item.title}
                          </p>
                        </div>
                    
                        {index === 0 ? (
                          <a
                            href={item.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#007041] p-1 transition-colors shrink-0"
                            title="Assistir Aula"
                          >
                            <PlayCircle className="h-5 w-5 text-[#007041]" />
                          </a>
                        ) : (
                          <span className="text-slate-300 p-1 shrink-0" title="Conteúdo bloqueado">
                            <Lock className="h-4 w-4" />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Coluna da Direita (Painéis Laterais de Ação e Certificado) */}
              <aside className="xl:col-span-4 space-y-5 lg:w-full">
                
                {/* Card de CTA Principal */}
                <div className="rounded-[24px] border border-slate-100 bg-slate-50/50 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                    Pronto para começar?
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
                    Acelere o seu desenvolvimento corporativo e ganhe relevância na plataforma completando as etapas de vídeo e questionários.
                  </p>
                  <a
                    href={course.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#007041] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#005a34] active:scale-95 shadow-md shadow-[#007041]/10"
                  >
                    {course.actionLabel}
                  </a>
                </div>

                {/* Card do Certificado */}
                <div className="rounded-[24px] border border-slate-100 bg-white p-5 sm:p-6 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Certificação Acadêmica
                  </p>

                  <div className="mt-3 relative h-[160px] w-full rounded-[16px] overflow-hidden group border border-slate-100">
                    <img
                      src={course.certificateImage}
                      alt={`Certificado do curso ${course.title}`}
                      className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
                    Conclua com sucesso 100% dos módulos e atinja os critérios mínimos de avaliação para desbloquear e exportar seu diploma.
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 w-full">
                    <Link
                      href="/cursos"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#007041] hover:text-[#005a34] transition-colors"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Voltar para lista
                    </Link>
                  </div>
                </div>
                
              </aside>
            </div>
          </section>    
        </main>

        {/* --- REPRODUTOR DE VIDEO ACOPLADO --- */}
        <div className="px-4 pb-8 md:px-6 xl:px-8 w-full">
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