"use client";
import { useState, useEffect } from "react";
import NewsModal from "@/components/dashboard/NewsModal";
import NotificationListModal from "@/components/dashboard/NotificationListModal";
import Link from "next/link";

export default function DashboardPage() {
  const [showNews, setShowNews] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("dashboard_news_seen");
    if (!alreadySeen) {
      setShowNews(true);
    }
  }, []);

  const handleTransition = () => {
    sessionStorage.setItem("dashboard_news_seen", "true");
    setShowNews(false);
    setShowNotifications(true);
  };

  const isOverlayActive = showNews || showNotifications;

  return (
    <div className="relative min-h-screen bg-white">
      <div
        className={`transition-all duration-700 ${
          isOverlayActive ? "blur-xl scale-95 origin-center" : "blur-0 scale-100"
        }`}
      >
        <main className="p-8 max-w-7xl mx-auto bg-[#f5f5f5] min-h-screen">

          <div className="mb-8">
            <h1 className="text-5xl font-bold text-[#1b1b1b] mb-2">
              Olá, João Silva! ☀️ Bom dia.
            </h1>
            <p className="text-gray-500">
              Here&apos;s what&apos;s happening at Heineken University today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

            <div className="lg:col-span-3 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Link href="https://www.heinekenbrasil.com.br/" target="_blank">
                <img
                  src="https://images.unsplash.com/photo-1513828583688-c52646db42da"
                  alt="Heineken"
                  className="w-full h-[350px] object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-8">
                <span className="bg-heineken-green text-white text-xs px-3 py-1 rounded-full">
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
                  className="bg-heineken-green text-white px-5 py-3 rounded-2xl hover:bg-heineken-dark transition inline-block"
                >
                  Ler mais
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <h3 className="font-bold text-xl mb-6">Top Learning Stats</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Liderança Global</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-heineken-green h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Inovação Sustentável</span>
                    <span>43%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-heineken-green h-2 rounded-full w-[43%]"></div>
                  </div>
                </div>
              </div>

              <div className="bg-heineken-green text-white rounded-3xl p-6 shadow-md">
                <p className="text-sm opacity-80 mb-2">NEXT MODULE</p>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Link href="https://www.heinekenbrasil.com.br/sustentabilidade" target="_blank">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Nature"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <span className="text-red-500 text-xs font-bold">SUSTENTABILIDADE</span>
                <h3 className="text-2xl font-bold mt-3 text-[#1b1b1b]">Brewing a Better World</h3>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Link href="https://www.heineken.com/" target="_blank">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                  alt="People"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <span className="text-heineken-green text-xs font-bold">COMMUNITY</span>
                <h3 className="text-2xl font-bold mt-3 text-[#1b1b1b]">Novo Hub Global em Amsterdã</h3>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Link href="https://www.heineken.com/br/pt/nossa-historia" target="_blank">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                  alt="Beer"
                  className="w-full h-52 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-5">
                <span className="text-gray-500 text-xs font-bold">HERITAGE</span>
                <h3 className="text-2xl font-bold mt-3 text-[#1b1b1b]">O Segredo do Fermento Revelado</h3>
              </div>
            </div>

          </div>

        </main>
      </div>

      {showNews && <NewsModal onContinue={handleTransition} />}
      {showNotifications && (
        <NotificationListModal onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
}
