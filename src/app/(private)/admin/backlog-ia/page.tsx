'use client';

import React, { useState } from 'react';
import { 
  Bot, 
  Search, 
  Filter, 
  ChevronDown, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  TrendingUp,
  BrainCircuit,
  Eye,
  MoreVertical,
  Download
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// --- MOCK DATA ---
const metrics = [
  { title: 'Total de Interações', value: '12.450', trend: '+14%', isPositive: true, icon: MessageSquare },
  { title: 'Tempo Médio de Resolução', value: '1.2 min', trend: '-18%', isPositive: true, icon: Clock },
  { title: 'Precisão da IA', value: '94.8%', trend: '+2.1%', isPositive: true, icon: BrainCircuit },
  { title: 'Tópicos Escalados', value: '284', trend: '-5%', isPositive: true, icon: AlertCircle },
];

const backlogData = [
  { id: '1', user: 'Ana Silva', role: 'Vendedora', topic: 'Cadastro de PDV', date: 'Hoje, 14:30', status: 'resolvido', question: 'Como faço para cadastrar um novo PDV sem CNPJ?' },
  { id: '2', user: 'Carlos Gomes', role: 'Supervisor', topic: 'Políticas de Bonificação', date: 'Hoje, 11:15', status: 'escalado', question: 'Quais os critérios para a bonificação de fim de ano no setor Sul?' },
  { id: '3', user: 'Mariana Souza', role: 'Logística', topic: 'Rota de Entrega', date: 'Ontem, 16:45', status: 'resolvido', question: 'Qual o tempo máximo permitido de parada na rota ABC?' },
  { id: '4', user: 'Roberto Alves', role: 'Vendedor', topic: 'Materiais de Merchandising', date: 'Ontem, 09:20', status: 'pendente', question: 'Onde solicito reposição de geladeiras?' },
  { id: '5', user: 'Fernanda Lima', role: 'Promotora', topic: 'Aplicativo de Vendas', date: '12 Maio, 14:10', status: 'resolvido', question: 'O app está dando erro ao fazer check-in na loja.' },
  { id: '6', user: 'Julio Costa', role: 'Vendedor', topic: 'Atualização de Preços', date: '12 Maio, 10:05', status: 'resolvido', question: 'Qual a tabela de preços atual para o cliente XYZ?' },
  { id: '7', user: 'Amanda Dias', role: 'Supervisor', topic: 'Meta Mensal', date: '11 Maio, 17:30', status: 'pendente', question: 'Onde vejo o relatório de atingimento de metas?' },
];

const chartData = [
  { name: 'Seg', interacoes: 400 },
  { name: 'Ter', interacoes: 300 },
  { name: 'Qua', interacoes: 550 },
  { name: 'Qui', interacoes: 450 },
  { name: 'Sex', interacoes: 700 },
  { name: 'Sáb', interacoes: 200 },
  { name: 'Dom', interacoes: 150 },
];

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case 'resolvido':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#E8F3ED] text-[#007042]">
          <CheckCircle2 size={14} /> Resolvido
        </span>
      );
    case 'escalado':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700">
          <AlertCircle size={14} /> Escalado (Humano)
        </span>
      );
    case 'pendente':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
          <Clock size={14} /> Pendente
        </span>
      );
    default:
      return null;
  }
};

export default function BacklogIAPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-8 bg-[#F4F4F4] min-h-full font-sans">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gray-900 flex items-center gap-3">
            <Bot className="text-[#007042]" size={32} />
            Backlog da IA
          </h1>
          <p className="text-gray-500 mt-1">Acompanhe as interações, resoluções e tendências da inteligência artificial.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <Download size={16} />
            Exportar Relatório
          </button>
        </div>
      </div>

      {/* Metrics Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <Icon size={80} />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E8F3ED] flex items-center justify-center">
                  <Icon size={20} className="text-[#007042]" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-bold ${metric.isPositive ? 'text-[#007042]' : 'text-red-600'}`}>
                  <TrendingUp size={14} className={metric.isPositive ? '' : 'rotate-180'} />
                  {metric.trend}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">{metric.value}</h3>
              <p className="text-sm text-gray-500 font-medium">{metric.title}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Table Section (Takes up 2/3 of space on XL screens) */}
        <div className="xl:col-span-2 bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
          {/* Filters */}
          <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white z-10">
            <h2 className="text-xl font-bold text-gray-900 font-serif">Últimas Interações</h2>
            
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Buscar por tópico ou usuário..." 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#007042]/20 focus:border-[#007042] transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-100 transition-colors">
                <Filter size={16} />
                <span>Filtros</span>
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-gray-100 text-[11px] uppercase tracking-wider text-gray-500 font-bold">
                  <th className="px-6 py-4 rounded-tl-xl">Usuário</th>
                  <th className="px-6 py-4">Tópico / Pergunta</th>
                  <th className="px-6 py-4">Data</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-center rounded-tr-xl">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {backlogData.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#E8F3ED] text-[#007042] flex items-center justify-center font-bold text-sm shrink-0 shadow-sm border border-[#007042]/10">
                          {item.user.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900 leading-tight">{item.user}</p>
                          <p className="text-[11px] text-gray-500 font-medium">{item.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-bold text-gray-900 leading-tight mb-0.5">{item.topic}</p>
                      <p className="text-xs text-gray-500 truncate max-w-[220px] font-medium" title={item.question}>{item.question}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-semibold text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">{item.date}</span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-gray-400 hover:text-[#007042] hover:bg-[#E8F3ED] rounded-lg transition-colors" title="Ver Detalhes">
                          <Eye size={18} />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors" title="Opções">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-100 bg-[#F8FAFC] flex justify-center">
            <button className="text-sm font-bold text-[#007042] hover:text-[#005a35] hover:underline transition-colors">
              Carregar mais registros
            </button>
          </div>
        </div>

        {/* Footer Stats / Insights */}
        <div className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col h-full min-h-[500px]">
          <h2 className="text-xl font-bold text-gray-900 font-serif mb-6">Volume de Interações (7 dias)</h2>
          <div className="flex-1 w-full h-[250px] min-h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInteracoes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007042" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#007042" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6B7280', fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#6B7280', fontWeight: 600 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold', color: '#111827', marginBottom: '4px' }}
                  itemStyle={{ color: '#007042', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="interacoes" 
                  name="Interações"
                  stroke="#007042" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorInteracoes)" 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#007042' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-8 space-y-4">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Principais Insights</h3>
            <div className="p-4 bg-[#F0F7FF] rounded-2xl border border-[#D9EAF7] flex gap-4 items-start shadow-sm">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                <Bot size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1 leading-tight">Pico de dúvidas sobre Bonificações</p>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">Houve um aumento de 35% em perguntas sobre as políticas de bonificação do fim de ano nas últimas 48h.</p>
              </div>
            </div>
            
            <div className="p-4 bg-[#FFF5F5] rounded-2xl border border-[#FFE2E2] flex gap-4 items-start shadow-sm">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 shrink-0 mt-0.5">
                <AlertCircle size={16} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1 leading-tight">Escalados Frequentes</p>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">O tópico "Aplicativo de Vendas" teve 12% a mais de escalonamentos que a média semanal.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
