import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { fallback, zodValidator } from "@tanstack/zod-adapter";
import { BookOpen, Search, Sparkles, X } from "lucide-react";
import { z } from "zod";

import { BookCover } from "@/components/library/BookCover";
import { BookStatus } from "@/components/library/BookStatus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { arcaneBooks, externalSearchEntries, libraryCategories } from "@/data/library";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
  categoria: fallback(z.string(), "").default(""),
});

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export const Route = createFileRoute("/biblioteca/")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({ meta: [
    { title: "Biblioteca Arcana — Academia Arcana de Asteria" },
    { name: "description", content: "Pesquise livros, grimórios, documentos e referências do arquivo arcano de Asteria." },
    { property: "og:title", content: "Biblioteca Arcana de Asteria" },
    { property: "og:description", content: "Catálogo pesquisável de livros e documentos da Academia." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: LibraryPage,
});

function LibraryPage() {
  const { q, categoria } = Route.useSearch();
  const navigate = useNavigate({ from: "/biblioteca" });
  const query = normalize(q.trim());
  const safeCategory = libraryCategories.includes(categoria as (typeof libraryCategories)[number]) ? categoria : "";
  const books = arcaneBooks.filter((book) => {
    const haystack = normalize([book.title, book.author, book.category, book.description, book.accessLevel, ...book.keywords, ...book.related.flatMap((item) => [item.label, item.description, ...item.keywords])].join(" "));
    return (!safeCategory || book.category === safeCategory) && (!query || haystack.includes(query));
  });
  const relatedResults = query ? externalSearchEntries.filter((entry) => normalize([entry.title, entry.description, entry.kind, ...entry.keywords].join(" ")).includes(query)) : [];
  const totalResults = books.length + relatedResults.length;
  const updateSearch = (next: Partial<{ q: string; categoria: string }>) => navigate({ search: (previous) => ({ ...previous, ...next }), replace: true });

  return (
    <div className="academy-page library-page">
      <header className="archive-page-header library-header">
        <div className="academy-container py-14 md:py-20">
          <p className="archive-eyebrow">Ala Norte · Catálogo Geral</p>
          <div className="ornament-divider" aria-hidden="true"><span>✦</span></div>
          <h1 className="archive-title">Biblioteca Arcana</h1>
          <p className="archive-introduction">“Conhecimento é poder. Alguns conhecimentos, entretanto, possuem um preço.”</p>
          <div className="library-search-wrap">
            <Search className="size-5" aria-hidden="true" />
            <Input value={q} onChange={(event) => updateSearch({ q: event.target.value })} placeholder="Pesquisar livros, documentos, personagens, criaturas e artefatos…" aria-label="Pesquisar na Biblioteca Arcana" />
            {q && <Button variant="ghost" size="icon" onClick={() => updateSearch({ q: "" })} aria-label="Limpar pesquisa"><X /></Button>}
          </div>
        </div>
      </header>

      <section className="academy-container py-8 md:py-12">
        <div className="library-toolbar">
          <div className="library-filters" aria-label="Filtrar por categoria">
            <Button variant={safeCategory ? "outline" : "default"} size="sm" onClick={() => updateSearch({ categoria: "" })}>Todos</Button>
            {libraryCategories.map((category) => <Button key={category} variant={safeCategory === category ? "default" : "outline"} size="sm" onClick={() => updateSearch({ categoria: safeCategory === category ? "" : category })}>{category}</Button>)}
          </div>
          <p className="result-count"><BookOpen aria-hidden="true" /> {String(totalResults).padStart(2, "0")} {totalResults === 1 ? "registro encontrado" : "registros encontrados"}</p>
        </div>

        {relatedResults.length > 0 && (
          <section className="global-results" aria-labelledby="related-heading">
            <div className="section-heading"><h2 id="related-heading">Referências em outros arquivos</h2><span>Pesquisa geral</span></div>
            <div className="global-result-grid">
              {relatedResults.map((result) => <Link key={result.id} to={result.to} className="global-result"><span>{result.kind}</span><h3>{result.title}</h3><p>{result.description}</p><b>Consultar registro →</b></Link>)}
            </div>
          </section>
        )}

        {books.length > 0 ? (
          <div className="book-grid">
            {books.map((book) => (
              <Link key={book.slug} to="/biblioteca/$slug" params={{ slug: book.slug }} className="book-card group">
                <BookCover book={book} />
                <div className="book-card-content">
                  <div className="book-card-topline"><span>{book.category}</span><BookStatus status={book.status} /></div>
                  <h2>{book.title}</h2><p className="book-author">por {book.author}</p><p className="book-description">{book.description}</p>
                  <div className="book-card-footer"><span>Acesso: {book.accessLevel}</span><b>{book.status === "RESTRITO" ? "Ver lacre" : "Abrir tomo"} →</b></div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-library"><Sparkles aria-hidden="true" /><h2>Nenhum registro encontrado</h2><p>As estantes não responderam a esta busca. Tente outro termo ou remova o filtro selecionado.</p><Button onClick={() => navigate({ search: { q: "", categoria: "" }, replace: true })}>Limpar pesquisa</Button></div>
        )}
      </section>
    </div>
  );
}
