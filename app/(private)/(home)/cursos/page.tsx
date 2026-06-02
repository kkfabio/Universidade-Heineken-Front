import Link from "next/link";

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
    id: "curso-05",
    title: "Logística e Operações",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&fit=crop",
    progress: "65%",
  },
  {
    id: "curso-06",
    title: "Estratégias de Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&fit=crop",
    progress: "40%",
  },
  {
    id: "curso-07",
    title: "Liderança de Equipes",
    image: "https://media.licdn.com/dms/image/v2/D4E10AQEqJQkQLLgY3A/image-shrink_800/image-shrink_800/0/1713539613642?e=2147483647&v=beta&t=1Vbjwlniz32inguKrVt7cXja8lBprIF-7KFp3iS1j6Q",
    progress: "40%",
  },
];

const notStartedCourses = [
  {
    id: "curso-01",
    title: "Sustentabilidade 2030",
    image: "https://static.casapino.com.br/casapino/2025/01/21102501/CAPA-CMS-CASA-PINO-4.png",
  },
  {
    id: "curso-02",
    title: "Vendas Avançadas",
    image: "https://exame.com/insight/_next/image?url=https%3A%2F%2Fclassic.exame.com%2Fwp-content%2Fuploads%2F2023%2F07%2FHEINEKEN-SITE.jpg&w=750&q=75",
  },
  {
    id: "curso-03",
    title: "Inovação Digital",
    image: "https://www.portaldapropaganda.com.br/noticias/wp-content/uploads/2023/08/2023_022_LEPUB_HEINEKEN_FRIDGE_SETUP_GAMER_P06-002.jpg",
  },
  {
    id: "curso-04",
    title: "Qualidade do Produto",
    image: "https://engarrafadormoderno.com.br/wp-content/uploads/2016/01/MG_8843.jpg",
  },
];

const completedCourses = [
  {
    id: "curso-08",
    title: "Segurança do Trabalho",
    image: "https://sindicerv.com.br/2025/wp-content/uploads/2021/04/Maria-Elenice-da-Silva-Bittencourt-operadora-de-em_00375123_0_202104221850-md.jpg",
    status: "Concluído",
  },
  {
    id: "curso-09",
    title: "Ética e Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&fit=crop",
    status: "Concluído",
  },
  {
    id: "curso-10",
    title: "Onboarding Global",
    image: "https://apas.com.br/wp-content/uploads/2025/01/visita-heineken.jpg",
    status: "Concluído",
  },
];

export default function CursosPage() {
  return (
    <main className="flex-1 px-4 py-6 md:px-6 xl:px-8 bg-[#F4F4F1] text-neutral-900">
      <section className="rounded-[28px] bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">02</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">Meus Cursos</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
            Continue sua jornada de aprendizado na plataforma UNNK com trilhas organizadas por progresso e relevância.
          </p>
        </div>

        <div className="mt-10">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-neutral-900">Em destaque</h2>
            <button className="text-sm font-medium text-[#0B5D2A]">Ver todos →</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {featuredCourses.map((course) => (
            <article
              key={course.id}
              className="relative overflow-hidden rounded-[24px] text-white transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <img src={course.image} alt={course.title} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              <div className="relative z-10 p-6">
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                  Curso em destaque
                </span>
                <div className="mt-24">
                  <h3 className="text-2xl font-bold">{course.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{course.subtitle}</p>
                  <Link
                    href={`/cursos/${course.id}`}
                    className="mt-6 inline-flex rounded-full bg-white px-4 py-2 transition hover:bg-[#F3F6F0]"
                  >
                    <span className="block text-sm font-semibold text-[#0B5D2A]">{course.action}</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">Jornada</p>
              <h2 className="mt-1 text-lg font-semibold text-neutral-900">Em andamento</h2>
            </div>
            <span className="text-sm text-neutral-400">{inProgressCourses.length} cursos</span>
          </div>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {inProgressCourses.map((course) => (
            <article key={course.id} className="h-full rounded-[20px] border border-black/5 bg-[#F7F7F4] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
              <img src={course.image} alt={course.title} className="h-40 w-full rounded-[16px] object-cover" loading="lazy" />
              <span className="mt-4 inline-flex rounded-full bg-[#E8F3EC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B5D2A]">
                Em progresso
              </span>
              <h3 className="mt-4 text-base font-semibold leading-snug text-neutral-900">{course.title}</h3>
              <p className="mt-2 text-sm text-neutral-500">Progresso: {course.progress}</p>
              <Link
                href={`/cursos/${course.id}`}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#0B5D2A] transition duration-200 hover:bg-[#d8ebdf] hover:text-[#08461f] active:scale-[0.98]"
              >
                Continuar curso
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">Próximos passos</p>
              <h2 className="mt-1 text-lg font-semibold text-neutral-900">Não iniciados</h2>
            </div>
            <span className="text-sm text-neutral-400">{notStartedCourses.length} cursos</span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {notStartedCourses.map((course) => (
              <article key={course.id}>
                <img src={course.image} alt={course.title} className="h-40 w-full rounded-[16px] object-cover" loading="lazy" />
                <h3 className="mt-4 text-base font-semibold text-neutral-900">{course.title}</h3>
                <Link
                  href={`/cursos/${course.id}`}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#0B5D2A] transition duration-200 hover:bg-[#d8ebdf] hover:text-[#08461f] active:scale-[0.98]"
                >
                  Ver curso <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">Histórico</p>
              <h2 className="mt-1 text-lg font-semibold text-neutral-900">Concluídos</h2>
            </div>
            <span className="text-sm text-neutral-400">{completedCourses.length} cursos</span>
          </div>

          <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {completedCourses.map((course) => (
              <article key={course.id} className="h-full rounded-[20px] border border-black/5 bg-[#F7F7F4] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <img src={course.image} alt={course.title} className="h-40 w-full rounded-[16px] object-cover" loading="lazy" />
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#0B5D2A]" />
                  <p className="text-sm font-semibold text-neutral-900">{course.title}</p>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-neutral-500">{course.status}</p>
                <Link
                  href={`/cursos/${course.id}`}
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#0B5D2A] transition duration-200 hover:bg-[#d8ebdf] hover:text-[#08461f] active:scale-[0.98]"
                >
                  Revisar curso
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}