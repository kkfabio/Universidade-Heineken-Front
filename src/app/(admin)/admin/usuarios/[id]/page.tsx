import Link from "next/link";

export default function UsuarioDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/admin/usuarios" className="text-xs text-gray-500 hover:text-[#007042] mb-4 inline-block">
        ← Voltar para usuários
      </Link>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-[#007042] flex items-center justify-center">
            <span className="text-white font-bold text-2xl">U</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Usuário #{params.id}</h1>
            <p className="text-sm text-gray-500">Detalhes e progresso do colaborador</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Cursos concluídos</p>
            <p className="text-3xl font-black text-[#007042] mt-1">12</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Progresso geral</p>
            <p className="text-3xl font-black text-[#007042] mt-1">78%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
