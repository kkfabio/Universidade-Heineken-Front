'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, PlusCircle, ChevronDown, BookOpen, Clock, Tag, BarChart, CheckCircle2, ChevronRight, Edit, Trash2, LayoutList, Layers, SlidersHorizontal } from 'lucide-react';
import { ModalNovoCurso } from '@/components/admin/ModalNovoCurso';

// --- Types --------------------------------------------------------------------

interface Module {
  id: string;
  title: string;
  duration: number;
  lessons: number;
}

interface Course {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: number;
  status: 'active' | 'draft';
  modules: Module[];
}

// --- Mock Data ----------------------------------------------------------------

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Liderança Inspiradora',
    category: 'Liderança',
    level: 'Intermediário',
    duration: 40,
    status: 'active',
    modules: [
      { id: 'm1', title: 'Módulo 1: O Papel do Líder', duration: 10, lessons: 4 },
      { id: 'm2', title: 'Módulo 2: Comunicação Não-Violenta', duration: 15, lessons: 6 },
      { id: 'm3', title: 'Módulo 3: Feedback Construtivo', duration: 15, lessons: 5 },
    ],
  },
  {
    id: '2',
    title: 'Excelência em Vendas',
    category: 'Vendas e Comercial',
    level: 'Iniciante',
    duration: 20,
    status: 'active',
    modules: [
      { id: 'm4', title: 'Módulo 1: Abordagem Inicial', duration: 5, lessons: 2 },
      { id: 'm5', title: 'Módulo 2: Contornando Objeções', duration: 15, lessons: 5 },
    ],
  },
  {
    id: '3',
    title: 'Cultura de Segurança na Fábrica',
    category: 'Operações e Logística',
    level: 'Avançado',
    duration: 60,
    status: 'draft',
    modules: [],
  }
];

// --- Sub-components -----------------------------------------------------------

