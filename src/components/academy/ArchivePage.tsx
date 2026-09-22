import { Link } from "@tanstack/react-router";

interface ArchiveEntry {
  title: string;
  description: string;
  classification: string;
}

interface ArchivePageProps {
  eyebrow: string;
  title: string;
  introduction: string;
  entries: ArchiveEntry[];
  restricted?: boolean;
}

export function ArchivePage({ eyebrow, title, introduction, entries, restricted }: ArchivePageProps) {
  return (
    <div className="academy-page">
      <header className="archive-page-header">
        <div className="academy-container py-14 md:py-20">
          <p className="archive-eyebrow">{eyebrow}</p>
          <div className="ornament-divider" aria-hidden="true"><span>✦</span></div>
          <h1 className="archive-title">{title}</h1>
          <p className="archive-introduction">{introduction}</p>
        </div>
      </header>
      <section className="academy-container py-10 md:py-14">
        <div className="section-heading">
          <h2>Registros catalogados</h2>
          <span>{String(entries.length).padStart(2, "0")} documentos</span>
        </div>
        <div className="archive-list">
          {entries.map((entry, index) => (
            <article className="archive-row group" key={entry.title}>
              <span className="archive-number">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <p className="archive-classification">{entry.classification}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
              <span className="archive-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        {restricted && (
          <div className="restricted-notice">
            <span aria-hidden="true">✧</span>
            <p>Registros adicionais exigem a chancela do Conselho Arcano.</p>
          </div>
        )}
        <Link to="/" className="return-link">← Retornar ao arquivo central</Link>
      </section>
    </div>
  );
}
