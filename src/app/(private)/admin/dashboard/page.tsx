'use client';

import { useState, useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowRight, Search, AlertTriangle, Plus, Pencil, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

// --- Tipos --------------------------------------------------------------------

interface RecentUser {
  id: string;
  name: string;
  email: string;
  progress: number;
  lastAccess: string;
}

interface InstructorProfile {
  name: string;
  email: string;
  coursesCount: number;
  studentsCount: number;
}

interface CourseProgress {
  id: string;
  title: string;
  weeklyAccesses: number;
  completionRate: number; // 0–100
}

interface FeedPost {
  id: string;
  title: string;
  body: string;
  link?: string;
  publishedAt: Date;
}

interface FeedPostFormData {
  title: string;
  body: string;
  link: string;
}

// --- Mock Data -----------------------------------------------------------------

const chartData = [
  { name: 'Seg', acessos: 120, conclusoes: 10 },
  { name: 'Ter', acessos: 210, conclusoes: 25 },
  { name: 'Qua', acessos: 180, conclusoes: 15 },
  { name: 'Qui', acessos: 290, conclusoes: 40 },
  { name: 'Sex', acessos: 250, conclusoes: 35 },
  { name: 'Sáb', acessos: 90, conclusoes: 5 },
  { name: 'Dom', acessos: 110, conclusoes: 8 },
];

const recentUsers: RecentUser[] = [
  { id: '1', name: 'Carlos Souza', email: 'carlos.souza@heineken.com', progress: 85, lastAccess: 'Hoje, 14h32' },
  { id: '2', name: 'Ana Lima', email: 'ana.lima@heineken.com', progress: 62, lastAccess: 'Hoje, 11h15' },
  { id: '3', name: 'Rafael Mendes', email: 'rafael.mendes@heineken.com', progress: 38, lastAccess: 'Ontem, 16h48' },
  { id: '4', name: 'Juliana Costa', email: 'juliana.costa@heineken.com', progress: 94, lastAccess: 'Ontem, 09h20' },
  { id: '5', name: 'Bruno Alves', email: 'bruno.alves@heineken.com', progress: 12, lastAccess: '3 dias atrás' },
];

const instructorProfile: InstructorProfile = {
  name: 'João da Silva',
  email: 'joao.silva@heineken.com',
  coursesCount: 5,
  studentsCount: 312,
};

const progressStats: CourseProgress[] = [
  { id: '1', title: 'Cultura Cervejeira e Liderança', weeklyAccesses: 290, completionRate: 72 },
  { id: '2', title: 'Segurança no Trabalho', weeklyAccesses: 185, completionRate: 41 },
  { id: '3', title: 'Gestão de Equipes', weeklyAccesses: 134, completionRate: 58 },
];

const atRiskCount = 7;

const initialPosts: FeedPost[] = [
  {
    id: '1',
    title: 'Bem-vindos ao novo portal de treinamentos',
    body: 'Estamos felizes em anunciar o lançamento da nova plataforma de aprendizado da Heineken. Aqui você encontrará todos os cursos, trilhas de desenvolvimento e certificações disponíveis para colaboradores.',
    publishedAt: new Date('2025-01-15'),
  },
  {
    id: '2',
    title: 'Treinamento obrigatório: Segurança no Trabalho',
    body: 'Lembramos que todos os colaboradores devem concluir o módulo de Segurança no Trabalho até o final do mês. O não cumprimento pode impactar sua avaliação de desempenho.',
    link: 'https://heineken.com/seguranca',
    publishedAt: new Date('2025-01-10'),
  },
];

// --- Helpers ------------------------------------------------------------------

function validateForm(data: FeedPostFormData): Partial<FeedPostFormData> {
  const errors: Partial<FeedPostFormData> = {};
  if (!data.title.trim()) errors.title = 'Título é obrigatório';
  else if (data.title.length > 100) errors.title = 'Título deve ter no máximo 100 caracteres';
  if (!data.body.trim()) errors.body = 'Conteúdo é obrigatório';
  else if (data.body.length > 1000) errors.body = 'Conteúdo deve ter no máximo 1000 caracteres';
  if (data.link && !/^https?:\/\/.+/.test(data.link)) errors.link = 'URL deve começar com http:// ou https://';
  return errors;
}

// --- Page ----------------------------------------------------------------------

export default function DashboardInstrutor() {
  const [posts, setPosts] = useState<FeedPost[]>(initialPosts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<FeedPost | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<FeedPostFormData>({ title: '', body: '', link: '' });
  const [formErrors, setFormErrors] = useState<Partial<FeedPostFormData>>({});
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  function showSuccess(message: string) {
    setSuccessMessage(message);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setSuccessMessage(null), 3000);
  }

  function handleSubmit() {
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    if (editingPost) {
      setPosts(prev =>
        prev.map(p =>
          p.id === editingPost.id
            ? { ...p, title: formData.title, body: formData.body, link: formData.link || undefined }
            : p
        )
      );
      showSuccess('Postagem atualizada com sucesso.');
    } else {
      const newPost: FeedPost = {
        id: crypto.randomUUID(),
        title: formData.title,
        body: formData.body,
        link: formData.link || undefined,
        publishedAt: new Date(),
      };
      setPosts(prev => [newPost, ...prev]);
      showSuccess('Postagem criada com sucesso.');
    }
    setIsModalOpen(false);
    setEditingPost(null);
    setFormData({ title: '', body: '', link: '' });
    setFormErrors({});
  }

  function handleEdit(post: FeedPost) {
    setEditingPost(post);
    setFormData({ title: post.title, body: post.body, link: post.link ?? '' });
    setFormErrors({});
    setIsModalOpen(true);
  }

  function handleDeleteConfirm() {
    if (!deletingPostId) return;
    setPosts(prev => prev.filter(p => p.id !== deletingPostId));
    setDeletingPostId(null);
    showSuccess('Postagem removida com sucesso.');
  }

  function openNewPost() {
    setEditingPost(null);
    setFormData({ title: '', body: '', link: '' });
    setFormErrors({});
    setIsModalOpen(true);
  }

  return (
    <div className="p-8 space-y-8 max-w-[1280px] mx-auto w-full">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1A1C1C] font-serif">Painel do Instrutor</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center bg-[#EEEEEE] rounded-full px-4 py-2 w-64">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent border-none outline-none text-sm w-full text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </div>

      {/* Seção A — Perfil do Instrutor */}
      <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] p-6 flex items-center gap-6">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-heineken-green flex items-center justify-center shrink-0">
          <span className="text-white text-2xl font-black">
            {instructorProfile.name ? instructorProfile.name.charAt(0).toUpperCase() : '?'}
          </span>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-lg font-bold text-gray-900 truncate">{instructorProfile.name || '—'}</p>
          <p className="text-sm text-heineken-green font-semibold">Instrutor</p>
          <p className="text-sm text-gray-500 truncate">{instructorProfile.email || '—'}</p>
        </div>
        {/* Divisor */}
        <div className="w-px h-16 bg-gray-100 shrink-0" />
        {/* Contadores */}
        <div className="flex gap-8 shrink-0">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-heineken-green">{instructorProfile.coursesCount ?? 0}</span>
            <span className="text-xs text-gray-500 text-center">cursos<br />gerenciados</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-heineken-green">{instructorProfile.studentsCount ?? 0}</span>
            <span className="text-xs text-gray-500 text-center">alunos<br />matriculados</span>
          </div>
        </div>
      </div>

      {/* Grid — Seção B (Estatísticas) + Seção C (Feed) */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Seção B — Estatísticas de Progresso */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] p-6 flex flex-col gap-4">
          <h2 className="font-bold text-gray-900 text-lg">Estatísticas de Progresso</h2>

          {progressStats.length === 0 ? (
            <p className="text-gray-500 text-sm">Nenhum acesso registrado nesta semana.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {progressStats.map(course => (
                <div
                  key={course.id}
                  className="flex items-center justify-between px-4 py-3 rounded-lg bg-heineken-light"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <p className="text-sm font-semibold text-gray-800 truncate">{course.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{course.weeklyAccesses} acessos esta semana</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    {course.completionRate < 50 && (
                      <AlertTriangle size={16} className="text-heineken-red" />
                    )}
                    <span
                      className={`text-sm font-bold ${
                        course.completionRate < 50 ? 'text-heineken-red' : 'text-heineken-green'
                      }`}
                    >
                      {course.completionRate}%
                    </span>
                    <span className="text-xs text-gray-400">conclusão</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Card alunos em risco */}
          {atRiskCount > 0 ? (
            <Link
              href="/admin/usuarios"
              className="flex items-center justify-between bg-heineken-red text-white rounded-xl px-5 py-4 mt-2 hover:opacity-90 transition-opacity"
            >
              <div>
                <span className="text-2xl font-black">{atRiskCount}</span>
                <span className="text-sm font-semibold ml-2">alunos em risco</span>
              </div>
              <ArrowRight size={20} />
            </Link>
          ) : (
            <div className="flex items-center justify-between bg-heineken-green text-white rounded-xl px-5 py-4 mt-2">
              <div>
                <span className="text-2xl font-black">0</span>
                <span className="text-sm font-semibold ml-2">alunos em risco</span>
              </div>
            </div>
          )}
        </div>

        {/* Seção C — Feed da Empresa */}
        <div className="xl:col-span-1 bg-white rounded-xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-900 text-lg">Feed da Empresa</h2>
            <button
              onClick={openNewPost}
              className="flex items-center gap-1.5 bg-heineken-green text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-heineken-dark transition-colors"
            >
              <Plus size={14} />
              Nova Postagem
            </button>
          </div>

          {posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
              <p className="text-gray-500 text-sm">Nenhuma postagem publicada ainda.</p>
              <button
                onClick={openNewPost}
                className="flex items-center gap-1.5 bg-heineken-green text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-heineken-dark transition-colors"
              >
                <Plus size={14} />
                Nova Postagem
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[420px] pr-1">
              {posts.map(post => (
                <div
                  key={post.id}
                  className="border border-gray-100 rounded-lg p-4 flex flex-col gap-2 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold text-gray-900 leading-snug">{post.title}</p>
                    <span className="text-xs text-gray-400 shrink-0">
                      {post.publishedAt.toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {post.body.length > 150 ? post.body.slice(0, 150) + '...' : post.body}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => handleEdit(post)}
                      className="flex items-center gap-1 text-xs font-semibold text-heineken-green hover:text-heineken-dark transition-colors"
                    >
                      <Pencil size={12} />
                      Editar
                    </button>
                    <button
                      onClick={() => setDeletingPostId(post.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-heineken-red hover:opacity-75 transition-opacity"
                    >
                      <Trash2 size={12} />
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal de Criação/Edição */}
      <Dialog.Root open={isModalOpen} onOpenChange={open => {
        if (!open) {
          setIsModalOpen(false);
          setEditingPost(null);
          setFormData({ title: '', body: '', link: '' });
          setFormErrors({});
        } else {
          setIsModalOpen(true);
        }
      }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-bold text-gray-900">
                {editingPost ? 'Editar Postagem' : 'Nova Postagem'}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>

            <div className="flex flex-col gap-4">
              {/* Título */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Título <span className="text-heineken-red">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Título da postagem"
                  maxLength={100}
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-heineken-green transition-colors"
                />
                {formErrors.title && (
                  <p className="text-xs text-heineken-red mt-1">{formErrors.title}</p>
                )}
              </div>

              {/* Corpo */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Conteúdo <span className="text-heineken-red">*</span>
                </label>
                <textarea
                  value={formData.body}
                  onChange={e => setFormData(prev => ({ ...prev, body: e.target.value }))}
                  placeholder="Texto da postagem..."
                  maxLength={1000}
                  rows={5}
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-heineken-green transition-colors resize-none"
                />
                {formErrors.body && (
                  <p className="text-xs text-heineken-red mt-1">{formErrors.body}</p>
                )}
              </div>

              {/* Link */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Link externo <span className="text-gray-400 font-normal">(opcional)</span>
                </label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={e => setFormData(prev => ({ ...prev, link: e.target.value }))}
                  placeholder="https://..."
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-heineken-green transition-colors"
                />
                {formErrors.link && (
                  <p className="text-xs text-heineken-red mt-1">{formErrors.link}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <Dialog.Close asChild>
                <button className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors">
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                onClick={handleSubmit}
                className="px-5 py-2.5 text-sm font-semibold bg-heineken-green text-white rounded-lg hover:bg-heineken-dark transition-colors"
              >
                {editingPost ? 'Salvar alterações' : 'Publicar'}
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Diálogo de Confirmação de Remoção */}
      <Dialog.Root open={!!deletingPostId} onOpenChange={open => { if (!open) setDeletingPostId(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40" />
          <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <Dialog.Title className="text-lg font-bold text-gray-900">Remover postagem</Dialog.Title>
              <Dialog.Close asChild>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={20} />
                </button>
              </Dialog.Close>
            </div>
            <p className="text-sm text-gray-600">
              Tem certeza que deseja remover esta postagem? Esta ação não pode ser desfeita.
            </p>
            <div className="flex items-center justify-end gap-3">
              <Dialog.Close asChild>
                <button className="px-5 py-2.5 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors">
                  Cancelar
                </button>
              </Dialog.Close>
              <button
                onClick={handleDeleteConfirm}
                className="px-5 py-2.5 text-sm font-semibold bg-heineken-red text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Remover
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Gráfico de Atividade da Plataforma */}
      <div className="bg-white rounded-xl shadow-[0_4px_24px_rgba(0,34,0,0.04)] p-8 flex flex-col min-h-[488px] w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-bold text-[#1A1C1C] text-lg">Atividade da Plataforma</h2>
          <select className="text-sm bg-gray-50 border-none rounded-lg px-4 py-2 outline-none text-gray-600 font-semibold cursor-pointer">
            <option>Últimos 7 dias</option>
            <option>Últimos 30 dias</option>
            <option>Este ano</option>
          </select>
        </div>
        <div className="w-full" style={{ height: 280 }}>
          {isMounted && (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 500 }} dx={-10} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 24px rgba(0,34,0,0.08)' }}
                cursor={{ stroke: '#E5E7EB', strokeWidth: 2, strokeDasharray: '5 5' }}
              />
              <Line type="monotone" name="Acessos" dataKey="acessos" stroke="#007042" strokeWidth={3} dot={{ r: 4, fill: '#007042', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, fill: '#007042', stroke: '#fff', strokeWidth: 2 }} />
              <Line type="monotone" name="Conclusões" dataKey="conclusoes" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }} />
            </LineChart>
          </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Atividade Recente */}
      <div className="bg-[#F4F3F3] rounded-2xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-[#1A1C1C] text-lg">Atividade Recente</h2>
          <button className="text-sm font-semibold text-[#007042] hover:text-[#005a35] transition-colors flex items-center gap-1">
            Ver registro completo <ArrowRight size={14} />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {recentUsers.map((user, index) => (
            <div
              key={user.id}
              className={`group flex items-center gap-4 px-6 py-4 rounded-xl transition-all hover:shadow-[0_4px_24px_rgba(0,34,0,0.04)] cursor-pointer ${
                index % 2 === 0 ? 'bg-white' : 'bg-[#F9F9F9]'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#007042]/10 flex items-center justify-center shrink-0">
                <span className="text-[#007042] font-bold text-sm">{user.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-[#007042] transition-colors truncate">{user.name}</p>
                <p className="text-xs text-gray-500 truncate mt-0.5">Acessou o sistema em {user.lastAccess}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-gray-500">Progresso</span>
                  <span className="text-xs font-bold text-[#007042] bg-green-50 px-3 py-1 rounded-md">{user.progress}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner de sucesso */}
      {successMessage && (
        <div className="fixed bottom-6 right-6 bg-heineken-green text-white rounded-xl px-6 py-3 shadow-lg z-50 text-sm font-semibold">
          {successMessage}
        </div>
      )}

    </div>
  );
}
