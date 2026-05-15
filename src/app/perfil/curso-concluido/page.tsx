'use client';

// Conversão fiel do arquivo "cursoconcluido" (HTML puro) do Luiz Fernando para componente React.
// O HTML/CSS originais foram preservados; apenas adaptados ao JSX (className em vez de class,
// estilos via styled-jsx no fim do componente). O sidebar/topbar do HTML original foi removido
// porque o LayoutClient unificado já provê navegação consistente em toda a aplicação.

export default function CursoConcluidoPage() {
  return (
    <div className="luiz-curso-concluido">
      <div className="main">

        {/* HEADER */}
        <div className="header">
          <h1>UHNK</h1>
          <div>⚙️ 👤</div>
        </div>

        {/* HERO */}
        <div className="hero">
          <div>
            <h2>Você é agora um Especialista Global!</h2>
            <p>Completou com êxito o curso de Maestria em Logística Sustentável.</p>
          </div>
          <div className="certificate-img"></div>
        </div>

        {/* CONTENT */}
        <div className="content">

          {/* LEFT */}
          <div className="left">
            <h3>Conteúdo Concluído</h3>

            <div className="module">
              <div>
                <strong>Módulo 01</strong><br />
                Introdução à Cadeia de Suprimentos
              </div>
              <span>12 aulas</span>
            </div>

            <div className="module">
              <div>
                <strong>Módulo 02</strong><br />
                Redução de Carbono em Transportes
              </div>
              <span>8 aulas</span>
            </div>

            <div className="module">
              <div>
                <strong>Módulo 03</strong><br />
                Ética e Compliance Ambiental
              </div>
              <span>15 aulas</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="right">

            <div className="card">
              <h3>Certificado de Conclusão</h3>
              <p><strong>João Silva Pereira</strong></p>
              <a href="#" className="btn">Acessar meu Certificado</a>
              <a href="#" className="btn btn-secondary">Explorar mais cursos</a>
            </div>

            <div className="next">
              <h4>Próximo Passo</h4>
              <p>Recomendamos o curso Inovação Tática em Distribuição</p>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        .luiz-curso-concluido {
          background: #f5f5f5;
          min-height: 100%;
          font-family: Arial, Helvetica, sans-serif;
        }
        .luiz-curso-concluido * {
          box-sizing: border-box;
        }
        .main {
          flex: 1;
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .header h1 {
          color: #145c2c;
        }
        .hero {
          background: #1c7a3c;
          color: white;
          padding: 30px;
          border-radius: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .hero h2 {
          font-size: 32px;
          margin-bottom: 10px;
        }
        .hero p {
          font-size: 14px;
          opacity: 0.9;
        }
        .certificate-img {
          width: 120px;
          height: 150px;
          background: #eee;
          border-radius: 10px;
        }
        .content {
          display: flex;
          gap: 20px;
        }
        .left {
          flex: 2;
        }
        .right {
          flex: 1;
        }
        .module {
          background: white;
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .module span {
          font-size: 12px;
          color: gray;
        }
        .card {
          background: white;
          padding: 20px;
          border-radius: 15px;
          text-align: center;
          margin-bottom: 20px;
        }
        .card h3 {
          margin-bottom: 10px;
        }
        .btn {
          background: #1c7a3c;
          color: white;
          padding: 12px;
          border-radius: 8px;
          margin-top: 10px;
          display: block;
          text-decoration: none;
        }
        .btn-secondary {
          background: #ddd;
          color: #333;
        }
        .next {
          background: #1c7a3c;
          color: white;
          padding: 20px;
          border-radius: 12px;
        }
        @media (max-width: 900px) {
          .content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
