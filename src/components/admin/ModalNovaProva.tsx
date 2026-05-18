'use client';

import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, FileSpreadsheet } from 'lucide-react';
import type { Prova } from '@/types';

interface ModalNovaProvaProps {
  isOpen: boolean;
  onClose: () => void;
  provaExistente?: Partial<Prova> | null;
  onSalvar: (dados: { titulo: string; descricao: string; pontuacaoMinima: number; qntdQuestoes: number }) => void;
  tipoProva: 'modulo' | 'curso';
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-semibold text-[#1A1C1C] block">{label}</label>
      {children}
    </div>
  );
}

export function ModalNovaProva({ isOpen, onClose, provaExistente, onSalvar, tipoProva }: ModalNovaProvaProps) {
  const [titulo, setTitulo] = React.useState('');
  const [descricao, setDescricao] = React.useState('');
  const [pontuacaoMinima, setPontuacaoMinima] = React.useState<number>(70);
  const [qntdQuestoes, setQntdQuestoes] = React.useState<number>(10);

  React.useEffect(() => {
    if (isOpen) {
      if (provaExistente) {
        setTitulo(provaExistente.titulo || '');
        setDescricao(provaExistente.descricao || '');
        setPontuacaoMinima(provaExistente.pontuacaoMinima || 70);
        setQntdQuestoes(provaExistente.qntdQuestoes || 10);
      } else {
        setTitulo('');
        setDescricao('');
        setPontuacaoMinima(70);
        setQntdQuestoes(10);
      }
    }
  }, [isOpen, provaExistente]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSalvar({ titulo, descricao, pontuacaoMinima, qntdQuestoes });
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#001D10]/40 backdrop-blur-sm z-50 transition-opacity" />
        <Dialog.Content
          aria-labelledby="modal-prova-title"
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden z-50">
          
          <div className="bg-[#007042] px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <FileSpreadsheet className="text-white" size={20} />
              </div>
              <Dialog.Title id="modal-prova-title" className="text-white font-serif font-bold text-lg">
                {provaExistente ? 'Editar Prova' : 'Nova Prova'}
                <span className="block text-sm font-sans font-medium text-white/80">
                  {tipoProva === 'modulo' ? 'Prova de Conclusão do Módulo' : 'Prova Final do Curso'}
                </span>
              </Dialog.Title>
            </div>
            <Dialog.Close asChild>
              <button className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-xl transition-colors">
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <FormField label="Título da Prova">
              <input
                type="text"
                required
                value={titulo}
                onChange={e => setTitulo(e.target.value)}
                placeholder="Ex: Avaliação Final"
                className="w-full h-11 px-4 rounded-xl border-2 border-[#BECAB6]/50 bg-[#FAFAFA] text-[#1A1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#007042] focus:bg-white transition-all"
              />
            </FormField>

            <FormField label="Descrição (Opcional)">
              <textarea
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
                placeholder="Instruções da prova..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-[#BECAB6]/50 bg-[#FAFAFA] text-[#1A1C1C] placeholder:text-gray-400 focus:outline-none focus:border-[#007042] focus:bg-white transition-all resize-none"
              />
            </FormField>

            <div className="grid grid-cols-2 gap-4">
              <FormField label="Pontuação Mínima (%)">
                <input
                  type="number"
                  min="0"
                  max="100"
                  required
                  value={pontuacaoMinima}
                  onChange={e => setPontuacaoMinima(Number(e.target.value))}
                  className="w-full h-11 px-4 rounded-xl border-2 border-[#BECAB6]/50 bg-[#FAFAFA] text-[#1A1C1C] focus:outline-none focus:border-[#007042] focus:bg-white transition-all"
                />
              </FormField>

              <FormField label="Quantidade de Questões">
                <input
                  type="number"
                  min="1"
                  required
                  value={qntdQuestoes}
                  onChange={e => setQntdQuestoes(Number(e.target.value))}
                  className="w-full h-11 px-4 rounded-xl border-2 border-[#BECAB6]/50 bg-[#FAFAFA] text-[#1A1C1C] focus:outline-none focus:border-[#007042] focus:bg-white transition-all"
                />
              </FormField>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="px-5 py-2.5 rounded-xl font-bold text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl font-bold text-white bg-[#007042] hover:bg-[#005a35] shadow-[0_6px_20px_rgba(0,112,66,0.2)] hover:-translate-y-0.5 transition-all"
              >
                Salvar Prova
              </button>
            </div>
          </form>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
