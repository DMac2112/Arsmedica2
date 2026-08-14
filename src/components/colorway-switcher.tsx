import { useEffect, useRef, useState } from "react";
import { Check, Palette, X } from "lucide-react";

/**
 * Light-theme colour picker. Flips `data-colorway` on <html>; every palette is
 * defined as CSS custom-property overrides in styles.css. The `swatch` here is
 * each theme's primary colour and is kept in sync with those blocks.
 */
type Colorway = { id: string; name: string; swatch: string };

const COLORWAYS: Colorway[] = [
  { id: "czerwien", name: "Czerwień", swatch: "#B03A34" },
  { id: "zielen", name: "Zieleń", swatch: "#276749" },
  { id: "blekit", name: "Błękit", swatch: "#0F6FB4" },
  { id: "granat", name: "Granat", swatch: "#1E3A5F" },
  { id: "morski", name: "Morski", swatch: "#0F757B" },
  { id: "szmaragd", name: "Szmaragd", swatch: "#0F7A53" },
  { id: "bordo", name: "Bordo", swatch: "#7C2D3A" },
  { id: "grafit", name: "Grafit", swatch: "#3A424B" },
  { id: "stal", name: "Stal", swatch: "#43607A" },
  { id: "bursztyn", name: "Bursztyn", swatch: "#966516" },
];

const STORAGE_KEY = "arsmedica.colorway";
const DEFAULT_ID = "czerwien";
const DEFAULT_CW = COLORWAYS[0]!;

export function ColorwaySwitcher() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(DEFAULT_ID);
  const rootRef = useRef<HTMLDivElement>(null);

  // Sync UI with whatever the pre-paint script in <head> already applied.
  useEffect(() => {
    setActive(document.documentElement.getAttribute("data-colorway") ?? DEFAULT_ID);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function choose(id: string) {
    document.documentElement.setAttribute("data-colorway", id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* localStorage unavailable — theme still applies for this session */
    }
    setActive(id);
  }

  const activeCw = COLORWAYS.find((c) => c.id === active) ?? DEFAULT_CW;

  return (
    <div ref={rootRef} className="fixed bottom-4 right-4 z-[60] print:hidden">
      {open && (
        <div
          role="dialog"
          aria-label="Wybór koloru motywu"
          className="surface-card mb-3 w-64 p-4"
        >
          <div className="mb-3 flex items-center justify-between">
            <span className="font-display text-lg font-bold">Kolor motywu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Zamknij"
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>
          <ul className="grid grid-cols-2 gap-2">
            {COLORWAYS.map((c) => {
              const isActive = c.id === active;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => choose(c.id)}
                    aria-pressed={isActive}
                    className={`flex w-full items-center gap-2 rounded-lg border px-2.5 py-2 text-left text-base transition-colors ${
                      isActive
                        ? "border-primary bg-primary-soft text-primary"
                        : "border-border hover:bg-secondary"
                    }`}
                  >
                    <span
                      className="size-5 shrink-0 rounded-full border border-black/10"
                      style={{ background: c.swatch }}
                      aria-hidden="true"
                    />
                    <span className="truncate">{c.name}</span>
                    {isActive && <Check className="ml-auto size-4 shrink-0" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Zmień kolor motywu"
        className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-base font-semibold text-foreground shadow-lift transition-colors hover:bg-secondary"
      >
        <Palette className="size-5 text-primary" aria-hidden="true" />
        <span className="hidden sm:inline">Kolor</span>
        <span
          className="size-4 rounded-full border border-black/10"
          style={{ background: activeCw.swatch }}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
