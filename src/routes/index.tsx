import { createFileRoute, Link } from "@tanstack/react-router";

const sectors = [
  { index: "I", title: "Biblioteca", description: "Tomos, grimórios e registros catalogados.", to: "/biblioteca", action: "Acessar" },
  { index: "II", title: "Enciclopédia", description: "Personagens, criaturas e saber arcano em ordem sistemática.", to: "/personagens", action: "Consultar" },
  { index: "III", title: "Arquivos da Academia", description: "Documentos institucionais, casas e memórias históricas.", to: "/calendario", action: "Examinar" },
  { index: "IV · Restrito", title: "Arquivos Restritos", description: "Conhecimento selado pelo Conselho Arcano.", to: "/arquivos-secretos", action: "Invocar", restricted: true },
] as const;

const discoveries = [
  ["I", "Fragmentos do Códice de Vael foram decifrados", "Os símbolos revelam um rito de restauração esquecido há três eras.", "Pergaminho LXXXI · Salão das Estantes"],
  ["II", "Selo de bronze encontrado na Cripta Inferior", "A insígnia pertence a um guardião cujos registros foram deliberadamente apagados.", "Registro 44-A · Cripta Inferior"],
  ["III", "Novo mapa das Ruínas de Asteria é revelado", "Rotas antigas, seladas e vigiladas, voltam a ser cartografadas com precisão.", "Tomo XII · Ala do Mapa"],
];

const notices = [
  ["12 de Outubro", "Cerimônia de Inverno no salão principal", "Toda a comunidade é convocada para a renovação dos votos."],
  ["03 de Outubro", "Revisão do calendário arcano concluída", "Novas datas entram em vigor a partir da primeira lua."],
  ["24 de Setembro", "Novos guardiões nomeados", "O conselho selou a investidura após rigorosas provas."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Academia Arcana de Asteria — Arquivo Digital" },
      { name: "description", content: "Acesse os arquivos oficiais, a biblioteca e os registros mágicos da Academia Arcana de Asteria." },
      { property: "og:title", content: "Academia Arcana de Asteria" },
      { property: "og:description", content: "Arquivo Digital oficial da Academia Arcana de Asteria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="academy-page">
      <header className="academy-masthead">
        <div className="academy-container py-12 text-center md:py-16">
          <p className="archive-eyebrow animate-reveal">Arquivo Digital da Academia</p>
          <div className="ornament-divider animate-reveal delay-1" aria-hidden="true"><span>✦</span></div>
          <h1 className="masthead-title animate-reveal delay-2">Academia Arcana<br />de Asteria</h1>
          <p className="masthead-quote animate-reveal delay-3">“No silêncio das estantes, o saber permanece guardado à espera de mãos dignas de lê-lo.”</p>
          <p className="edition-line animate-reveal delay-4">Anno Arcano MCCXXIV · Edição Oficial N.º VII</p>
        </div>
      </header>

      <section className="academy-container py-8" aria-label="Áreas principais">
        <div className="sector-grid">
          {sectors.map((sector, index) => (
            <Link to={sector.to} key={sector.title} className="sector-card group animate-reveal" style={{ animationDelay: `${360 + index * 60}ms` }} data-restricted={sector.restricted || undefined}>
              <p className="sector-index">Setor {sector.index}</p>
              <h2>{sector.title}</h2>
              <p>{sector.description}</p>
              <span>{sector.action} <span className="inline-block transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="academy-container editorial-grid py-10">
        <div>
          <div className="section-heading"><h2>Últimas descobertas</h2><span>Registros abertos</span></div>
          <ul className="discovery-list">
            {discoveries.map(([number, title, description, meta]) => (
              <li key={title} className="document-hover">
                <span>{number}</span>
                <div><h3>{title}</h3><p>{description}</p><small>{meta}</small></div>
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <div className="section-heading"><h2>Comunicados da Academia</h2><span>Da direção</span></div>
          <div className="notice-list">
            {notices.map(([date, title, description]) => (
              <article key={title} className="document-hover"><time>{date}</time><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </aside>
      </section>

      <footer className="academy-footer">
        <div className="academy-container footer-grid">
          <div><h2>Academia Arcana de Asteria</h2><p>Arquivo Digital da Academia · Estabelecida Anno Arcano MCCXXIV.</p></div>
          <div><h3>Estudos</h3><Link to="/personagens">Personagens</Link><Link to="/casas">Casas</Link><Link to="/feiticos">Feitiços</Link><Link to="/criaturas">Criaturas</Link></div>
          <div><h3>Arquivo</h3><Link to="/biblioteca">Biblioteca</Link><Link to="/mapa">Mapa</Link><Link to="/calendario">Calendário</Link><Link to="/artefatos">Artefatos</Link></div>
          <div><h3>Selos</h3><Link to="/arquivos-secretos">Arquivos Secretos</Link><span>Conselho Arcano</span><span>Direção</span></div>
        </div>
        <div className="footer-seal"><span>© Anno Arcano MCCXXIV</span><b>✦</b><span>Arquivo Digital da Academia</span></div>
      </footer>
    </div>
  );
}
