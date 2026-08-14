import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { clinic } from "@/data/clinic";

const nav = [
  { to: "/", label: "Strona główna" },
  { to: "/poz", label: "Lekarze POZ" },
  { to: "/specjalisci", label: "Specjaliści" },
  { to: "/informacje", label: "Informacje" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-base">
          <span>{clinic.hours}</span>
          <a href={`tel:${clinic.phoneHref}`} className="flex items-center gap-2 font-semibold">
            <Phone className="size-5" aria-hidden="true" />
            Rejestracja: {clinic.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span
            className="flex size-12 items-center justify-center rounded-xl bg-primary-soft font-display text-2xl font-bold text-primary"
            aria-hidden="true"
          >
            A
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xl font-bold tracking-wide text-primary sm:text-2xl">
              ARSMEDICA CENTRUM
            </span>
            <span className="block text-sm text-muted-foreground">Przychodnia POZ w Kaliszu</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu główne">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-lg px-4 py-2.5 text-lg font-semibold text-foreground transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "bg-primary-soft text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn-base btn-outline lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
          Menu
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden" aria-label="Menu mobilne">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-lg font-semibold hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "bg-primary-soft text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
