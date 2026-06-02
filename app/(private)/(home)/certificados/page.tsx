"use client"

import * as React from "react"
import { useState, useMemo } from "react"
import { Trophy, Search, Filter, Download, Star, Award, CheckCircle, X, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CertificateCard } from "./components/CertificateCard"

export default function CertificadosPage() {
  const [busca, setBusca] = useState("")
  const [abrirFiltroModal, setAbrirFiltroModal] = useState(false)
  const [mensagemSucesso, setMensagemSucesso] = useState<string | null>(null)

  const [filtroAno, setFiltroAno] = useState<string>("todos")
  const [filtroStatus, setFiltroStatus] = useState<string>("todos")
  const [filtroCategoria, setFiltroCategoria] = useState<string>("todos")

  const certificadosMock = [
    { 
      id: 1, 
      titulo: "Cultura e Valores Heineken", 
      date: "12 de Outubro, 2023",
      ano: "2023",
      status: "concluido",
      categoria: "cultura",
      imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800",
      codigo: "HEI-CUL-982",
      pdfUrl: "/certificados/certificado-cultura-valores.pdf",
      pdfNome: "Certificado - Cultura e Valores Heineken.pdf",
    },
    { 
      id: 2, 
      titulo: "Hubs Globais e Cross-Docking", 
      date: "28 de Setembro, 2023",
      ano: "2023",
      status: "concluido",
      categoria: "lideranca",
      imageUrl: "https://images.unsplash.com/photo-1722118177362-7c1203f05e3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      codigo: "HEI-LID-451",
      pdfUrl: "/certificados/certificado-hubs-globais.pdf",
      pdfNome: "Certificado - Hubs Globais e Cross-Docking.pdf",
    },
    { 
      id: 3, 
      titulo: "WMS Avançado (Warehouse Management)", 
      date: "15 de Agosto, 2023",
      ano: "2023",
      status: "concluido",
      categoria: "sustentabilidade",
      imageUrl: "https://images.unsplash.com/photo-1622127739239-1905bbaa21b8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      codigo: "HEI-SUS-112",
      pdfUrl: "/certificados/certificado-wms-avancado.pdf",
      pdfNome: "Certificado - WMS Avançado.pdf",
    },
    { 
      id: 4, 
      titulo: "Fundamentos da Cadeia de Suprimentos", 
      date: "02 de Julho, 2022",
      ano: "2022",
      status: "concluido",
      categoria: "logistica",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800",
      codigo: "HEI-SUP-304",
      pdfUrl: "/certificados/certificado-cadeia-suprimentos.pdf",
      pdfNome: "Certificado - Fundamentos da Cadeia de Suprimentos.pdf",
    },
  ]

  const certificadosFiltrados = useMemo(() => {
    return certificadosMock.filter((cert) => {
      const correspondeBusca = cert.titulo.toLowerCase().includes(busca.toLowerCase())
      const correspondeAno = filtroAno === "todos" || cert.ano === filtroAno
      const correspondeStatus = filtroStatus === "todos" || cert.status === filtroStatus
      const correspondeCategoria = filtroCategoria === "todos" || cert.categoria === filtroCategoria
      
      return correspondeBusca && correspondeAno && correspondeStatus && correspondeCategoria
    })
  }, [busca, filtroAno, filtroStatus, filtroCategoria])

  const baixarCertificado = (titulo: string, pdfUrl: string, pdfNome: string) => {
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = pdfNome
    link.click()

    setMensagemSucesso(`Download iniciado: ${titulo}`)
    setTimeout(() => setMensagemSucesso(null), 3000)
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 md:p-16 bg-[#FBFBFB] relative overflow-x-hidden">
      
      {/* Toast de Sucesso Responsivo */}
      {mensagemSucesso && (
        <div className="fixed top-4 right-4 left-4 sm:left-auto bg-[#007041] text-white px-5 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-3 font-bold text-xs sm:text-sm border border-white/20 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="h-5 w-5 text-[#5CFF9B] shrink-0" />
          <span className="truncate">{mensagemSucesso}</span>
        </div>
      )}

      {/* Header Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-12 gap-6">
        <header className="relative w-full lg:max-w-xl">
          <p className="text-[#007041] font-black text-[10px] sm:text-xs tracking-[3px] mb-2 uppercase">01 / Achievement</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1A1A1A] mb-3 md:mb-4 tracking-tighter leading-tight">
            Meus Certificados
          </h1>
          <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Bem-vindo ao seu repositório de excelência da Heineken Academy.
          </p>
          <Star className="absolute -top-6 -left-6 h-16 w-16 md:-top-10 md:-left-10 md:h-32 md:w-32 text-slate-200 -z-10 opacity-20 hidden sm:block" />
        </header>

        {/* Badges de Estatística */}
        <div className="flex gap-4 w-full sm:w-auto self-stretch sm:self-start">
          <div className="flex-1 sm:flex-none bg-[#007041] p-4 md:p-6 rounded-[20px] md:rounded-[24px] text-white text-center min-w-[100px] md:min-w-[120px] shadow-xl shadow-[#007041]/20">
            <p className="text-2xl md:text-3xl font-black">{certificadosFiltrados.length}</p>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-70">Listados</p>
          </div>
          <div className="flex-1 sm:flex-none bg-[#003321] p-4 md:p-6 rounded-[20px] md:rounded-[24px] text-white text-center min-w-[100px] md:min-w-[120px]">
            <p className="text-2xl md:text-3xl font-black text-[#5CFF9B]">84%</p>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-70">Progresso</p>
          </div>
        </div>
      </div>

      {/* Seção de Busca e Filtros */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-14">
        <div className="relative flex-1 group w-full">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-focus-within:text-[#007041] transition-colors" />
          <Input 
            placeholder="Pesquisar certificados..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-14 h-14 md:h-16 rounded-[20px] md:rounded-[24px] border-none shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-white text-slate-600 font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-[#007041] text-sm md:text-base w-full"
          />
        </div>
        
        <Button 
          onClick={() => setAbrirFiltroModal(true)}
          variant="outline" 
          className={`h-14 md:h-16 px-6 md:px-10 rounded-[20px] md:rounded-[24px] border-slate-100 font-black gap-3 uppercase text-[10px] tracking-widest transition-all w-full sm:w-auto shrink-0 ${
            filtroAno !== "todos" || filtroStatus !== "todos" || filtroCategoria !== "todos"
              ? "bg-[#007041] text-white border-none shadow-lg" 
              : "bg-white text-slate-500 hover:bg-slate-50"
          }`}
        >
          <Filter className="h-4 w-4 shrink-0" /> Painel de Filtros Avançados
        </Button>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
        
        {/* Coluna dos Cards de Certificados */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 order-2 lg:order-1">
          {certificadosFiltrados.length > 0 ? (
            certificadosFiltrados.map((cert) => (
              <CertificateCard 
                key={cert.id} 
                title={cert.titulo} 
                date={cert.date} 
                imageUrl={cert.imageUrl}
                onDownload={() => baixarCertificado(cert.titulo, cert.pdfUrl, cert.pdfNome)}
                onViewDetails={() => alert(`Ficha Técnica:\nCódigo de Autenticação: ${cert.codigo}\nCategoria do Módulo: ${cert.categoria.toUpperCase()}`)}
              />
            ))
          ) : (
            <div className="col-span-1 sm:col-span-2 text-center p-8 md:p-16 bg-white rounded-[24px] md:rounded-[32px] border border-dashed border-slate-200">
              <Award className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-400 font-bold text-sm">Nenhum certificado corresponde aos filtros aplicados.</p>
            </div>
          )}
        </div>

        {/* Coluna do Certificado Master Lateral */}
        <div className="lg:col-span-4 order-1 lg:order-2">
          <div className="bg-[#003321] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 h-full text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="relative z-10">
              <Trophy className="h-10 w-10 md:h-12 md:w-12 text-[#5CFF9B] mb-6 md:mb-8" strokeWidth={1} />
              <p className="text-[10px] font-black uppercase tracking-[4px] text-[#5CFF9B] mb-3 md:mb-4">Mastering Degree</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1.2] mb-5 md:mb-6 tracking-tight">
                Mastering Heineken Global Supply
              </h2>
              
              <div className="bg-white/5 rounded-[20px] md:rounded-[24px] p-6 md:p-8 border border-white/10 mb-6 md:mb-8 flex flex-col items-center justify-center">
                 <Trophy className="h-12 w-12 md:h-16 md:w-16 text-[#5CFF9B] opacity-40 mb-2" />
                 <p className="text-[9px] font-black uppercase tracking-widest opacity-30 italic">Certificado Master</p>
              </div>

              <p className="text-xs md:text-sm opacity-60 leading-relaxed font-medium">
                Este certificado reconhece a maestria em processos de logística global e gestão de inventário avançada.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4 relative z-10 pt-8 md:pt-10">
              <a
                href="/certificados/certificado-mastering-global-supply.pdf"
                download="Certificado - Mastering Heineken Global Supply.pdf"
                onClick={() => {
                  setMensagemSucesso("Download iniciado: Mastering Heineken Global Supply")
                  setTimeout(() => setMensagemSucesso(null), 3000)
                }}
                className="flex items-center justify-center w-full bg-[#00A35C] hover:bg-[#008f50] text-white font-black h-14 md:h-16 rounded-2xl uppercase tracking-widest text-[11px] shadow-xl transition-colors"
              >
                <Download className="mr-2 h-4 w-4" /> Baixar PDF
              </a>
              <Button 
                onClick={() => alert("Módulos Inclusos: Cadeia Integrada Intercontinental, Distribuição Inversa Eficiente e Controles de Qualidade.")}
                variant="outline" 
                className="w-full border-white/20 text-white hover:bg-white/10 h-14 md:h-16 rounded-2xl font-bold uppercase tracking-widest text-[11px]"
              >
                Visualizar Detalhes
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Filtros Otimizado */}
      {abrirFiltroModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-5 sm:p-8 w-full max-w-lg shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg md:text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-[#007041]" /> Filtros Multicritério
              </h3>
              <button 
                onClick={() => setAbrirFiltroModal(false)}
                className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Filtro Ano */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Ano de Emissão</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "todos", label: "Todos" },
                    { id: "2023", label: "2023" },
                    { id: "2022", label: "2022" }
                  ].map((ano) => (
                    <button
                      key={ano.id}
                      onClick={() => setFiltroAno(ano.id)}
                      className={`py-3 px-2 text-center rounded-xl text-xs font-bold transition-all border ${
                        filtroAno === ano.id ? "bg-[#007041] text-white border-transparent shadow-md" : "bg-slate-50 border-slate-100 text-slate-600"
                      }`}
                    >
                      {ano.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro Status */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Status da Matrícula</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: "todos", label: "Qualquer Status" },
                    { id: "concluido", label: "Apenas Concluídos" }
                  ].map((status) => (
                    <button
                      key={status.id}
                      onClick={() => setFiltroStatus(status.id)}
                      className={`py-3 px-4 text-center rounded-xl text-xs font-bold transition-all border ${
                        filtroStatus === status.id ? "bg-[#007041] text-white border-transparent shadow-md" : "bg-slate-50 border-slate-100 text-slate-600"
                      }`}
                    >
                      {status.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro Categoria */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-2">Área de Competência</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { id: "todos", label: "Todas as Categorias" },
                    { id: "cultura", label: "Cultura Heineken" },
                    { id: "lideranca", label: "Liderança Corp" },
                    { id: "sustentabilidade", label: "Sustentabilidade" },
                    { id: "logistica", label: "Supply Chain / Logística" }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFiltroCategoria(cat.id)}
                      className={`py-3 px-3 text-center rounded-xl text-[11px] font-bold transition-all border truncate ${
                        filtroCategoria === cat.id ? "bg-[#007041] text-white border-transparent shadow-md" : "bg-slate-50 border-slate-100 text-slate-600"
                      }`}
                      title={cat.label}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Ações do Modal */}
            <div className="flex gap-3 mt-8 pt-4 border-t border-slate-100">
              <Button 
                variant="outline"
                onClick={() => {
                  setFiltroAno("todos")
                  setFiltroStatus("todos")
                  setFiltroCategoria("todos")
                }}
                className="flex-1 border-slate-200 text-slate-500 font-bold h-12 rounded-xl text-xs uppercase tracking-wider"
              >
                Limpar
              </Button>
              <Button 
                onClick={() => setAbrirFiltroModal(false)}
                className="flex-1 bg-[#007041] hover:bg-[#005a34] text-white font-black h-12 rounded-xl uppercase tracking-widest text-[10px]"
              >
                Aplicar Filtros
              </Button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}