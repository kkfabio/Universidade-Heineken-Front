export type Post = {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  publishedAt: string;
};