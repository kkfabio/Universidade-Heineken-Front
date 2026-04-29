import Link from "next/link";

const menuItems = [
  { label: "Feed", href: "/feed" },
  { label: "Meus Cursos", href: "/cursos" },
  { label: "Wiki", href: "/wiki" },
  { label: "Certificados", href: "/certificados" },
  { label: "Profile", href: "/profile" },
];

export function Sidebar() {
  return (
    <aside className="flex min-h-screen w-[88px] flex-col justify-between self-stretch bg-[#0B5D2A] text-white xl:w-[220px]">
      <div>
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-5 xl:px-6">
          <div className="h-10 w-10 rounded-full bg-white/20" />
          <div className="hidden xl:block">
            <p className="text-sm font-semibold leading-none">Learning Journey</p>
            <p className="mt-1 text-[11px] text-white/70">Knowledge Platform</p>
          </div>
        </div>

        <nav className="mt-6 px-3 xl:px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white xl:px-4"
                >
                  <span className="h-2 w-2 rounded-full bg-white/70" />
                  <span className="hidden xl:inline">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="p-3 xl:p-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#19A34A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#15853c]">
          <span className="inline-block h-2 w-2 rounded-full bg-white" />
          <span className="hidden xl:inline">Ask AI</span>
        </button>
      </div>
    </aside>
  );
}