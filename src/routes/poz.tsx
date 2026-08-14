import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { clinic, pozDoctors } from "@/data/clinic";

export const Route = createFileRoute("/poz")({
  component: PozPage,
  head: () => ({
    meta: [
      { title: "Lekarze POZ i godziny przyjęć – ArsMedica Kalisz" },
      {
        name: "description",
        content:
          "Godziny przyjęć lekarzy rodzinnych, internisty i pediatry w przychodni ArsMedica Centrum w Kaliszu. Świadczenia w ramach NFZ, pon.–pt. 8:00–18:00.",
      },
      { property: "og:title", content: "Lekarze POZ i godziny przyjęć – ArsMedica Kalisz" },
      {
        property: "og:description",
        content: "Sprawdź, kiedy przyjmuje Twój lekarz rodzinny w przychodni ArsMedica w Kaliszu.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/poz" },
    ],
    links: [{ rel: "canonical", href: "/poz" }],
  }),
});

function PozPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">Lekarze rodzinni i godziny przyjęć</h1>
      <p className="mt-4 max-w-3xl text-xl">
        Przychodnia świadczy usługi w ramach umowy z NFZ od poniedziałku do piątku w godzinach
        8:00–18:00. Gabinet zabiegowy czynny jest w godzinach pracy przychodni, a krew pobieramy
        codziennie od 7:30 do 11:00.
      </p>
      <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-primary mt-6">
        <Phone className="size-5" aria-hidden="true" /> Rejestracja {clinic.phone}
      </a>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {pozDoctors.map((doc) => (
          <article key={doc.name} className="surface-card p-7">
            <h2 className="text-2xl font-bold">{doc.name}</h2>
            <p className="mt-1 text-lg text-primary">{doc.role}</p>
            <dl className="mt-5 divide-y divide-border">
              {doc.hours.map(([day, time]) => (
                <div key={day} className="flex flex-wrap justify-between gap-2 py-2.5">
                  <dt className="font-semibold capitalize">{day}</dt>
                  <dd className="text-muted-foreground">{time}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <section className="surface-card mt-10 p-8">
        <h2 className="text-2xl font-bold">Szczepienia zalecane</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
          <li>przeciw wirusowemu zapaleniu wątroby (Euvax – pełne szczepienie to 3 dawki),</li>
          <li>przeciw pneumokokom (Prevenar),</li>
          <li>przeciw rotawirusom (Rotarix),</li>
          <li>
            skojarzone przeciw błonicy, tężcowi, poliomyelitis, Hib i WZW typu B (Infanrix IPV+Hib).
          </li>
        </ul>
      </section>
    </div>
  );
}
