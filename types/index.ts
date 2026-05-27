export type { Course } from './course'
export type { Post } from './post'

export interface Modulo {
  id: string
  titulo: string
  duracao: number
  aulas: number
}

export interface Aluno {
  id: string
  nome: string
  email: string
  progresso: number
}

export interface CursoCompleto {
  id: string
  titulo: string
  descricao: string
  categoria: string
  nivel: string
  cargaHoraria: number
  status: 'active' | 'draft'
  modulos: Modulo[]
  alunos: Aluno[]
}

export interface Aula {
  id: string
  titulo: string
  tipo: 'video' | 'texto' | 'quiz'
  duracao: number
  descricao?: string
  url?: string
}

export interface Prova {
  id: string
  titulo: string
  descricao?: string
  questoes: number
  tempoLimite?: number
}
