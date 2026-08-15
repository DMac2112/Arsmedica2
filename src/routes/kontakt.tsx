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

          <p className="mt-6 text-lg text-muted-foreground">
            Po godzinie 18:00 oraz w dni świąteczne opiekę zapewnia Wojewódzki Szpital Zespolony w
            Kaliszu, ul. Poznańska 79 (budynek Pogotowia), tel. 62 765 16 54. Nocna i świąteczna
            pomoc: Teleplatforma Pierwszego Kontaktu (TPK) 800 137 200.
          </p>
        </div>

        <div className="surface-card overflow-hidden">
          <iframe
            title="Mapa dojazdu do przychodni ArsMedica Centrum, ul. Babina 3 w Kaliszu"
            src="https://www.openstreetmap.org/export/embed.html?bbox=18.075%2C51.755%2C18.105%2C51.775&layer=mapnik&marker=51.7655%2C18.0905"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
