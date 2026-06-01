export interface Modulo {
  id: string
  titulo: string
  duracao: number
  ordem?: number
  descricao?: string
  aulas: Aula[] | number
}

export interface Aluno {
  id: string
  nome: string
  email: string
  progresso: number
  funcao?: string
  matriculadoEm?: string
  status?: 'concluido' | 'ativo' | 'inativo'
}

export type AlunosCurso = Aluno

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
  tipo: 'video' | 'texto' | 'quiz' | 'documento'
  duracao: number
  ordem?: number
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