function CourseAccordionItem({ course }: { course: Course }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-[#BECAB6]/30 shadow-[0_4px_32px_rgba(0,34,0,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,34,0,0.06)] hover:border-[#007042]/20">
       {/* Header / Clickable area */}
       <div 
         onClick={() => setIsOpen(!isOpen)}
         className="p-6 flex flex-col md:flex-row md:items-center justify-between cursor-pointer group gap-4"
       >
         {/* Course Info */}
         <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#F4F4F4] flex items-center justify-center group-hover:bg-[#E5F5E9] transition-colors shrink-0 shadow-sm">
               <BookOpen size={26} className="text-[#007042]" />
            </div>
            <div>
               <h3 className="text-xl font-bold text-[#1A1C1C] font-serif group-hover:text-[#007042] transition-colors">{course.title}</h3>
               <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500 font-medium">
                 <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md"><Tag size={14} className="text-gray-400" /> {course.category}</span>
                 <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md"><Clock size={14} className="text-gray-400" /> {course.duration}h</span>
                 <span className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-md"><BarChart size={14} className="text-gray-400" /> {course.level}</span>
               </div>
            </div>
         </div>

         {/* Actions & Status */}
         <div className="flex items-center gap-6 self-end md:self-auto">
            <span className={`text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm ${course.status === 'active' ? 'bg-[#E5F5E9] text-[#008200]' : 'bg-gray-100 text-gray-500'}`}>
              {course.status === 'active' ? 'Ativo' : 'Rascunho'}
            </span>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-[#007042]/10 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
               <ChevronDown size={20} className="text-gray-400 group-hover:text-[#007042]" />
            </div>
         </div>
       </div>

       {/* Expanded Content: Modules List */}
       <div className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
         <div className="overflow-hidden">
            <div className="p-6 pt-0 border-t border-gray-100 mt-2 bg-[#FAFAFA]">
               <div className="flex items-center justify-between mb-5 pt-6">
                 <h4 className="text-sm font-bold text-[#1A1C1C] uppercase tracking-wider flex items-center gap-2">
                   <Layers size={18} className="text-[#007042]" /> Estrutura do Curso
                 </h4>
                 {/* Editar Curso - navega para a tela de edição */}
                 <Link
                   href={`/admin/cursos/${course.id}/informacao`}
                   onClick={(e) => e.stopPropagation()}
                   className="text-sm font-bold text-[#007042] bg-white border border-[#007042]/20 hover:bg-[#E5F5E9] px-4 py-2 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
                 >
                   <Edit size={16} /> Editar Curso
                 </Link>
               </div>
               
               {course.modules.length > 0 ? (
                 <div className="space-y-3">
                   {course.modules.map(mod => (
                     <div key={mod.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-[#007042]/40 transition-all group/mod gap-4">
                       <div className="flex items-center gap-5">
                         <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#1A1C1C] font-bold text-sm shadow-inner group-hover/mod:bg-[#007042] group-hover/mod:text-white transition-colors">
                           {mod.id.replace('m', '')}
                         </div>
                         <div>
                           <p className="font-bold text-[#1A1C1C] text-[15px]">{mod.title}</p>
                           <div className="flex items-center gap-4 mt-1.5 text-xs text-gray-500 font-medium">
                             <span className="flex items-center gap-1.5"><Clock size={14} className="text-gray-400"/> {mod.duration} horas</span>
                             <span className="w-1 h-1 rounded-full bg-gray-300" />
                             <span className="flex items-center gap-1.5"><LayoutList size={14} className="text-gray-400"/> {mod.lessons} Aulas</span>
                           </div>
                         </div>
                       </div>
                       <div className="flex items-center gap-2 sm:opacity-0 group-hover/mod:opacity-100 transition-opacity">
                         <Link
                           href={`/admin/cursos/${course.id}/conteudo`}
                           className="p-2.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                           title="Editar módulo"
                         >
                           <Edit size={18} />
                         </Link>
                         <button className="p-2.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Excluir módulo">
                           <Trash2 size={18} />
                         </button>
                       </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 <div className="text-center py-12 border-2 border-dashed border-[#BECAB6]/50 rounded-2xl bg-white flex flex-col items-center justify-center gap-3">
                   <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-2">
                     <Layers size={24} className="text-gray-400" />
                   </div>
                   <p className="text-base text-[#1A1C1C] font-bold font-serif">Nenhum módulo cadastrado</p>
                   <p className="text-sm text-gray-500 font-medium max-w-sm">Este curso ainda não possui conteúdo estruturado. Adicione o primeiro módulo para começar.</p>
                   <Link
                     href={`/admin/cursos/${course.id}/conteudo`}
                     className="mt-2 text-sm font-bold text-[#007042] bg-white border border-[#007042]/20 hover:bg-[#E5F5E9] px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                   >
                     <PlusCircle size={15} /> Adicionar Módulo
                   </Link>
                 </div>
               )}
            </div>
         </div>
       </div>
    </div>
  );
}

// --- Page Component -----------------------------------------------------------

export default function CursosAdminPage() {
  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = mockCourses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="p-8 max-w-[1280px] mx-auto w-full space-y-8 pb-12 animate-in fade-in duration-500">
      {/* Breadcrumbs & Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-4">
             <span className="hover:text-[#007042] cursor-pointer transition-colors">Painel Admin</span>
             <ChevronRight size={14} className="text-gray-400" />
             <span className="text-[#1A1C1C] font-bold">Cursos</span>
          </div>
          <h1 className="text-4xl font-black font-serif text-[#1A1C1C] tracking-tight">Gestão de Cursos</h1>
          <p className="text-base text-gray-500 mt-2 font-medium max-w-xl">
            Crie, estruture e gerencie as trilhas de aprendizagem da Universidade Heineken.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-[#028202] hover:bg-[#026c02] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_rgba(2,130,2,0.25)] hover:shadow-[0_12px_28px_rgba(2,130,2,0.35)] hover:-translate-y-0.5"
        >
          <PlusCircle size={20} />
          Novo Curso
        </button>
      </div>

      {/* Action Bar (Filters) */}
      <div className="bg-[#F4F3F3] rounded-2xl flex flex-col sm:flex-row items-center p-4 sm:p-6 gap-4">
        <div className="flex-1 w-full bg-white rounded-xl flex items-center px-4 py-3.5 border border-transparent focus-within:border-[#008200] transition-colors shadow-sm">
          <Search size={20} className="text-[#6B7280] mr-3 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título ou categoria..."
            className="bg-transparent outline-none text-[15px] font-medium text-[#1A1C1C] placeholder-[#6B7280] w-full"
          />
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto shrink-0 overflow-x-auto pb-2 sm:pb-0">
          <button className="flex items-center gap-2 bg-white px-5 py-3.5 rounded-xl text-sm font-bold text-[#1A1C1C] hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all shadow-sm whitespace-nowrap">
            <CheckCircle2 size={18} className="text-[#008200]" />
            Status: Todos
            <ChevronDown size={16} className="text-gray-400 ml-1" />
          </button>
          <button className="flex items-center gap-2 bg-white px-5 py-3.5 rounded-xl text-sm font-bold text-[#1A1C1C] hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all shadow-sm whitespace-nowrap">
            <Tag size={18} className="text-[#008200]" />
            Categoria: Todas
            <ChevronDown size={16} className="text-gray-400 ml-1" />
          </button>
          <button className="flex items-center justify-center bg-[#E3E2E2] hover:bg-[#d6d5d5] min-w-[52px] h-[52px] rounded-xl transition-colors text-[#3F4A3A]">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </div>

      {/* Modules Tree / Accordion List */}
      <div className="space-y-4 pt-2">
        {filtered.map((course) => (
          <CourseAccordionItem key={course.id} course={course} />
        ))}

        {filtered.length === 0 && (
          <div className="px-8 py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={28} className="text-gray-400" />
            </div>
            <p className="text-lg font-bold font-serif text-[#1A1C1C] mb-2">Nenhum curso encontrado</p>
            <p className="text-sm text-gray-500 font-medium">Não encontramos resultados para &ldquo;{search}&rdquo;</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ModalNovoCurso 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
