import { redirect } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default function CourseDetailPage({ params }: Props) {
  redirect(`/admin/cursos/${params.id}/informacao`);
}
