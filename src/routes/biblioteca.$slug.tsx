import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BookMarked, CalendarDays, KeyRound, LockKeyhole, ScrollText, UserRound } from "lucide-react";

import { BookCover } from "@/components/library/BookCover";
import { BookStatus } from "@/components/library/BookStatus";
import { arcaneBooks, getBookBySlug } from "@/data/library";

export const Route = createFileRoute("/biblioteca/$slug")({
  loader: ({ params }) => {
    const book = getBookBySlug(params.slug);
    if (!book) throw notFound();
    return book;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Livro não encontrado";
    const description = loaderData?.description ?? "Este registro não consta no catálogo da Biblioteca Arcana.";
    return { meta: [
      { title: `${title} — Biblioteca Arcana` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Biblioteca Arcana` },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ] };
  },
  notFoundComponent: () => <div className="academy-container empty-library my-16"><h1>Livro não encontrado</h1><p>Este registro não consta nas estantes catalogadas.</p><Link to="/biblioteca" className="return-link">← Voltar à Biblioteca Arcana</Link></div>,
  errorComponent: ({ error }) => <div className="academy-container empty-library my-16" role="alert"><h1>O tomo não pôde ser aberto</h1><p>{error.message}</p><Link to="/biblioteca" className="return-link">← Voltar à Biblioteca Arcana</Link></div>,
  component: BookPage,
});

function BookPage() {
  const book = Route.useLoaderData();
  const isRestricted = book.status === "RESTRITO";

  return (
    <article className="academy-page book-detail-page">
      <header className="book-detail-header">
        <div className="academy-container book-detail-hero">
          <BookCover book={book} large />
          <div>
            <p className="archive-eyebrow text-left">{book.volume} · {book.category}</p>
            <BookStatus status={book.status} />
            <h1>{book.title}</h1>
            <p className="book-detail-description">{book.description}</p>
            <dl className="book-metadata">
              <div><UserRound /><dt>Autor</dt><dd>{book.author}</dd></div>
              <div><CalendarDays /><dt>Data</dt><dd>{book.date}</dd></div>
              <div><BookMarked /><dt>Categoria</dt><dd>{book.category}</dd></div>
              <div><ScrollText /><dt>Nível de acesso</dt><dd>{book.accessLevel}</dd></div>
            </dl>
          </div>
        </div>
      </header>

      <div className="academy-container book-detail-layout">
        <main className="book-reading-area">
          {isRestricted ? (
            <section className="locked-document">
              <LockKeyhole aria-hidden="true" />
              <p>Documento selado</p>
              <h2>ACESSO RESTRITO</h2>
              <div className="ornament-divider" aria-hidden="true"><span>✦</span></div>
              <p>O conteúdo deste documento não pode ser revelado sem autorização válida do Conselho Arcano.</p>
              <div className="unlock-panel">
                <h3><KeyRound /> Formas previstas de desbloqueio</h3>
                <ul>{book.unlockMethods?.map((method) => <li key={method}>{method}</li>)}</ul>
              </div>
            </section>
          ) : (
            <section>
              <div className="section-heading"><h2>Conteúdo do tomo</h2><span>Transcrição autenticada</span></div>
              <div className="book-prose">{book.content.map((paragraph, index) => <p key={`${book.slug}-${index}`}>{paragraph}</p>)}</div>
            </section>
          )}
        </main>

        <aside className="book-sidebar">
          {!isRestricted && <section><h2>Notas do arquivo</h2><ol>{book.notes.map((note, index) => <li key={note}><span>{String(index + 1).padStart(2, "0")}</span>{note}</li>)}</ol></section>}
          <section><h2>Documentos relacionados</h2><div className="related-documents">{book.related.map((item) => <Link key={`${item.to}-${item.label}`} to={item.to}><span>{item.kind}</span><h3>{item.label}</h3><p>{item.description}</p></Link>)}</div></section>
        </aside>
      </div>

      <nav className="academy-container book-bottom-nav">
        <Link to="/biblioteca" search={{ q: "", categoria: "" }}>← Voltar ao catálogo</Link>
        {arcaneBooks.filter((entry) => entry.slug !== book.slug).slice(0, 2).map((entry) => <Link key={entry.slug} to="/biblioteca/$slug" params={{ slug: entry.slug }}>{entry.title} ↗</Link>)}
      </nav>
    </article>
  );
}
