import { createFileRoute } from "@tanstack/react-router";

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
      "Program profilaktyki chorób układu krążenia (CHUK) – dla osób dorosłych. Umożliwia ocenę stanu zdrowia, identyfikację czynników ryzyka oraz wczesne wykrywanie chorób.",
      "„Moje Zdrowie – bilans zdrowia osoby dorosłej”.",
    ],
  },
  {
    title: "Opieka koordynowana",
    body: [
      "Zapraszamy do korzystania ze świadczeń realizowanych w ramach opieki koordynowanej. Pozwala ona lepiej zaplanować diagnostykę i leczenie chorób przewlekłych oraz zapewnia pacjentowi bardziej kompleksową opiekę zespołu medycznego.",
      "Zapytaj o udział w rejestracji lub u swojego lekarza.",
    ],
  },
  {
    title: "Laboratorium i punkt pobrań",
    body: [
      "Krew pobieramy od poniedziałku do piątku w godzinach 7:30 – 11:00. Istnieje możliwość wykonania badań płatnych. Odbiór wyników następnego dnia od godziny 14:00.",
    ],
  },
  {
    title: "Recepty na leki stałe",
    body: [
      "Zamówioną e-receptę na leki stałe zrealizujesz w dowolnej aptece na podstawie kodu otrzymanego SMS-em – nie trzeba przychodzić do przychodni.",
    ],
  },
  {
    title: "Szczepienia",
    body: [
      "Realizujemy szczepienia zalecane, w tym przeciw krztuścowi, WZW, pneumokokom i rotawirusom.",
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
      "Pełna treść klauzuli informacyjnej RODO oraz karta praw i obowiązków pacjenta dostępne są w przychodni.",
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
