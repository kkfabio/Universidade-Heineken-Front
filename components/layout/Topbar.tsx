export function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-black/5 bg-[#FBFBF8] px-6">
      <div className="text-sm font-bold uppercase tracking-[0.35em] text-[#0B5D2A]">
        UHNK
      </div>

      <div className="flex items-center gap-3">
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-sm text-neutral-600 transition duration-200 hover:bg-neutral-50 active:scale-95">
          ♡
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-sm text-neutral-600 transition duration-200 hover:bg-neutral-50 active:scale-95">
          ⚙
        </button>

        <div className="h-9 w-9 rounded-full bg-[#CBE8B8] ring-2 ring-white" />
      </div>
    </header>
  );
}