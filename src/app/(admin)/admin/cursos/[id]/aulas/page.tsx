import Link from "next/link";

export default function CursoAulasAdminPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/admin/dashboard" className="text-xs text-gray-500 hover:text-[#007042] mb-4 inline-block">
        ← Voltar para dashboard
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Aulas do Curso #{params.id}</h1>
      <p className="text-sm text-gray-500 mb-8">Gerencie os módulos e aulas deste curso.</p>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-12 text-center">
        <p className="text-5xl mb-4">📚</p>
        <h2 className="text-lg font-bold text-gray-900">Listagem de Aulas</h2>
        <p className="text-sm text-gray-500 mt-2">Em desenvolvimento.</p>
      </div>
    </div>
  );
}
