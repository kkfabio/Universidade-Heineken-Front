import Link from "next/link";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

const featuredCourses = [
  {
    id: "curso-01",
    title: "Beer Expert",
    subtitle: "Aprendizado Avançado",
    action: "Iniciar Módulo",
  },
  {
    id: "curso-02",
    title: "Cultura Heineken",
    subtitle: "Trilha Institucional",
    action: "Continuar",
  },
];

const inProgressCourses = [
  "Logística e Operações",
  "Estratégias de Marketing",
  "Liderança de Equipes",
];

const notStartedCourses = [
  {
    id: "curso-01",
    title: "Sustentabilidade 2030",
    image: "/images/cursos/sustentabilidade.jpg",
  },
  {
    id: "curso-02",
    title: "Vendas Avançadas",
    image: "/images/cursos/vendas.jpg",
  },
  {
    id: "curso-03",
    title: "Inovação Digital",
    image: "/images/cursos/inovacao.jpg",
  },
  {
    id: "curso-04",
    title: "Qualidade do Produto",
    image: "/images/cursos/qualidade.jpg",
  },
];

const completedCourses = [
  "Segurança do Trabalho",
  "Ética e Compliance",
  "Onboarding Global",
];

export default function CursosPage() {
  return (
    <div className="flex min-h-screen bg-[#F4F4F1] text-neutral-900">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar />

        <main className="flex-1 px-4 py-6 md:px-6 xl:px-8">
          <section className="rounded-[28px] bg-white p-6 shadow-sm md:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                02
              </p>

              <h1 className="mt-3 text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">
                Meus Cursos
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-500 md:text-base">
                Continue sua jornada de aprendizado na plataforma UNNK com
                trilhas organizadas por progresso e relevância.
              </p>
            </div>

            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Em destaque
                </h2>
                <button className="text-sm font-medium text-[#0B5D2A]">
                  Ver todos →
                </button>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
               {featuredCourses.map((course, index) => (
                 <article
                    key={course.id}
                   className={`overflow-hidden rounded-[24px] p-6 text-white transition duration-200 hover:-translate-y-1 hover:shadow-md ${
                   index === 0 ? "bg-[#116B3A]" : "bg-[#6E7C3A]"
                    }`}
                   >
                   <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      Curso em destaque
                   </span>

                   <div className="mt-12">
                     <h3 className="text-2xl font-bold">{course.title}</h3>

                     <p className="mt-2 text-sm text-white/80">
                        {course.subtitle}
                     </p>

                     <Link
                       href={`/cursos/${course.id}`}
                       className="mt-6 inline-block rounded-full bg-white px-4 py-2 transition hover:bg-[#F3F6F0]"
                       >
                       <span className="block text-sm font-semibold text-[#0B5D2A]">
                         Ver curso
                       </span>
                     </Link>
                    </div>
                   </article>
                   ))}
               </div>
            </div>

            <div className="mt-10">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Jornada
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-neutral-900">
                    Em andamento
                  </h2>
                </div>
            
                <span className="text-sm text-neutral-400">
                  {inProgressCourses.length} cursos
                </span>
              </div>

              <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {inProgressCourses.map((course) => (
                  <article
                    key={course}
                    className="h-full rounded-[20px] border border-black/5 bg-[#F7F7F4] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="inline-flex rounded-full bg-[#E8F3EC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0B5D2A]">
                      Em progresso
                    </span>
                  
                    <h3 className="mt-4 text-base font-semibold leading-snug text-neutral-900">
                      {course}
                    </h3>
                  
                    <p className="mt-2 text-sm text-neutral-500">
                      Continue de onde parou
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Próximos passos
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-neutral-900">
                    Não iniciados
                  </h2>
                </div>
            
                <span className="text-sm text-neutral-400">
                  {notStartedCourses.length} cursos
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {notStartedCourses.map((course) => (
                  <article key={course.id}>
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-40 w-full rounded-[16px] object-cover"
                    />
                
                    <h3 className="mt-4 text-base font-semibold text-neutral-900">
                      {course.title}
                    </h3>
                
                    <Link
                     href={`/cursos/${course.id}`}
                     className="mt-4 inline-flex items-center justify-center rounded-full bg-[#E8F3EC] px-4 py-2 text-sm font-semibold text-[#0B5D2A] transition duration-200 hover:bg-[#d8ebdf] hover:text-[#08461f] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D2A] focus-visible:ring-offset-2"
                   >
                     Ver curso
                      <span aria-hidden="true">→</span>
                   </Link>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
                    Histórico
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-neutral-900">
                    Concluídos
                  </h2>
                </div>
            
                <span className="text-sm text-neutral-400">
                  {completedCourses.length} cursos
                </span>
              </div>

              <div className="grid auto-rows-fr grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {completedCourses.map((course) => (
                  <article
                    key={course}
                    className="h-full flex items-center gap-3 rounded-[20px] border border-black/5 bg-[#F7F7F4] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="h-3 w-3 rounded-full bg-[#0B5D2A]" />

                    <div>
                      <p className="text-sm font-semibold text-neutral-900">
                        {course}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-neutral-500">
                        Concluído
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}