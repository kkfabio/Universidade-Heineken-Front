import Link from "next/link";
import { ArrowRight, PlayCircle, Clock, CheckCircle2, BookOpen } from "lucide-react";

// IDs corrigidos para evitar colisões de rotas e erros de Key no React
const featuredCourses = [
  {
    id: "curso-01",
    title: "Beer Expert",
    subtitle: "Aprendizado Avançado",
    action: "Iniciar Módulo",
    image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&fit=crop",
  },
  {
    id: "curso-02",
    title: "Cultura Heineken",
    subtitle: "Trilha Institucional",
    action: "Continuar",
    image: "https://etilicos.com/wp-content/uploads/2020/03/heineken-experience-tour-amsterdam-12-min.jpg",
  },
];

const inProgressCourses = [
  {
    id: "curso-03",
    title: "Logística e Operações",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&fit=crop",
    progress: 65, // Convertido para número para controlar a largura da barra nativamente
  },
  {
    id: "curso-04",
    title: "Estratégias de Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop",
    progress: 40,
  },
  {
    id: "curso-05",
    title: "Liderança de Equipes",
    image: "https://media.licdn.com/dms/image/v2/D4E10AQEqJQkQLLgY3A/image-shrink_800/image-shrink_800/0/1713539613642?e=2147483647&v=beta&t=1Vbjwlniz32inguKrVt7cXja8lBprIF-7KFp3iS1j6Q",
    progress: 15,
  },
];

const notStartedCourses = [
  {
    id: "curso-06",
    title: "Sustentabilidade 2030",
    image: "https://static.casapino.com.br/casapino/2025/01/21102501/CAPA-CMS-CASA-PINO-4.png",
  },
  {
    id: "curso-07",
    title: "Vendas Avançadas",
    image: "https://exame.com/insight/_next/image?url=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2023%2F07%2FHEINEKEN-SITE.jpg&w=750&q=75",
  },
  {
    id: "curso-08",
    title: "Inovação Digital",
    image: "https://www.portaldapropaganda.com.br/noticias/wp-content/uploads/2023/08/2023_022_LEPUB_HEINEKEN_FRIDGE_SETUP_GAMER_P06-002.jpg",
  },
  {
    id: "curso-09",
    title: "Qualidade do Produto",
    image: "https://engarrafadormoderno.com.br/wp-content/uploads/2016/01/MG_8843.jpg",
  },
];

const completedCourses = [
  {
    id: "curso-10",
    title: "Segurança do Trabalho",
    image: "https://sindicerv.com.br/2025/wp-content/uploads/2021/04/Maria-Elenice-da-Silva-Bittencourt-operadora-de-em_00375123_0_202104221850-md.jpg",
    status: "Concluído",
  },
  {
    id: "curso-11",
    title: "Ética e Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop",
    status: "Concluído",
  },
  {
    id: "curso-12",
    title: "Onboarding Global",
    image: "https://apas.com.br/wp-content/uploads/2025/01/visita-heineken.jpg",
    status: "Concluído",
  },
];

