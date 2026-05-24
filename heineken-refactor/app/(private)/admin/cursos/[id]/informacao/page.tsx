'use client';

import * as React from 'react';
import * as Switch from '@radix-ui/react-switch';
import {
  BookOpen, Tag, Clock, BarChart,
  AlignLeft, CheckCircle2, ChevronDown, Upload,
} from 'lucide-react';

// ── Shared FormField ──────────────────────────────────────────────────────────
function FormField({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
        <Icon size={13} />
        {label}
      </label>
      {children}
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function InformacaoPage() {
  const [ativo, setAtivo] = React.useState(true);

  return (
    <div className="space-y-8 max-w-3xl">

      {/* ── Dados Básicos ── */}
      <section className="space-y-5">
        <h2 className="text-sm font-bold font-serif text-[#1A1C1C] flex items-center gap-2">
          <span className="w-1 h-5 bg-[#007042] rounded-full" />
          Dados Básicos
        </h2>

        {/* Título */}
        <FormField label="Título do Curso" icon={BookOpen}>
          <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
            <input
              type="text"
              defaultValue="Liderança Inspiradora"
              placeholder="Ex: Liderança Inspiradora"
              className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
            />
          </div>
        </FormField>

        {/* Categoria + Nível */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <FormField label="Categoria" icon={Tag}>
            <div className="relative bg-[#F4F4F4] rounded-xl focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <select
                defaultValue="lideranca"
                className="w-full bg-transparent appearance-none outline-none text-[#1A1C1C] font-medium text-base px-4 py-3.5 cursor-pointer"
              >
                <option value="lideranca">Liderança</option>
                <option value="vendas">Vendas e Comercial</option>
                <option value="operacoes">Operações e Logística</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="onboarding">Onboarding</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown size={17} className="text-[#3F4A3A]" />
              </div>
            </div>
          </FormField>

          <FormField label="Nível" icon={BarChart}>
            <div className="relative bg-[#F4F4F4] rounded-xl focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
              <select
                defaultValue="intermediario"
                className="w-full bg-transparent appearance-none outline-none text-[#1A1C1C] font-medium text-base px-4 py-3.5 cursor-pointer"
              >
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown size={17} className="text-[#3F4A3A]" />
              </div>
            </div>
          </FormField>
        </div>

        {/* Carga Horária */}
        <FormField label="Carga Horária (horas)" icon={Clock}>
          <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow max-w-[200px]">
            <input
              type="number"
              min={1}
              defaultValue={40}
              className="w-full bg-transparent outline-none text-[#1A1C1C] font-medium text-base"
            />
          </div>
        </FormField>

        {/* Descrição */}
        <FormField label="Descrição do Curso" icon={AlignLeft}>
          <div className="bg-[#F4F4F4] rounded-xl px-4 py-3.5 focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
            <textarea
              rows={4}
              defaultValue="Desenvolva habilidades essenciais de liderança para inspirar e guiar equipes de alta performance."
              className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base resize-none"
            />
          </div>
        </FormField>
      </section>

      <hr className="border-[#BECAB6]/40" />

      {/* ── Imagem de Capa ── */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold font-serif text-[#1A1C1C] flex items-center gap-2">
          <span className="w-1 h-5 bg-[#007042] rounded-full" />
          Imagem de Capa
        </h2>
        <label className="block border-2 border-dashed border-[#BECAB6]/60 rounded-2xl p-10 flex flex-col items-center justify-center gap-3 bg-[#FAFAFA] hover:border-[#007042]/50 hover:bg-[#F0F9F4] transition-all cursor-pointer group">
          <div className="w-14 h-14 rounded-2xl bg-white border border-[#BECAB6]/40 flex items-center justify-center group-hover:bg-[#E5F5E9] transition-colors shadow-sm">
            <Upload size={24} className="text-[#007042]" />
          </div>
          <div className="text-center">
            <p className="font-bold text-[#1A1C1C] text-sm">Clique ou arraste uma imagem</p>
            <p className="text-xs text-gray-500 mt-1">PNG, JPG ou WEBP · Máx. 5 MB · Recomendado 1280×720 px</p>
          </div>
          <span className="mt-1 px-5 py-2 text-sm font-bold text-[#007042] border border-[#007042]/30 rounded-lg bg-white group-hover:bg-[#E5F5E9] transition-colors">
            Selecionar Arquivo
          </span>
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </section>

      <hr className="border-[#BECAB6]/40" />

      {/* ── Publicação ── */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold font-serif text-[#1A1C1C] flex items-center gap-2">
          <span className="w-1 h-5 bg-[#007042] rounded-full" />
          Publicação
        </h2>
        <div className="bg-[#F4F4F4] rounded-xl px-5 py-4 flex items-center justify-between">
          <div>
            <p className="font-bold text-[#1A1C1C] text-sm flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#007042]" />
              Curso Ativo
            </p>
            <p className="text-xs text-gray-500 mt-0.5">Alunos podem visualizar e se matricular neste curso</p>
          </div>
          <Switch.Root
            checked={ativo}
            onCheckedChange={setAtivo}
            className="w-[42px] h-[24px] bg-[#BECAB6] data-[state=checked]:bg-[#007042] rounded-full relative outline-none cursor-pointer transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#007042]"
          >
            <Switch.Thumb className="block w-[20px] h-[20px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] shadow-sm" />
          </Switch.Root>
        </div>
      </section>
    </div>
  );
}
