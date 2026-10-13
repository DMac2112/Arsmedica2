import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic, specialists } from "@/data/clinic";

export const Route = createFileRoute("/specjalisci")({
  component: SpecialistsPage,
  head: () => ({
    meta: [
      { title: "Prywatne gabinety specjalistyczne – ArsMedica Kalisz" },
      {
        name: "description",
        content:
          "Prywatni specjaliści w Kaliszu przy ul. Babina 3. Numery rejestracji i godziny przyjęć podano przy każdej poradni.",
      },
      { property: "og:title", content: "Prywatne gabinety specjalistyczne – ArsMedica Kalisz" },
      {
        property: "og:description",
        content:
          "Specjaliści przyjmujący w przychodni ArsMedica Centrum w Kaliszu i numery rejestracji.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/specjalisci" },
    ],
    links: [{ rel: "canonical", href: "/specjalisci" }],
  }),
});

function SpecialistsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">
        Prywatne gabinety specjalistyczne
      </h1>
      <p className="mt-4 max-w-3xl text-xl">
        Rejestracja centralna pod numerem <strong>{clinic.specialistPhone}</strong> działa od
        poniedziałku do piątku, 8:00–16:00. Obsługuje ortopedę, neurologa, kardiologa, pulmonologa
        oraz lekarza medycyny pracy i transportu. Do pozostałych specjalistów dzwoń pod numer
        podany przy poradni; źródło nie określa ich godzin rejestracji.
      </p>
      <a href={`tel:${clinic.specialistPhoneHref}`} className="btn-base btn-accent mt-6">
        <Phone className="size-5" aria-hidden="true" /> Zadzwoń {clinic.specialistPhone}
      </a>

      <p className="confirmation mt-6">
        do potwierdzenia: aktualność publikowanego grafiku specjalistów. Wizyty prywatne; ustal
        termin pod podanym numerem.
      </p>
      <div className="specialist-list">
        {specialists.map((s) => (
          <article key={s.field + s.name}>
            <h2 className="text-xl font-bold text-primary">{s.field}</h2>
            <p className="mt-2 text-lg font-semibold">{s.name}</p>
            {s.note && <p className="confirmation">{s.note}</p>}
            {!s.when && (
              <p className="confirmation">
                do potwierdzenia: godziny nie są opublikowane. Ustal termin telefonicznie.
              </p>
            )}
            {s.when && <p className="mt-1 text-muted-foreground">Przyjęcia: {s.when}</p>}
            <a
              href={`tel:+48${s.phone.replace(/\s/g, "")}`}
              className="btn-base btn-outline mt-5 self-start"
            >
              <Phone className="size-5" aria-hidden="true" /> {s.phone}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
