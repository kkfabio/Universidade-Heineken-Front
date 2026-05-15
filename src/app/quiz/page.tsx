'use client';
import React, { useState } from 'react';
import { HelpCircle, CheckCircle, ArrowLeft, Send, XCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Qual o principal objetivo do sistema de integração UHNK?",
      options: ["Apenas registrar o ponto", "Guiar o colaborador em sua jornada de aprendizado", "Substituir o treinamento presencial totalmente", "Monitorar o uso do computador"],
      correct: 1
    },
    {
      q: "Qual é a cor principal da identidade visual da Heineken utilizada no UHNK?",
      options: ["Azul Marinho", "Vermelho vibrante", "Verde característico", "Amarelo ouro"],
      correct: 2
    },
    {
      q: "O que significa a sigla EPI dentro do módulo de Segurança no Trabalho?",
      options: ["Equipamento de Proteção Individual", "Empresa de Proteção Interna", "Equipamento de Prevenção e Impacto", "Exame de Proteção Inicial"],
      correct: 0
    },
    {
      q: "Qual o foco do módulo 'Qualidade Heineken'?",
      options: ["Apenas a limpeza das garrafas", "Padrões internacionais de fabricação e sabor", "Aumentar apenas a velocidade de produção", "Reduzir o número de funcionários"],
      correct: 1
    },
    {
      q: "Como o colaborador deve agir em caso de dúvidas durante a integração?",
      options: ["Ignorar e continuar", "Pesquisar apenas na internet", "Consultar os módulos no UHNK e seu gestor", "Esperar o fim do contrato"],
      correct: 2
    }
  ];

  const handleConfirm = () => {
    if (selected === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
      setIsSubmitted(false);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-[#004d2c] text-white flex flex-col items-center justify-center p-6">
        <div className="bg-white p-8 rounded-[2.5rem] text-gray-800 shadow-2xl text-center max-w-md w-full">
          <h2 className="text-3xl font-black mb-4 text-[#007b3e]">Fim do Quiz!</h2>
          <p className="text-xl mb-6 font-medium">Você acertou <span className="text-[#007b3e] font-black">{score}</span> de {questions.length} perguntas.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="w-full bg-[#007b3e] text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-[#004d2c] transition-all"
          >
            RECOMEÇAR <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#004d2c] text-white font-sans p-6">
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold">
            <ArrowLeft className="w-5 h-5" /> VOLTAR
          </Link>
          <div className="bg-white/10 px-4 py-2 rounded-full border border-[#007b3e]">
            Progresso: <span className="font-bold text-white">{currentQuestion + 1}/{questions.length}</span>
          </div>
        </header>

        <main className="bg-white rounded-[2.5rem] p-8 text-gray-800 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#007b3e]/10 p-2 rounded-lg text-[#007b3e]">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold">{questions[currentQuestion].q}</h2>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((opt, i) => {
              const isCorrect = i === questions[currentQuestion].correct;
              const isSelected = selected === i;
              
              let buttonStyle = "border-gray-100 hover:border-[#007b3e]/30";
              if (isSubmitted) {
                if (isCorrect) buttonStyle = "border-green-500 bg-green-50 text-green-700 font-bold";
                else if (isSelected) buttonStyle = "border-red-500 bg-red-50 text-red-700 font-bold";
              } else if (isSelected) {
                buttonStyle = "border-[#007b3e] bg-[#007b3e]/5 text-[#007b3e] font-bold";
              }

              return (
                <button
                  key={i}
                  disabled={isSubmitted}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between ${buttonStyle}`}
                >
                  {opt}
                  {isSubmitted && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                </button>
              );
            })}
          </div>

          {isSubmitted && !questions[currentQuestion].options[selected!] && (
             <p className="mt-4 text-red-600 font-bold">Resposta errada! A correta está destacada em verde.</p>
          )}

          {!isSubmitted ? (
            <button 
              disabled={selected === null}
              onClick={handleConfirm}
              className={`mt-8 w-full py-4 rounded-xl font-black flex items-center justify-center gap-2 transition-all ${
                selected !== null ? 'bg-[#007b3e] text-white hover:bg-[#004d2c]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              CONFIRMAR RESPOSTA <Send className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="mt-8 w-full py-4 bg-[#007b3e] text-white rounded-xl font-black flex items-center justify-center gap-2 hover:bg-[#004d2c] transition-all"
            >
              {currentQuestion + 1 === questions.length ? "VER RESULTADO" : "PRÓXIMA PERGUNTA"}
            </button>
          )}
        </main>
      </div>
    </div>
  );
}