import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  ["Academia", "/"],
  ["Biblioteca", "/biblioteca"],
  ["Personagens", "/personagens"],
  ["Casas", "/casas"],
  ["Feitiços", "/feiticos"],
  ["Criaturas", "/criaturas"],
  ["Artefatos", "/artefatos"],
  ["Mapa", "/mapa"],
  ["Calendário", "/calendario"],
  ["Arquivos Secretos", "/arquivos-secretos"],
] as const;

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return navigation.map(([label, to], index) => {
    const active = pathname === to;
    const link = (
      <Link
        key={to}
        to={to}
        className={mobile ? "mobile-nav-link" : "academy-nav-link"}
        data-active={active || undefined}
      >
        {mobile && <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>}
        {label}
      </Link>
    );
    return mobile ? <SheetClose key={to} asChild>{link}</SheetClose> : link;
  });
}

export function AcademyShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="academy-topbar">
        <div className="academy-container flex h-16 items-center justify-between gap-6">
          <Link to="/" className="academy-wordmark" aria-label="Academia Arcana de Asteria">
            <Sparkles aria-hidden="true" className="size-4 text-primary" />
            <span>Academia Arcana de <strong>Asteria</strong></span>
          </Link>
          <nav className="hidden items-center gap-4 xl:flex" aria-label="Navegação principal">
            <NavLinks />
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="xl:hidden" aria-label="Abrir menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="academy-drawer">
              <SheetHeader className="border-b border-border pb-6 text-left">
                <SheetTitle className="font-display text-2xl font-medium">Índice da Academia</SheetTitle>
                <SheetDescription>Arquivo Digital de Asteria</SheetDescription>
              </SheetHeader>
              <nav className="mt-5 flex flex-col" aria-label="Navegação móvel">
                <NavLinks mobile />
              </nav>
              <div className="mt-auto border-t border-border pt-5 text-xs uppercase text-muted-foreground">
                Anno Arcano MCCXXIV · Edição Oficial
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="page-transition">{children}</main>
    </div>
  );
}
