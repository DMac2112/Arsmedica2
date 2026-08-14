import { createFileRoute } from "@tanstack/react-router";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/informacje")({
  component: InfoPage,
  head: () => ({
    meta: [
      { title: "Informacje dla pacjenta – ArsMedica Centrum Kalisz" },
      {
        name: "description",
        content:
          "Profilaktyka CHUK i „Moje Zdrowie”, opieka koordynowana, laboratorium, sklep medyczny, recepty oraz prawa pacjenta w przychodni ArsMedica w Kaliszu.",
      },
      { property: "og:title", content: "Informacje dla pacjenta – ArsMedica Kalisz" },
      {
        property: "og:description",
        content: "Profilaktyka, laboratorium, recepty i najważniejsze informacje dla pacjentów przychodni.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/informacje" },
    ],
    links: [{ rel: "canonical", href: "/informacje" }],
  }),
});

const sections = [
  {
    title: "Programy profilaktyczne",
    body: [
      "Program profilaktyki chorób układu krążenia (CHUK) – dla osób dorosłych obciążonych ryzykiem zawału i udaru. Obejmuje badania krwi, pomiar ciśnienia i rozmowę z lekarzem.",
      "„Moje Zdrowie – bilans zdrowia osoby dorosłej” – przegląd stanu zdrowia z zestawem badań oraz indywidualnym planem dalszego postępowania.",
    ],
  },
  {
    title: "Opieka koordynowana",
    body: [
      "Prowadzimy pacjentów z chorobami przewlekłymi (kardiologicznymi, diabetologicznymi, tarczycy i płuc) w ramach opieki koordynowanej. Diagnostyka, konsultacje i porady edukacyjne odbywają się według wspólnie ustalonego planu leczenia.",
      "Zapytaj o udział w rejestracji, u swojego lekarza lub pielęgniarki.",
    ],
  },
  {
    title: "Laboratorium i punkt pobrań",
    body: [
      "Krew pobieramy codziennie od poniedziałku do piątku w godzinach 7:30 – 11:00. Na badania prosimy zgłaszać się na czczo, ze skierowaniem od lekarza i dokumentem tożsamości.",
    ],
  },
  {
    title: "Recepty na leki stałe",
    body: [
      `Receptę na stale przyjmowane leki zamówisz telefonicznie pod numerem ${clinic.phone} lub ${clinic.mobile}. Kod e-recepty otrzymasz SMS-em – nie trzeba przychodzić do przychodni.`,
    ],
  },
  {
    title: "Szczepienia",
    body: [
      "Realizujemy szczepienia obowiązkowe według kalendarza szczepień oraz szczepienia zalecane, w tym przeciw krztuścowi, WZW, pneumokokom i rotawirusom.",
      "Szczepienie przeciw krztuścowi polecamy szczególnie osobom mającym kontakt z noworodkami i niemowlętami, kobietom w ciąży oraz dorosłym przyjmującym dawkę przypominającą co 10 lat.",
    ],
  },
  {
    title: "Sklep medyczny",
    body: [
      "Sklep czynny jest od poniedziałku do piątku w godzinach 8:00 – 16:00. Realizujemy wnioski NFZ w ramach zaopatrzenia w środki pomocnicze i pomagamy w doborze produktów.",
    ],
  },
  {
    title: "Prawa i obowiązki pacjenta, RODO",
    body: [
      "Pacjent ma prawo do świadczeń zdrowotnych odpowiadających wymaganiom wiedzy medycznej, do informacji o swoim stanie zdrowia, do dokumentacji medycznej oraz do ochrony danych osobowych.",
      "Pełna treść klauzuli informacyjnej RODO oraz karta praw pacjenta dostępne są w rejestracji przychodni.",
    ],
  },
];

function InfoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">Informacje dla pacjenta</h1>
      <p className="mt-4 text-xl">
        Najważniejsze sprawy zebrane w jednym miejscu – prostym językiem i dużą czcionką.
      </p>

      <div className="mt-10 space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="surface-card p-8">
            <h2 className="text-2xl font-bold">{s.title}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 text-lg">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
