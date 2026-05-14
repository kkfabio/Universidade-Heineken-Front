"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewsModal from "./NewsModal";
import NotificationListModal from "./NotificationListModal";

export default function DashboardPage() {
  const router = useRouter();
  const [showNews, setShowNews] = useState(true); 
  const [showNotifications, setShowNotifications] = useState(false);

  const handleTransition = () => {
    setShowNews(false);
    setShowNotifications(true);
  };

  return (
    <div className="relative min-h-screen bg-white">
      { 
        
      }
      <div className={`transition-all duration-700 ${showNews || showNotifications ? "blur-xl scale-95 origin-center" : "blur-0 scale-100"}`}>
        
        {/* Navbar Simulada */}
        <nav className="flex justify-between p-6 items-center border-b">
          <span className="font-bold text-heineken-green text-xl italic">UHNK</span>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          </div>
        </nav>

        {/* Conteúdo do Dashboard (Cards, Feed, etc) */}
        <main className="p-8 max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Olá, João! ☀️ Bom dia.</h1>
          <p className="text-gray-500 mb-8">Aqui está o que está acontecendo na Heineken University hoje.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-100 rounded-3xl border-2 border-dashed border-gray-200"></div>
            <div className="h-64 bg-gray-100 rounded-3xl border-2 border-dashed border-gray-200"></div>
          </div>
        </main>
      </div>

      {/* --- CAMADA DE MODAIS --- */}

      {/* MODAL 1:*/}
      {showNews && (
        <NewsModal onContinue={handleTransition} />
      )}

      {/* MODAL 2:*/}
      {showNotifications && (
        <NotificationListModal 
          onClose={() => setShowNotifications(false)} 
        />
      )}
    </div>
  );
}