export default function ProgressoAdminPage() {
  const cursos = [
    { name: "Cultura Heineken", total: 342, concluido: 232, taxa: 68 },
    { name: "Qualidade e Produção", total: 215, concluido: 96, taxa: 45 },
    { name: "Liderança", total: 189, concluido: 155, taxa: 82 },
    { name: "Sustentabilidade", total: 97, concluido: 29, taxa: 30 },
  ];

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Progresso da Plataforma</h1>
        <p className="text-sm text-gray-500 mt-0.5">Visão consolidada do andamento dos colaboradores em cada curso.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900 text-sm">Taxa de conclusão por curso</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {cursos.map((c) => (
            <div key={c.name} className="px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-semibold text-gray-800">{c.name}</p>
                <p className="text-xs text-gray-500">
                  {c.concluido} / {c.total} alunos concluíram
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#007042] rounded-full transition-all"
                    style={{ width: `${c.taxa}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-[#007042] w-10 text-right">{c.taxa}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
