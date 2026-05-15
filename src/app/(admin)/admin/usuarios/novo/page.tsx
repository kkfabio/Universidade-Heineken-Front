import Link from "next/link";

export default function NovoUsuarioPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Link href="/admin/usuarios" className="text-xs text-gray-500 hover:text-[#007042] mb-4 inline-block">
        ← Voltar para usuários
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Adicionar Novo Usuário</h1>
      <p className="text-sm text-gray-500 mb-8">Preencha os dados do colaborador.</p>

      <form className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 space-y-6">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Nome Completo</label>
          <input type="text" placeholder="Ex: João Silva" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#007042] focus:ring-2 focus:ring-[#007042]/20 outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">E-mail Corporativo</label>
          <input type="email" placeholder="nome@heineken.com" className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#007042] focus:ring-2 focus:ring-[#007042]/20 outline-none" />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Função</label>
          <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#007042] focus:ring-2 focus:ring-[#007042]/20 outline-none">
            <option>Colaborador</option>
            <option>Gestor</option>
            <option>Instrutor</option>
          </select>
        </div>
        <div className="flex gap-3 pt-4">
          <Link href="/admin/usuarios" className="flex-1 py-3 border border-gray-200 rounded-lg font-medium text-center text-gray-700 hover:bg-gray-50 transition-colors">Cancelar</Link>
          <button type="button" className="flex-1 py-3 bg-[#007042] text-white rounded-lg font-medium hover:bg-[#005a35] transition-colors">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
