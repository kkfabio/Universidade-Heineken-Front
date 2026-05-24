'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Star, ChevronDown, BookOpen, Tag, Clock, BarChart, AlignLeft, CheckCircle2, X } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ModalNovoCursoProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalNovoCurso({ isOpen, onClose }: ModalNovoCursoProps) {
    const router = useRouter();

    const [titulo,       setTitulo]       = React.useState('');
    const [categoria,    setCategoria]    = React.useState('');
    const [nivel,        setNivel]        = React.useState('iniciante');
    const [cargaHoraria, setCargaHoraria] = React.useState('');
    const [descricao,    setDescricao]    = React.useState('');
    const [ativo,        setAtivo]        = React.useState(true);

    React.useEffect(() => {
        if (isOpen) {
            setTitulo('');
            setCategoria('');
            setNivel('iniciante');
            setCargaHoraria('');
            setDescricao('');
            setAtivo(true);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newCourseId = Date.now().toString();
        onClose();
        router.push(`/admin/cursos/${newCourseId}/informacao`);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />
            <div
                className="relative w-full max-w-[896px] bg-[#FAFAFA] rounded-2xl shadow-[0_32px_80px_rgba(0,0,0,0.4)] border border-[#BECAB6] overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className="hidden md:flex w-[285px] shrink-0 bg-[#005a35] flex-col p-10 relative overflow-hidden text-white">
                    <div className="absolute -top-10 -right-10 opacity-20 pointer-events-none">
                        <Star size={160} className="fill-white" />
                    </div>
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <div className="w-14 h-14 bg-[#AC1A00] flex items-center justify-center rounded-xl shadow-md mb-8">
                                <Star className="text-white fill-white" size={24} />
                            </div>
                            <h2 className="text-[28px] font-black font-serif mb-4 leading-tight">Nova Jornada de Conhecimento</h2>
                            <p className="text-[#BECAB6] font-sans text-sm leading-relaxed">
                                A estruturação de um novo curso é o primeiro passo para capacitar os talentos da Universidade Heineken.
                            </p>
                        </div>
                        <div className="pt-8 mt-auto">
                            <div className="w-16 h-1.5 bg-[#007042] rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex flex-col overflow-y-auto bg-white p-8 sm:p-12">
                    <div className="flex items-start justify-between mb-8">
                        <div className="space-y-2 pr-4">
                            <h1 id="modal-title" className="text-3xl font-black font-serif text-[#1A1C1C]">Novo Curso</h1>
                            <p className="text-sm text-gray-500 font-sans">
                                Preencha os dados abaixo para cadastrar um novo curso na plataforma.
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-[#6F7B69] hover:text-[#1A1C1C] transition-colors p-2 hover:bg-[#F4F4F4] rounded-full"
                            aria-label="Fechar"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <form className="space-y-6 font-sans flex-1 flex flex-col" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                                <BookOpen size={14} />
                                Título do Curso
                            </label>
                            <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                                <input
                                    type="text"
                                    required
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                    placeholder="Ex: Liderança Inspiradora"
                                    className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                                <Tag size={14} />
                                Categoria
                            </label>
                            <div className="relative bg-[#F4F4F4] rounded-lg focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                                <select
                                    required
                                    value={categoria}
                                    onChange={e => setCategoria(e.target.value)}
                                    className="w-full bg-transparent appearance-none outline-none text-[#1A1C1C] font-medium text-base px-4 py-[15px] cursor-pointer"
                                >
                                    <option value="" disabled className="text-[#6F7B69]">Selecione uma categoria</option>
                                    <option value="lideranca">Liderança</option>
                                    <option value="vendas">Vendas e Comercial</option>
                                    <option value="operacoes">Operações e Logística</option>
                                    <option value="tecnologia">Tecnologia</option>
                                    <option value="onboarding">Onboarding</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <ChevronDown className="text-[#3F4A3A]" size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                                    <Clock size={14} />
                                    Carga Horária (h)
                                </label>
                                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                                    <input
                                        type="number"
                                        min="1"
                                        required
                                        value={cargaHoraria}
                                        onChange={e => setCargaHoraria(e.target.value)}
                                        placeholder="Ex: 40"
                                        className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                                    <BarChart size={14} />
                                    Nível
                                </label>
                                <div className="relative bg-[#F4F4F4] rounded-lg focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                                    <select
                                        value={nivel}
                                        onChange={e => setNivel(e.target.value)}
                                        className="w-full bg-transparent appearance-none outline-none text-[#1A1C1C] font-medium text-base px-4 py-[15px] cursor-pointer"
                                    >
                                        <option value="iniciante">Iniciante</option>
                                        <option value="intermediario">Intermediário</option>
                                        <option value="avancado">Avançado</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <ChevronDown className="text-[#3F4A3A]" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2 flex-1 min-h-[120px]">
                            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                                <AlignLeft size={14} />
                                Descrição Curta
                            </label>
                            <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow h-[100px]">
                                <textarea
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                    placeholder="Descreva o principal objetivo e os tópicos que serão abordados neste curso..."
                                    className="w-full h-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base resize-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 pt-2">
                            <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] block">
                                Status Inicial
                            </label>
                            <div className="bg-[#F4F4F4] rounded-lg px-4 py-[14px] flex items-center justify-between">
                                <span className="text-[#1A1C1C] font-medium text-base flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-[#007042]" />
                                    Curso Ativo
                                </span>
                                <Switch
                                    checked={ativo}
                                    onCheckedChange={setAtivo}
                                    id="status-mode"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 mt-auto">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-full sm:w-auto px-8 py-[14px] border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-base rounded-lg hover:bg-[#F4F4F4] transition-colors text-center"
                            >
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-[16px] bg-[#007042] text-white font-bold text-base rounded-lg shadow-[0_12px_24px_rgba(0,112,66,0.2)] hover:bg-[#005a35] transition-colors flex items-center justify-center gap-2"
                            >
                                <CheckCircle2 size={18} />
                                Criar e Editar Curso
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
