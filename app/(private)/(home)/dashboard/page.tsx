"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NewsModal from "./NewsModal";
import NotificationListModal from "./NotificationListModal";
import Link from "next/link";

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
        <main className="p-8 max-w-7xl mx-auto bg-[#f5f5f5] min-h-screen">

  {/* Header */}
  <div className="mb-8">
    <h1 className="text-5xl font-bold text-[#1b1b1b] mb-2">
      Olá, João Silva! ☀️ Bom dia.
    </h1>

    <p className="text-gray-500">
      Here’s what’s happening at Heineken University today.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

    {/* CARD PRINCIPAL */}
    <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">

      <Link
        href="https://www.heinekenbrasil.com.br/"
        target="_blank"
      >
        <img
          src="https://images.unsplash.com/photo-1513828583688-c52646db42da"
          alt="Heineken"
          className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
        />
      </Link>

      <div className="p-8">

        <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full">
          NOVIDADE
        </span>

        <h2 className="text-4xl font-bold mt-4 mb-4 text-[#1b1b1b]">
          A Revolução Digital na Produção de Cerveja Zero
        </h2>

        <p className="text-gray-500 text-lg mb-6">
          Descubra como nossas novas tecnologias estão transformando
          a produção e elevando a qualidade da Heineken.
        </p>

        <Link
          href="https://www.heinekenbrasil.com.br/"
          target="_blank"
          className="bg-green-700 text-white px-5 py-3 rounded-2xl hover:bg-green-800 transition inline-block"
        >
          Ler mais
        </Link>

      </div>
    </div>

    {/* CARD LATERAL */}
    <div className="flex flex-col gap-6">

      {/* Stats */}
      <div className="bg-white rounded-3xl p-6 shadow-md">

        <h3 className="font-bold text-xl mb-6">
          Top Learning Stats
        </h3>

        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Liderança Global</span>
            <span>85%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-700 h-2 rounded-full w-[85%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span>Inovação Sustentável</span>
            <span>43%</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-700 h-2 rounded-full w-[43%]"></div>
          </div>
        </div>

      </div>

      {/* Card Verde */}
      <div className="bg-green-700 text-white rounded-3xl p-6 shadow-md">

        <p className="text-sm opacity-80 mb-2">
          NEXT MODULE
        </p>

        <h3 className="text-2xl font-bold mb-6">
          Cultura Heineken: 150 Anos de Excelência
        </h3>

        <Link
          href="https://www.heineken.com/br/pt/nossa-historia"
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:scale-105 transition inline-block"
        >
          Continue learning
        </Link>

      </div>

    </div>

  </div>

  {/* CARDS INFERIORES */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

    {/* Card 1 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">

      <Link
        href="https://www.heinekenbrasil.com.br/sustentabilidade"
        target="_blank"
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="Nature"
          className="w-full h-52 object-cover hover:scale-105 transition duration-500"
        />
      </Link>

      <div className="p-5">

        <span className="text-red-500 text-xs font-bold">
          SUSTENTABILIDADE
        </span>

        <h3 className="text-2xl font-bold mt-3 text-[#1b1b1b]">
          Brewing a Better World
        </h3>

      </div>

    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">

      <Link
        href="https://www.heineken.com/"
        target="_blank"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="People"
          className="w-full h-52 object-cover hover:scale-105 transition duration-500"
        />
      </Link>

      <div className="p-5">

        <span className="text-green-700 text-xs font-bold">
          COMMUNITY
        </span>

        <h3 className="text-2xl font-bold mt-3 text-[#1b1b1b]">
          Novo Hub Global em Amsterdã
        </h3>

      </div>

    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">

      <Link
        href="https://www.heineken.com/br/pt/nossa-historia"
        target="_blank"
      >
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
          alt="Beer"
          className="w-full h-52 object-cover hover:scale-105 transition duration-500"
        />
      </Link>

      <div className="p-5">

        <span className="text-gray-500 text-xs font-bold">
          HERITAGE
        </span>

        <h3 className="text-2xl font-bold mt-3 text-[#1b1b1b]">
          O Segredo do Fermento Revelado
        </h3>

      </div>

    </div>

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
