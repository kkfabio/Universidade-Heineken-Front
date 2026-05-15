export default function IAHistoricoAdminPage() {
  const interacoes = [
    { id: 1, usuario: "Carlos Souza", pergunta: "Quais os pilares do Brewing a Better World?", data: "Hoje, 14h22" },
    { id: 2, usuario: "Ana Lima", pergunta: "Resumo do curso de liderança em 3 pontos", data: "Hoje, 11h08" },
    { id: 3, usuario: "Rafael Mendes", pergunta: "Como funciona a fermentação controlada?", data: "Ontem, 16h45" },
    { id: 4, usuario: "Juliana Costa", pergunta: "Quais certificações posso obter?", data: "Ontem, 09h12" },
  ];

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Histórico de Interações com IA</h1>
        <p className="text-sm text-gray-500 mt-0.5">Registre e audite todas as conversas dos colaboradores com a IA da plataforma.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="divide-y divide-gray-50">
          {interacoes.map((i) => (
            <div key={i.id} className="px-6 py-4 hover:bg-gray-50 transition-colors flex gap-4 items-start">
              <div className="w-9 h-9 rounded-full bg-[#007042]/10 flex items-center justify-center shrink-0">
                <span className="text-base">🤖</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">{i.usuario}</p>
                <p className="text-sm text-gray-600 mt-1">{i.pergunta}</p>
              </div>
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide shrink-0">{i.data}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
