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
          "Kardiolog, neurolog, ortopeda, psychiatra, fizjoterapia i masaż w Kaliszu przy ul. Babina 3. Rejestracja pon.–pt. 8:00–16:00, tel. 500 308 305.",
      },
      { property: "og:title", content: "Prywatne gabinety specjalistyczne – ArsMedica Kalisz" },
      {
        property: "og:description",
        content: "Specjaliści przyjmujący w przychodni ArsMedica Centrum w Kaliszu i numery rejestracji.",
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
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">Prywatne gabinety specjalistyczne</h1>
      <p className="mt-4 max-w-3xl text-xl">
        Do większości specjalistów rejestracja odbywa się od poniedziałku do piątku w godzinach
        8:00–16:00 pod numerem <strong>{clinic.specialistPhone}</strong>. Przy pozostałych podajemy
        numer bezpośredni.
      </p>
      <a href={`tel:${clinic.specialistPhoneHref}`} className="btn-base btn-accent mt-6">
        <Phone className="size-5" aria-hidden="true" /> Zadzwoń {clinic.specialistPhone}
      </a>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {specialists.map((s) => (
          <article key={s.field + s.name} className="surface-card flex flex-col p-7">
            <h2 className="text-xl font-bold text-primary">{s.field}</h2>
            <p className="mt-2 text-lg font-semibold">{s.name}</p>
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
