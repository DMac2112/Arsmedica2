import { Link } from "@tanstack/react-router";
import { clinic } from "@/data/clinic";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Przejdź do treści
      </a>
      <div className="header-inner">
        <Link to="/" className="clinic-brand">
          <span className="brand-symbol" aria-hidden="true">
            A
          </span>
          <span>
            <strong>{clinic.name}</strong>
            <span>Przychodnia POZ · Kalisz, Babina 3</span>
          </span>
        </Link>
        <span className="preview-label">Podgląd strony</span>
      </div>
      <nav className="task-nav" aria-label="Najważniejsze sprawy pacjenta">
        <Link to="/" hash="godziny">
          Godziny
        </Link>
        <Link to="/" hash="lekarze">
          Lekarze
        </Link>
        <Link to="/" hash="laboratorium">
          Laboratorium
        </Link>
        <Link to="/" hash="szczepienia">
          Szczepienia
        </Link>
        <Link to="/" hash="informacje">
          Informacje i kontakt
        </Link>
      </nav>
    </header>
  );
}
