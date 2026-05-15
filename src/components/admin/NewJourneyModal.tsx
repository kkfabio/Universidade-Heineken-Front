'use client';
export default function NewJourneyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6">
      <div className="flex w-full max-w-5xl h-[640px] bg-white rounded-[48px] overflow-hidden shadow-2xl">
        {/* Lado Esquerdo Verde Heineken */}
        <div className="w-1/3 bg-[#004d2c] p-12 flex flex-col justify-between text-white">
          <div>
            <p className="text-[10px] font-black opacity-50 uppercase tracking-widest mb-4 text-[#00b140]">Criação</p>
            <h2 className="text-4xl font-serif font-bold leading-tight">Definindo a <br/><span className="text-[#00b140]">Nova Jornada</span></h2>
          </div>
          <p className="text-sm opacity-60 italic">"A excelência começa na clareza."</p>
        </div>

        {/* Lado Direito - Formulário */}
        <div className="flex-1 p-16 bg-white relative">
          <button onClick={onClose} className="absolute top-8 right-8 text-slate-300 hover:text-slate-600 text-2xl">✕</button>
          <h3 className="text-slate-400 text-xs mb-10">Preencha os detalhes para publicar no UHNK</h3>
          
          <div className="space-y-8">
            <div>
              <label className="text-[10px] font-black text-slate-300 uppercase mb-3 block tracking-widest">Título do Curso</label>
              <input type="text" placeholder="Ex: Gestão de Qualidade" className="w-full bg-slate-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-[#00b140] text-slate-700" />
            </div>
            
            <div className="flex gap-4 pt-10">
              <button onClick={onClose} className="flex-1 py-4 text-slate-400 font-bold hover:bg-slate-50 rounded-2xl transition">Salvar Rascunho</button>
              <button className="flex-1 py-4 bg-[#24522e] text-white font-bold rounded-2xl shadow-lg shadow-[#24522e]/20 hover:scale-[1.02] transition">Publicar Curso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}