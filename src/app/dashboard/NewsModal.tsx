"use client";

interface NewsModalProps {
  onContinue: () => void;
}

export default function NewsModal({ onContinue }: NewsModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl">
        <div className="h-48 bg-heineken-green flex items-center justify-center text-white text-6xl">★</div>
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900">Novidades da Heineken</h2>
          <p className="text-gray-500 mt-2">Conheça as novas ferramentas da plataforma.</p>
          <button 
            onClick={onContinue}
            className="mt-8 w-full bg-heineken-green text-white py-4 rounded-xl font-bold hover:bg-heineken-dark transition-all"
          >
            Continuar para plataforma
          </button>
        </div>
      </div>
    </div>
  );
}