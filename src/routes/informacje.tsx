import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/data/clinic";
import notices from "@/data/source-notices.json";

export const Route = createFileRoute("/informacje")({
  component: InfoPage,
  head: () => ({ meta: [{ title: "Informacje i dokumenty dla pacjenta — ARSMEDICA Kalisz" }] }),
});

// Source wording is retained; only Markdown paragraph/heading markers are removed.
function SourceNotice({ text }: { text: string }) {
  return (
    <div className="source-notice">
      {text
        .replace(/\r/g, "")
        .split(/\n\s*\n/)
        .filter((part) => part.trim())
        .map((part, index) => {
          const clean = part.trim().replace(/^#+\s*/gm, "");
          return /^#{1,3}\s/.test(part.trim()) ? (
            <h3 key={index}>{clean}</h3>
          ) : (
            <p key={index} className="source-text">
              {clean}
            </p>
          );
        })}
    </div>
  );
}

function InfoPage() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="patient-section content-width">
      <h1 className="mb-6 text-4xl font-bold text-primary">Informacje dla pacjenta</h1>
      <nav aria-label="Informacje na tej stronie" className="information-links max-w-3xl">
        <a href="#recepty">E-recepta</a>
        <a href="#nfz">POZ na NFZ</a>
        <a href="#dokumenty">Prawa pacjenta i dokumenty</a>
        <a href="#bezpieczenstwo">Ochrona danych</a>
      </nav>
      <section id="recepty" className="patient-section">
        <h2>E-recepta na leki stałe</h2>
        <p>
          Na stronie przychodni opisano zamawianie recept na leki stosowane w leczeniu chorób
          przewlekłych. Kod recepty pacjent otrzymuje SMS-em.
        </p>
        <div className="staff-note">
          <strong>Podgląd — tutaj nie zamówisz recepty.</strong>
          <p>
            Ta wersja strony nie przyjmuje zamówień ani danych pacjenta. Zapytaj w rejestracji o
            aktualny sposób zamówienia.
          </p>
        </div>
        <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-primary">
          Zapytaj o e-receptę: {clinic.phone}
        </a>
      </section>
      <section id="nfz" className="patient-section border-t-2 border-border">
        <h2>Podstawowa opieka zdrowotna na NFZ</h2>
        <p>
          Przychodnia świadczy usługi w ramach umowy z NFZ od poniedziałku do piątku, 8:00–18:00.
        </p>
        <p className="confirmation">{clinic.hoursNote}</p>
        <p className="confirmation">
          do potwierdzenia: aktualne zasady zapisania do POZ, dokumenty potrzebne do wizyty i zakres
          badań finansowanych przez NFZ nie są opisane w źródłach.
        </p>
        <Link to="/poz" className="text-link">
          Lekarze POZ i godziny przyjęć
        </Link>
      </section>
      <section id="profilaktyka" className="patient-section border-t-2 border-border">
        <h2>Profilaktyka i opieka koordynowana</h2>
        <p>
          W przychodni realizowane są programy profilaktyki chorób układu krążenia (CHUK) i „Moje
          Zdrowie — bilans zdrowia osoby dorosłej”.
        </p>
        <p>
          O udział w programie i opiekę koordynowaną zapytaj swojego lekarza, pielęgniarkę lub
          rejestrację.
        </p>
        <h3>Sklep medyczny</h3>
        <p>Poniedziałek – piątek, 8:00–16:00. Realizuje wnioski NFZ na środki pomocnicze.</p>
      </section>
      <section id="dokumenty" className="patient-section border-t-2 border-border">
        <h2>Prawa pacjenta i dokumenty</h2>
        <div className="information-links max-w-3xl">
          <a href={`${base}dokumenty/prawa-i-obowiazki-pacjenta-babina.pdf`}>
            Prawa i obowiązki pacjenta (PDF)
          </a>
          <a href={`${base}dokumenty/poza-kolejnoscia-babina.pdf`}>
            Uprawnienia poza kolejnością (PDF)
          </a>
        </div>
        <p className="confirmation mt-4">
          do potwierdzenia: aktualność dokumentu „Poza kolejnością” z 2019 r. W źródłach brakuje
          regulaminu organizacyjnego, pełnej procedury skarg i zasad udostępniania dokumentacji.
        </p>
      </section>
      <section id="bezpieczenstwo" className="patient-section border-t-2 border-border">
        <h2>Ochrona danych i komunikaty przychodni</h2>
        <p>
          Treść komunikatów zachowana ze strony przychodni. Nie przekazuj danych medycznych przez
          ten podgląd.
        </p>
        <details className="source-details">
          <summary>Zawiadomienie o naruszeniu ochrony danych osobowych</summary>
          <SourceNotice text={notices.breach} />
        </details>
        <details className="source-details">
          <summary>Komunikat przychodni dotyczący wiadomości SMS</summary>
          <SourceNotice text={notices.news} />
        </details>
        <details className="source-details">
          <summary>Klauzula informacyjna RODO ze strony przychodni</summary>
          <p className="confirmation">
            do potwierdzenia: aktualność i kompletność klauzuli; audyt wskazuje brakujące
            informacje.
          </p>
          <SourceNotice text={notices.privacy} />
        </details>
        <a className="text-link" href="mailto:iod.arsmedica@wp.pl">
          Kontakt z inspektorem ochrony danych
        </a>
      </section>
      <section id="projekt" className="patient-section border-t-2 border-border">
        <h2>Projekt „Wsparcie podstawowej opieki zdrowotnej (POZ)”</h2>
        <p>
          Przychodnia otrzymała grant 448 959,87 zł na wyposażenie medyczne, diagnostyczne i
          informatyczne. Projekt jest dofinansowany z Europejskiego Funduszu Rozwoju Regionalnego, w
          ramach programu FEnIKS 2021–2027.
        </p>
        <p className="confirmation">
          do potwierdzenia przed publikacją: komplet wymaganych oznaczeń projektu.
        </p>
      </section>
      <Link to="/kontakt" className="text-link">
        Telefony, adres i dojazd
      </Link>
    </div>
  );
}
