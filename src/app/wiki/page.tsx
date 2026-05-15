'use client';

// Conversão fiel do arquivo "wikipagina" (HTML puro) do Luiz Fernando para componente React.
// O HTML/CSS originais foram preservados; o sidebar do HTML original foi removido porque
// o LayoutClient unificado já provê navegação consistente em toda a aplicação.

export default function WikiPage() {
  return (
    <div className="luiz-wiki">
      <div className="main">

        {/* HEADER */}
        <div className="header">
          <small>KNOWLEDGE REPOSITORY</small>
          <h1>Wiki — Conheça a Heineken</h1>
          <p>Explore deeper into our legacy, processes and values.</p>
        </div>

        {/* GRID */}
        <div className="grid">

          {/* LEFT */}
          <div>
            <div className="card history">
              <div className="history-img"></div>
              <div className="history-content">
                <span className="tag">LEGADO</span>
                <span className="badge">DESTAQUE</span>
                <h2>História</h2>
                <p>Desde 1864, de uma pequena cervejaria em Amsterdã para o mundo.</p>
                <span className="link">Ler artigo completo →</span>
              </div>
            </div>

            <div className="card sustain" style={{ marginTop: 20 }}>
              <div className="sustain-img"></div>
              <span className="tag">BREWING A BETTER WORLD</span>
              <h3>Sustentabilidade</h3>
              <p>Compromisso com meio ambiente e impacto social.</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="card culture">
              <h3>Cultura</h3>
              <p>Entenda os pilares que sustentam nosso ambiente.</p>
            </div>

            <div className="card process" style={{ marginTop: 20 }}>
              <div className="process-left">
                <span className="tag">EXCELÊNCIA TÉCNICA</span>
                <h3>Processo de Fabricação</h3>

                <div className="steps">
                  <div className="step">
                    <span className="number">01</span>
                    <div>
                      <strong>Puro Malte</strong>
                      <p>A base da qualidade superior.</p>
                    </div>
                  </div>

                  <div className="step">
                    <span className="number">02</span>
                    <div>
                      <strong>Fermentação</strong>
                      <p>Segredo do sabor equilibrado.</p>
                    </div>
                  </div>
                </div>

                <button className="btn">Ver infográfico</button>
              </div>
              <div className="process-right"></div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="footer">
          <div className="quote">&quot;Qualidade não é um ato, é um hábito.&quot;</div>
          <button className="btn btn-primary">Contribuir com a Wiki</button>
          <button className="btn btn-outline">Solicitar Tópico</button>
        </div>

      </div>

      <style jsx>{`
        .luiz-wiki {
          --green-dark: #0f3d1f;
          --green: #166534;
          --green-light: #22c55e;
          --bg: #f6f8f7;
          --card: #ffffff;
          --text: #1f2937;
          --muted: #6b7280;
          background: var(--bg);
          min-height: 100%;
          font-family: "Poppins", sans-serif;
        }
        .luiz-wiki * {
          box-sizing: border-box;
        }
        .main {
          flex: 1;
          padding: 40px;
        }
        .header small {
          color: var(--green);
          letter-spacing: 2px;
          font-weight: 600;
        }
        .header h1 {
          font-size: 42px;
          margin: 10px 0;
        }
        .header p {
          color: var(--muted);
          max-width: 600px;
        }
        .grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 25px;
          margin-top: 30px;
        }
        .card {
          background: var(--card);
          border-radius: 20px;
          padding: 22px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }
        .history {
          display: flex;
          padding: 0;
          overflow: hidden;
        }
        .history-img {
          width: 45%;
          background: linear-gradient(135deg, #0f3d1f, #166534);
        }
        .history-content {
          padding: 25px;
        }
        .tag {
          font-size: 12px;
          color: var(--green);
          font-weight: 600;
        }
        .badge {
          background: #e6f9ec;
          color: var(--green);
          padding: 5px 10px;
          border-radius: 999px;
          font-size: 11px;
          margin-left: 10px;
        }
        .link {
          display: inline-block;
          margin-top: 10px;
          color: var(--green);
          font-weight: 500;
        }
        .culture {
          background: linear-gradient(135deg, #166534, #0f3d1f);
          color: white;
        }
        .sustain-img {
          width: 100%;
          height: 200px;
          border-radius: 12px;
          background: linear-gradient(135deg, #22c55e, #166534);
        }
        .sustain h3 {
          margin-top: 10px;
        }
        .process {
          display: flex;
          padding: 0;
          overflow: hidden;
          border-radius: 20px;
        }
        .process-left {
          flex: 1;
          padding: 25px;
        }
        .process-right {
          width: 40%;
          background: #eef2f1;
          border-left: 1px solid #e5e7eb;
        }
        .steps {
          margin: 20px 0;
        }
        .step {
          display: flex;
          gap: 12px;
          margin-bottom: 18px;
        }
        .number {
          color: var(--green);
          font-weight: 600;
        }
        .step strong {
          display: block;
        }
        .step p {
          font-size: 12px;
          color: var(--muted);
        }
        .btn {
          padding: 10px 16px;
          border-radius: 10px;
          border: 1px solid var(--green);
          background: transparent;
          color: var(--green);
          cursor: pointer;
          font-weight: 500;
        }
        .btn-primary {
          background: var(--green);
          color: white;
          border: none;
        }
        .btn-outline {
          background: transparent;
          color: var(--green);
        }
        .footer {
          text-align: center;
          margin-top: 50px;
        }
        .quote {
          font-style: italic;
          color: var(--muted);
          margin-bottom: 15px;
        }
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .history {
            flex-direction: column;
          }
          .history-img {
            width: 100%;
            height: 150px;
          }
          .process {
            flex-direction: column;
          }
          .process-right {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
