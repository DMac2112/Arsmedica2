import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  CalendarCheck,
  ClipboardList,
  Clock,
  FlaskConical,
  HeartPulse,
  MapPin,
  Phone,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import receptionImage from "@/assets/reception.jpg";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ArsMedica Centrum Kalisz – przychodnia POZ, NFZ, specjaliści" },
      {
        name: "description",
        content:
          "Przychodnia rodzinna ArsMedica Centrum w Kaliszu, ul. Babina 3. Lekarze POZ w ramach NFZ, laboratorium, szczepienia i prywatne gabinety specjalistyczne. Rejestracja: 62 580 22 52.",
      },
      { property: "og:title", content: "ArsMedica Centrum – przychodnia rodzinna w Kaliszu" },
      {
        property: "og:description",
        content:
          "Opieka lekarza rodzinnego w ramach NFZ, badania laboratoryjne, szczepienia i specjaliści. ul. Babina 3, Kalisz.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "ARSMEDICA CENTRUM",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ul. Babina 3",
            postalCode: "62-800",
            addressLocality: "Kalisz",
            addressCountry: "PL",
          },
          telephone: "+48625802252",
          openingHours: "Mo-Fr 08:00-18:00",
        }),
      },
    ],
  }),
});

const quickLinks = [
  {
    icon: CalendarCheck,
    title: "Umów wizytę",
    text: "Zadzwoń do rejestracji lub przyjdź osobiście. Pomożemy wybrać dogodny termin.",
    action: { label: `Zadzwoń ${clinic.phone}`, href: `tel:${clinic.phoneHref}` },
  },
  {
    icon: Pill,
    title: "Zamów receptę",
    text: "Recepty na leki stałe zamówisz telefonicznie – odbiór e-recepty SMS-em.",
    action: { label: `Zadzwoń ${clinic.mobile}`, href: `tel:${clinic.mobileHref}` },
  },
  {
    icon: Stethoscope,
    title: "Wizyta u specjalisty",
    text: "Kardiolog, neurolog, ortopeda i inni – prywatnie, bez skierowania.",
    action: { label: `Zadzwoń ${clinic.specialistPhone}`, href: `tel:${clinic.specialistPhoneHref}` },
  },
];

const services = [
  {
    icon: HeartPulse,
    title: "Podstawowa opieka zdrowotna",
    text: "Lekarz rodzinny, internista i pediatra w ramach umowy z NFZ, od poniedziałku do piątku.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorium i USG",
    text: "Pobieranie krwi codziennie od 7:30 do 11:00. Badania obrazowe i diagnostyka na miejscu.",
  },
  {
    icon: Syringe,
    title: "Szczepienia",
    text: "Szczepienia obowiązkowe i zalecane, w tym przeciw krztuścowi, WZW, pneumokokom i rotawirusom.",
  },
  {
    icon: Activity,
    title: "Gabinet zabiegowy",
    text: "Zastrzyki, opatrunki, EKG i pomiary – czynny w godzinach pracy przychodni.",
  },
  {
    icon: ClipboardList,
    title: "Opieka koordynowana",
    text: "Kompleksowe prowadzenie chorób przewlekłych: serca, cukrzycy, tarczycy i płuc.",
  },
  {
    icon: Stethoscope,
    title: "Sklep medyczny",
    text: "Pon.–pt. 8:00–16:00. Realizujemy wnioski NFZ na środki pomocnicze i doradzamy w doborze.",
  },
];

function Home() {
  return (
    <>
      <section className="border-b border-border bg-primary-soft">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-base font-semibold text-primary shadow-card">
              <MapPin className="size-5" aria-hidden="true" /> Kalisz, ul. Babina 3
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-primary sm:text-5xl">
              Przychodnia rodzinna, w której czuje się Pan/Pani zaopiekowany
            </h1>
            <p className="mt-5 max-w-xl text-xl text-foreground/90">
              Leczymy w ramach NFZ od poniedziałku do piątku w godzinach 8:00–18:00. Bez kolejek
              telefonicznych – wystarczy jeden telefon do rejestracji.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-primary text-xl">
                <Phone className="size-6" aria-hidden="true" /> {clinic.phone}
              </a>
              <Link to="/poz" className="btn-base btn-outline text-xl">
                Godziny przyjęć lekarzy
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-lg text-muted-foreground">
              <Clock className="size-5" aria-hidden="true" /> {clinic.hours}
            </p>
          </div>

          <img
            src={heroImage}
            alt="Lekarka rodzinna rozmawia ze starszą pacjentką w gabinecie przychodni"
            width={1600}
            height={1104}
            className="w-full rounded-2xl border border-border object-cover shadow-lift"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold sm:text-4xl">Załatw sprawę w jednej chwili</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quickLinks.map((item) => (
            <div key={item.title} className="surface-card flex flex-col p-7">
              <item.icon className="size-10 text-primary" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{item.text}</p>
              <a href={item.action.href} className="btn-base btn-primary mt-6">
                <Phone className="size-5" aria-hidden="true" /> {item.action.label}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-bold sm:text-4xl">Czym się zajmujemy</h2>
          <p className="mt-3 max-w-2xl text-xl text-muted-foreground">
            Wszystko w jednym miejscu – od wizyty u lekarza rodzinnego po badania i rehabilitację.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="surface-card p-7">
                <s.icon className="size-9 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
        <img
          src={receptionImage}
          alt="Recepcja przychodni ArsMedica Centrum"
          loading="lazy"
          width={1200}
          height={900}
          className="w-full rounded-2xl border border-border object-cover shadow-card"
        />
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Zadbaj o zdrowie – programy profilaktyczne</h2>
          <p className="mt-4 text-xl">
            Zapraszamy do bezpłatnych programów realizowanych w naszej przychodni:
          </p>
          <ul className="mt-5 space-y-4 text-lg">
            <li className="surface-card p-5">
              <strong>Profilaktyka chorób układu krążenia (CHUK)</strong> – ocena ryzyka zawału i
              udaru wraz z badaniami krwi.
            </li>
            <li className="surface-card p-5">
              <strong>„Moje Zdrowie” – bilans zdrowia osoby dorosłej</strong> – pełny przegląd stanu
              zdrowia i plan działania z lekarzem.
            </li>
          </ul>
          <p className="mt-5 text-lg text-muted-foreground">
            Nie czekaj na objawy – profilaktyka daje największe korzyści wtedy, gdy działamy
            odpowiednio wcześnie. Zapytaj o udział w rejestracji lub u swojego lekarza.
          </p>
          <Link to="/informacje" className="btn-base btn-primary mt-6">
            Sprawdź szczegóły
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="surface-card flex flex-col items-center gap-4 bg-primary p-10 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold">Po godzinie 18:00 i w dni świąteczne</h2>
          <p className="max-w-2xl text-xl">
            Opiekę medyczną świadczy Wojewódzki Szpital Zespolony w Kaliszu, ul. Poznańska 79
            (budynek Pogotowia). W sytuacji zagrożenia życia dzwoń pod numer 112 lub 999.
          </p>
        </div>
      </section>
    </>
  );
}
