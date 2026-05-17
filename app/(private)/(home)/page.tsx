export default function LoginPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-heineken-green">Bem-vindo à Universidade Heineken</h1>
      <p className="mt-4 text-gray-600">A sua tela de login entrará aqui!</p>
      
      {/* Botão de teste usando a cor que configuramos no globals.css */}
      <button className="mt-6 bg-heineken-green text-white px-6 py-2 rounded-full hover:bg-heineken-dark transition-colors">
        Entrar na Plataforma
      </button>
    </div>
  );
}