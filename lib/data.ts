import { Course } from "@/types/course";
import { Post } from "@/types/post";

export const courses: Course[] = [
  {
    id: "1",
    title: "Formação em Liderança Industrial",
    category: "Gestão",
    instructor: "Equipe UHNK",
    duration: "12h",
    students: 320,
    rating: 4.8,
    price: "R$ 149,90",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Desenvolva competências de liderança, estratégia e gestão em ambientes corporativos.",
  },
  {
    id: "2",
    title: "Comunicação e Cultura de Marca",
    category: "Comunicação",
    instructor: "Time de Marketing",
    duration: "8h",
    students: 180,
    rating: 4.7,
    price: "R$ 99,90",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    description:
      "Aprenda a fortalecer posicionamento, comunicação interna e experiência da marca.",
  },
  {
    id: "3",
    title: "Excelência Operacional",
    category: "Operações",
    instructor: "Especialistas UHNK",
    duration: "10h",
    students: 250,
    rating: 4.9,
    price: "R$ 129,90",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    description:
      "Aplique melhorias contínuas e boas práticas para elevar a performance dos processos.",
  },
];

export const posts: Post[] = [
  {
    id: "1",
    author: "UHNK Company",
    role: "Empresa",
    avatar: "https://i.pravatar.cc/150?img=12",
    content:
      "Novo programa de formação liberado na plataforma. Confira as novidades e os conteúdos disponíveis.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    likes: 120,
    comments: 18,
    publishedAt: "há 2 horas",
  },
  {
    id: "2",
    author: "Equipe de Treinamento",
    role: "Educação Corporativa",
    avatar: "https://i.pravatar.cc/150?img=32",
    content:
      "Criamos uma nova trilha de desenvolvimento para fortalecer liderança, cultura e colaboração.",
    likes: 87,
    comments: 10,
    publishedAt: "há 5 horas",
  },
  {
    id: "3",
    author: "Comunicação Interna",
    role: "Institucional",
    avatar: "https://i.pravatar.cc/150?img=45",
    content:
      "As inscrições para o próximo ciclo de cursos estão abertas. Garanta sua participação nas novas turmas.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
    likes: 64,
    comments: 7,
    publishedAt: "ontem",
  },
];