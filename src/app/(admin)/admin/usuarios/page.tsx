import Link from "next/link";

export default function UsuariosAdminPage() {
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gerenciar Usuários</h1>
          <p className="text-sm text-gray-500 mt-0.5">Liste, edite e adicione colaboradores na plataforma.</p>
        </div>
        <Link
          href="/admin/usuarios/novo"
          className="flex items-center gap-2 px-4 py-2 bg-[#007042] text-white rounded-lg text-sm font-medium hover:bg-[#005a35] transition-colors shadow-sm"
        >
          <span>＋</span> Novo Usuário
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
        <p className="text-5xl mb-4">👥</p>
        <h2 className="text-lg font-bold text-gray-900">Listagem de Usuários</h2>
        <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
          A tabela completa de usuários será exibida aqui assim que estiver integrada com o backend.
        </p>
      </div>
    </div>
  );
}
