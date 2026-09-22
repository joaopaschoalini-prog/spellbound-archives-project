import { LockKeyhole } from "lucide-react";
import type { ArcaneBook } from "@/data/library";

export function BookCover({ book, large = false }: { book: ArcaneBook; large?: boolean }) {
  return (
    <div className="book-cover" data-large={large || undefined} data-restricted={book.status === "RESTRITO" || undefined} aria-label={`Capa de ${book.title}`}>
      <span className="book-cover-volume">{book.volume}</span>
      <span className="book-cover-sigil" aria-hidden="true">{book.status === "RESTRITO" ? <LockKeyhole /> : book.sigil}</span>
      <strong>{book.title}</strong>
      <span className="book-cover-author">{book.author}</span>
    </div>
  );
}
