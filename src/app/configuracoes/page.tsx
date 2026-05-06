import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Label } from "../../components/ui/label"
import { Switch } from "../../components/ui/switch"
import { Bell, Lock, Globe, HelpCircle, User, ShieldCheck } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-6 md:p-12 space-y-10 bg-[#F9FAFB] min-h-screen">
      
      {/* Header Estilizado */}
      <header className="space-y-2">
        <h1 className="text-4xl font-serif font-bold text-university-900 tracking-tight">
          Configurações
        </h1>
        <p className="text-gray-500 text-lg">
          Gerencie sua experiência educacional e preferências de segurança na Universidade UHNK.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        
        {/* COLUNA ESQUERDA (Notificações e Segurança) */}
        <div className="xl:col-span-2 space-y-8">
          
          {/* Card de Notificações */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex flex-row items-center gap-4 border-b pb-4">
              <Bell className="w-6 h-6 text-university-900" />
              <CardTitle className="font-serif text-2xl">Notificações</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">Notificações por e-mail</p>
                  <p className="text-sm text-gray-500">Receba atualizações sobre suas aulas e prazos.</p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-university-900" />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-semibold text-gray-800">Alertas de segurança</p>
                  <p className="text-sm text-gray-500">Seja avisado sobre acessos suspeitos na sua conta.</p>
                </div>
                <Switch className="data-[state=checked]:bg-university-900" />
              </div>
            </CardContent>
          </Card>

          {/* Grid de Senha e Privacidade */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <Lock className="w-5 h-5 text-university-900" />
                <CardTitle className="font-serif text-xl">Alterar Senha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input type="password" placeholder="Senha Atual" className="bg-gray-50 border-gray-200" />
                <Input type="password" placeholder="Nova Senha" className="bg-gray-50 border-gray-200" />
                <Button className="w-full bg-university-900 hover:bg-university-800 transition-colors">
                  Atualizar Senha
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-university-900" />
                <CardTitle className="font-serif text-xl">Privacidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center py-6">
                <p className="text-sm text-gray-500 mb-4">Sua conta está protegida por criptografia de ponta a ponta.</p>
                <Button variant="outline" className="w-full border-university-900 text-university-900 hover:bg-university-50">
                  Ver Relatório
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* COLUNA DIREITA (Perfil e Ajuda) */}
        <div className="space-y-8">
          {/* Card de Perfil Verde (Destaque do Figma) */}
          <Card className="bg-university-900 text-white border-none shadow-xl overflow-hidden">
            <CardContent className="p-10 flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white/10">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-university-900 rounded-full" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold">Lucas Silveira</h3>
                <p className="text-gray-300 font-light">Estudante de Engenharia</p>
              </div>
              <Button variant="secondary" className="w-full font-bold py-6 hover:bg-gray-100">
                Editar Perfil
              </Button>
            </CardContent>
          </Card>

          {/* Card de Ajuda (Dashed) */}
          <Card className="border-2 border-dashed border-gray-200 bg-transparent">
            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
              <HelpCircle className="w-12 h-12 text-gray-300" />
              <h4 className="font-bold text-gray-700">Precisa de ajuda?</h4>
              <p className="text-sm text-gray-500">Confira nossa central de ajuda para dúvidas comuns.</p>
              <Button variant="link" className="text-university-900 underline font-semibold">
                Acessar FAQ
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}