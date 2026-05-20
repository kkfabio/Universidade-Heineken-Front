'use client';

import * as React from 'react';
import { Star, Mail, Key, Trash2, CheckCircle2, AlertTriangle, X } from 'lucide-react';

interface ModalGerenciarUsuarioProps {
  isOpen: boolean;
  onClose: () => void;
  usuario: {
    nome: string;
    email: string;
  };
}

type Aba = 'acesso' | 'senha' | 'email' | 'remover';

export function ModalGerenciarUsuario({ isOpen, onClose, usuario }: ModalGerenciarUsuarioProps) {
  const [abaAtiva, setAbaAtiva] = React.useState<Aba>('acesso');
  const [novaSenha, setNovaSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');
  const [novoEmail, setNovoEmail] = React.useState('');
  const [confirmarRemocao, setConfirmarRemocao] = React.useState('');

  React.useEffect(() => {
    if (isOpen) {
      setAbaAtiva('acesso');
      setNovaSenha('');
      setConfirmarSenha('');
      setNovoEmail('');
      setConfirmarRemocao('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const abas: { id: Aba; label: string; icon: React.ReactNode }[] = [
    { id: 'acesso', label: 'Gerenciar Acesso', icon: <CheckCircle2 size={14} /> },
    { id: 'senha', label: 'Redefinir Senha', icon: <Key size={14} /> },
    { id: 'email', label: 'Alterar E-mail', icon: <Mail size={14} /> },
    { id: 'remover', label: 'Remover Usuário', icon: <Trash2 size={14} /> },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-[560px] bg-white rounded-2xl shadow-[0_32px_64px_rgba(0,34,0,0.15)] border border-[#BECAB6] overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-gerenciar-title"
      >
        {/* Red Star Decorator */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-0 right-0 w-14 h-14 bg-[#AC1A00] hover:bg-[#8B1400] flex items-center justify-center rounded-bl-2xl shadow-sm z-10 transition-colors cursor-pointer"
        >
          <Star className="text-white fill-white" size={22} />
        </button>

        {/* Header */}
        <div className="px-10 pt-10 pb-6 pr-16 space-y-1">
          <h2 id="modal-gerenciar-title" className="text-2xl font-black font-serif text-[#1A1C1C]">
            Gerenciar Usuário
          </h2>
          <p className="text-sm text-gray-500 font-sans">
            <span className="font-semibold text-[#1A1C1C]">{usuario.nome}</span>
            {' '}·{' '}
            <span className="text-gray-400">{usuario.email}</span>
          </p>
        </div>

        {/* Tabs */}
        <div className="px-10 flex gap-1 border-b border-gray-100">
          {abas.map((aba) => (
            <button
              key={aba.id}
              onClick={() => setAbaAtiva(aba.id)}
              className={`flex items-center gap-1.5 px-3 py-2.5 text-[12px] font-bold uppercase tracking-[0.8px] rounded-t-lg transition-colors border-b-2 -mb-px ${
                abaAtiva === aba.id
                  ? aba.id === 'remover'
                    ? 'border-[#FF2B00] text-[#FF2B00]'
                    : 'border-[#007042] text-[#007042]'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {aba.icon}
              {aba.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-10 py-8 font-sans">

          {/* Aba: Gerenciar Acesso */}
          {abaAtiva === 'acesso' && (
            <div className="space-y-5">
              <p className="text-sm text-gray-500 leading-relaxed">
                Controle o nível de acesso do usuário na plataforma. Alterações entram em vigor imediatamente.
              </p>
              <div className="space-y-3">
                {[
                  { label: 'Acesso à Plataforma', desc: 'Permite login e uso geral', ativo: true },
                  { label: 'Acesso a Cursos', desc: 'Visualizar e iniciar cursos', ativo: true },
                  { label: 'Emissão de Certificados', desc: 'Receber certificados ao concluir', ativo: true },
                  { label: 'Acesso ao Assistente IA', desc: 'Usar o chat de IA nos cursos', ativo: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between p-4 bg-[#F4F4F4] rounded-xl"
                  >
                    <div>
                      <p className="text-sm font-semibold text-[#1A1C1C]">{item.label}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                    <div
                      className={`relative w-[42px] h-[24px] rounded-full cursor-pointer transition-colors ${
                        item.ativo ? 'bg-[#007042]' : 'bg-[#BECAB6]'
                      }`}
                    >
                      <div
                        className={`absolute top-[2px] size-[20px] rounded-full bg-white shadow-sm transition-transform ${
                          item.ativo ? 'translate-x-[19px]' : 'translate-x-[2px]'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-[14px] bg-[#007042] text-white font-bold text-base rounded-lg shadow-[0_12px_24px_rgba(0,112,66,0.2)] hover:bg-[#005a35] transition-colors flex items-center justify-center gap-2">
                <CheckCircle2 size={16} />
                Salvar Alterações
              </button>
            </div>
          )}

          {/* Aba: Redefinir Senha */}
          {abaAtiva === 'senha' && (
            <div className="space-y-5">
              <p className="text-sm text-gray-500 leading-relaxed">
                Defina uma nova senha para o usuário. Ele receberá um e-mail de confirmação.
              </p>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                  <Key size={13} />
                  Nova Senha
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                  <input
                    type="password"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    placeholder="Mínimo 8 caracteres"
                    className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                  <Key size={13} />
                  Confirmar Nova Senha
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                  <input
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Repita a nova senha"
                    className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-[14px] border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-base rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="flex-1 py-[14px] bg-[#007042] text-white font-bold text-base rounded-lg shadow-[0_12px_24px_rgba(0,112,66,0.2)] hover:bg-[#005a35] transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} />
                  Redefinir Senha
                </button>
              </div>
            </div>
          )}

          {/* Aba: Alterar E-mail */}
          {abaAtiva === 'email' && (
            <div className="space-y-5">
              <p className="text-sm text-gray-500 leading-relaxed">
                Atualize o e-mail corporativo do usuário. O acesso será vinculado ao novo endereço.
              </p>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                  <Mail size={13} />
                  E-mail Atual
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] opacity-60">
                  <p className="text-[#1A1C1C] font-medium text-base">{usuario.email}</p>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#005a35] uppercase tracking-[1.2px] flex items-center gap-2">
                  <Mail size={13} />
                  Novo E-mail Corporativo
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#007042] transition-shadow">
                  <input
                    type="email"
                    value={novoEmail}
                    onChange={(e) => setNovoEmail(e.target.value)}
                    placeholder="novo.email@heineken.com"
                    className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-[14px] border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-base rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="flex-1 py-[14px] bg-[#007042] text-white font-bold text-base rounded-lg shadow-[0_12px_24px_rgba(0,112,66,0.2)] hover:bg-[#005a35] transition-colors flex items-center justify-center gap-2"
                >
                  <CheckCircle2 size={16} />
                  Atualizar E-mail
                </button>
              </div>
            </div>
          )}

          {/* Aba: Remover Usuário */}
          {abaAtiva === 'remover' && (
            <div className="space-y-5">
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-100">
                <AlertTriangle size={18} className="text-[#FF2B00] shrink-0 mt-0.5" />
                <p className="text-sm text-[#FF2B00] font-medium leading-relaxed">
                  Esta ação é <strong>irreversível</strong>. O usuário perderá todo o acesso, histórico de cursos e certificados emitidos.
                </p>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-bold text-[#FF2B00] uppercase tracking-[1.2px]">
                  Digite o nome do usuário para confirmar
                </label>
                <div className="bg-[#F4F4F4] rounded-lg px-4 py-[15px] focus-within:ring-2 focus-within:ring-[#FF2B00] transition-shadow">
                  <input
                    type="text"
                    value={confirmarRemocao}
                    onChange={(e) => setConfirmarRemocao(e.target.value)}
                    placeholder={usuario.nome}
                    className="w-full bg-transparent outline-none text-[#1A1C1C] placeholder-[#6F7B69] font-medium text-base"
                  />
                </div>
                <p className="text-xs text-gray-400">
                  Digite exatamente: <strong className="text-[#1A1C1C]">{usuario.nome}</strong>
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-[14px] border-2 border-[#BECAB6] text-[#3F4A3A] font-bold text-base rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  disabled={confirmarRemocao !== usuario.nome}
                  className="flex-1 py-[14px] bg-[#FF2B00] text-white font-bold text-base rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Trash2 size={16} />
                  Remover Definitivamente
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#F4F4F4] py-4 flex justify-center items-center">
          <div className="w-32 h-1.5 bg-[#DCDCDC] rounded-full" />
        </div>
      </div>
    </div>
  );
}
