import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/kontakt")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Kontakt i dojazd – ArsMedica Centrum, ul. Babina 3 Kalisz" },
      {
        name: "description",
        content:
          "Przychodnia ArsMedica Centrum, ul. Babina 3, 62-800 Kalisz. Rejestracja tel. 62 580 22 52, kom. 573 335 284, pon.–pt. 8:00–18:00. Mapa dojazdu.",
      },
      { property: "og:title", content: "Kontakt i dojazd – ArsMedica Centrum Kalisz" },
      {
        property: "og:description",
        content: "Adres, numery telefonów i godziny pracy przychodni ArsMedica Centrum w Kaliszu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">Kontakt i dojazd</h1>

      <p className="confirmation mt-6">{clinic.hoursNote}</p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="surface-card p-8">
          <h2 className="font-display text-2xl font-bold">{clinic.name}</h2>
          <p className="text-lg text-muted-foreground">{clinic.subtitle}</p>

          <p className="mt-6 flex items-start gap-3 text-xl">
            <MapPin className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {clinic.street}
              <br />
              {clinic.city}
            </span>
          </p>

          <p className="mt-5 flex items-center gap-3 text-xl">
            <Clock className="size-6 text-primary" aria-hidden="true" /> {clinic.hours}
          </p>

          <div className="mt-8 space-y-3">
            <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-primary w-full text-xl">
              <Phone className="size-6" aria-hidden="true" /> Rejestracja: {clinic.phone}
            </a>
            <a href={`tel:${clinic.mobileHref}`} className="btn-base btn-outline w-full text-xl">
              <Phone className="size-6" aria-hidden="true" /> Telefon komórkowy: {clinic.mobile}
            </a>
            <a
              href={`tel:${clinic.specialistPhoneHref}`}
              className="btn-base btn-outline w-full text-xl"
            >
              <Phone className="size-6" aria-hidden="true" /> Specjaliści: {clinic.specialistPhone}
            </a>
          </div>

          <div className="mt-6 text-lg">
            <h2 className="text-2xl font-bold">Pomoc po godzinach</h2>
            <p>
              Po 18:00 i w dni świąteczne: Wojewódzki Szpital Zespolony w Kaliszu, ul. Poznańska 79
              (budynek Pogotowia).
            </p>
            <a className="text-link" href={`tel:${clinic.afterHoursPhoneHref}`}>
              {clinic.afterHoursPhone}
            </a>
          </div>
        </div>

        <section className="surface-card p-8">
          <h2 className="text-2xl font-bold">Jak dojechać?</h2>
          <p className="mt-4">Przychodnia znajduje się przy ul. Babina 3 w Kaliszu.</p>
          <p className="confirmation mt-4">
            do potwierdzenia: najbliższe przystanki, parking oraz dostępność wejścia nie są opisane
            w źródłach. Zapytaj o dogodny dojazd w rejestracji.
          </p>
          <a
            href="https://www.openstreetmap.org/search?query=Babina%203%2C%20Kalisz"
            className="text-link"
          >
            Znajdź adres na mapie OpenStreetMap
          </a>
        </section>
      </div>
    </div>
  );
}
