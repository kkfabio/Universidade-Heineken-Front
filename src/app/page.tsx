import { redirect } from "next/navigation";

export default function Home() {
  // Redireciona direto pro login; após logar segue para /dashboard
  redirect("/login");
}
