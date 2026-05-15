export default function CertificadosAdminPage() {
  const certificados = [
    { id: 1, aluno: "Carlos Souza", curso: "Cultura Heineken", data: "12/03/2026" },
    { id: 2, aluno: "Ana Lima", curso: "Liderança", data: "08/03/2026" },
    { id: 3, aluno: "Rafael Mendes", curso: "Qualidade", data: "05/03/2026" },
    { id: 4, aluno: "Juliana Costa", curso: "Sustentabilidade", data: "01/03/2026" },
  ];

  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Certificados Emitidos</h1>
        <p className="text-sm text-gray-500 mt-0.5">Acompanhe as certificações geradas pela plataforma.</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left text-[10px] font-bold uppercase tracking-widest text-gray-500 px-6 py-3">Aluno</th>
              <th className="text-left text-[10px] font-bold uppercase tracking-widest text-gray-500 px-6 py-3">Curso</th>
              <th className="text-left text-[10px] font-bold uppercase tracking-widest text-gray-500 px-6 py-3">Data</th>
              <th className="text-right text-[10px] font-bold uppercase tracking-widest text-gray-500 px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {certificados.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-800">{c.aluno}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{c.curso}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{c.data}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-xs font-bold text-[#007042] hover:underline">Ver PDF →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