export default function CursosPage() {
  return (
    <main className="flex-1 p-4 sm:p-6 md:p-8 bg-[#F8FAFB] text-neutral-900">
      <section className="rounded-[24px] sm:rounded-[32px] bg-white p-5 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100">
        
        {/* Header Principal */}
        <div className="max-w-3xl mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">Módulos Acadêmicos</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-[#007041] tracking-tighter">
            Meus Cursos
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-500 font-medium">
            Continue sua jornada de aprendizado corporativo na plataforma UHNK com trilhas personalizadas e focadas no seu desenvolvimento de carreira.
          </p>
        </div>

        {/* --- SEÇÃO: EM DESTAQUE --- */}
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-[#007041]" /> Em destaque
            </h2>
            <button className="text-xs font-bold uppercase tracking-wider text-[#007041] hover:text-[#005a34] transition-colors flex items-center gap-1">
              Ver todos <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {featuredCourses.map((course) => (
              <article
                key={course.id}
                className="relative overflow-hidden rounded-[24px] min-h-[280px] text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                <img src={course.image} alt={course.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/10">
                      Recomendado para você
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black tracking-tight">{course.title}</h3>
                    <p className="mt-1 text-sm text-white/80 font-medium">{course.subtitle}</p>
                    <Link
                      href={`/cursos/${course.id}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 transition hover:bg-[#F3F6F0] active:scale-95 shadow-md"
                    >
                      <PlayCircle className="h-4 w-4 text-[#007041]" />
                      <span className="text-xs font-bold text-[#007041] uppercase tracking-wider">{course.action}</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* --- SEÇÃO: EM ANDAMENTO --- */}
        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Sua Jornada</p>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#007041]" /> Em andamento
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{inProgressCourses.length} ativos</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {inProgressCourses.map((course) => (
              <article key={course.id} className="flex flex-col justify-between rounded-[20px] border border-slate-100 bg-slate-50/50 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg group">
                <div className="w-full">
                  <div className="overflow-hidden rounded-[16px] h-40 w-full relative">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="inline-flex rounded-full bg-[#007041]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#007041]">
                      Estudando
                    </span>
                    <span className="text-xs font-black text-slate-700">{course.progress}%</span>
                  </div>
                  <h3 className="mt-2 text-base font-black text-slate-800 tracking-tight line-clamp-1">{course.title}</h3>
                  
                  {/* Barra de progresso gráfica adicionada */}
                  <div className="mt-3 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-[#007041] h-full rounded-full transition-all duration-500" style={{ width: `${course.progress}%` }} />
                  </div>
                </div>
                
                <Link
                  href={`/cursos/${course.id}`}
                  className="mt-5 w-full inline-flex items-center justify-center rounded-xl bg-[#007041] px-4 py-2.5 text-xs font-bold text-white uppercase tracking-wider transition hover:bg-[#005a34] active:scale-[0.98] shadow-sm shadow-[#007041]/10"
                >
                  Continuar estudo
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* --- SEÇÃO: NÃO INICIADOS --- */}
        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Próximas Competências</p>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-slate-400" /> Não iniciados
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{notStartedCourses.length} disponíveis</span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {notStartedCourses.map((course) => (
              <article key={course.id} className="flex flex-col justify-between rounded-[20px] border border-slate-100 bg-slate-50/50 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg group">
                <div>
                  <div className="overflow-hidden rounded-[16px] h-36 w-full">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <h3 className="mt-3.5 text-sm sm:text-base font-black text-slate-800 tracking-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem] leading-tight">
                    {course.title}
                  </h3>
                </div>
                <Link
                  href={`/cursos/${course.id}`}
                  className="mt-3 w-full inline-flex items-center justify-center gap-1 rounded-xl bg-slate-100 hover:bg-[#007041]/10 text-slate-600 hover:text-[#007041] px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition active:scale-[0.98]"
                >
                  Ver conteúdo <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        {/* --- SEÇÃO: CONCLUÍDOS --- */}
        <div className="mt-12">
          <div className="mb-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Histórico de Conquistas</p>
              <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-600" /> Concluídos
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{completedCourses.length} certificados</span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {completedCourses.map((course) => (
              <article key={course.id} className="flex flex-col justify-between rounded-[20px] border border-slate-100 bg-slate-50/50 p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg group">
                <div>
                  <div className="overflow-hidden rounded-[16px] h-40 w-full relative">
                    <img src={course.image} alt={course.title} className="h-full w-full object-cover grayscale-[30%] group-hover:grayscale-0 transition duration-500" loading="lazy" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <h3 className="text-base font-black text-slate-800 tracking-tight line-clamp-1">{course.title}</h3>
                  </div>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600">{course.status}</p>
                </div>
                <Link
                  href={`/cursos/${course.id}`}
                  className="mt-5 w-full inline-flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition active:scale-[0.98]"
                >
                  Revisar material
                </Link>
              </article>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}