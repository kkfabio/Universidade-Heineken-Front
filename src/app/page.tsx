import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 bg-[#004d2c] text-white p-4">
      <h1 className="text-4xl font-black italic mb-8 italic">UHNK</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <Link href="/curso" className="p-8 bg-white text-[#004d2c] rounded-card shadow-xl hover:scale-105 transition-all text-center font-bold">
          ACESSAR CURSO EM ANDAMENTO
        </Link>
        <Link href="/quiz" className="p-8 bg-[#007b3e] text-white rounded-card shadow-xl hover:scale-105 transition-all text-center font-bold border-2 border-white/20">
          ACESSAR QUESTIONÁRIO
        </Link>
      </div>
    </div>
  )
}