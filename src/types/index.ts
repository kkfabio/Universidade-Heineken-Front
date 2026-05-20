export interface NovoCursoData {
  titulo: string;
  categoria: string;
  cargaHoraria: number;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  descricao: string;
  ativo: boolean;
}

export interface Aula {
  id: string;
  titulo: string;
  tipo: 'video' | 'documento';
  duracao?: number;
  url?: string;
  ordem: number;
}

export interface Prova {
  id: string;
  titulo: string;
  descricao?: string;
  pontuacaoMinima: number;
  qntdQuestoes: number;
}

export interface Modulo {
  id: string;
  titulo: string;
  descricao?: string;
  duracao: number;
  aulas: Aula[];
  prova?: Prova;
  ordem: number;
}

export interface AlunosCurso {
  id: string;
  nome: string;
  email: string;
  funcao: string;
  progresso: number;
  matriculadoEm: string;
  status: 'ativo' | 'concluido' | 'inativo';
}

export interface CursoCompleto {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
  cargaHoraria: number;
  status: 'active' | 'draft';
  modulos: Modulo[];
  provaFinal?: Prova;
  alunos: AlunosCurso[];
  bannerUrl?: string;
}
