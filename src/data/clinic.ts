export const clinic = {
  name: "ARSMEDICA CENTRUM",
  subtitle: "Poradnia Podstawowej Opieki Zdrowotnej",
  street: "ul. Babina 3",
  city: "62-800 Kalisz",
  phone: "62 580 22 52",
  phoneHref: "+48625802252",
  mobile: "573 335 284",
  mobileHref: "+48573335284",
  specialistPhone: "500 308 305",
  specialistPhoneHref: "+48500308305",
  hours: "poniedziałek – piątek, 8:00 – 18:00",
  hoursNote:
    "do potwierdzenia: oferta POZ podaje 8:00–18:00, stopka 7:30–18:00. Osobnych godzin rejestracji nie opublikowano.",
  afterHoursPhone: "62 765 16 54",
  afterHoursPhoneHref: "+48627651654",
  tpkPhone: "800 137 200",
  tpkPhoneHref: "800137200",
  tpkHours:
    "Według strony przychodni: poniedziałek – piątek 18:00–8:00 następnego dnia; w weekendy, święta i inne dni ustawowo wolne od pracy — całodobowo.",
};

export const pozDoctors = [
  {
    name: "Paweł Andrzejczak",
    role: "Internista, medycyna rodzinna",
    hours: [
      ["poniedziałek", "8:00 – 13:00"],
      ["wtorek", "13:00 – 18:00"],
      ["środa", "8:00 – 13:00"],
      ["czwartek", "8:00 – 13:00"],
      ["piątek", "dni parzyste 13:00 – 18:00; nieparzyste 8:00 – 18:00"],
    ],
  },
  {
    name: "Piotr Lisowski",
    role: "Specjalista medycyny rodzinnej",
    hours: [
      ["poniedziałek", "8:00 – 13:00"],
      ["wtorek", "8:00 – 13:00"],
      ["środa", "13:00 – 18:00"],
      ["czwartek", "13:00 – 18:00"],
      ["piątek", "8:00 – 13:00"],
    ],
  },
  {
    name: "Agnieszka Krawczyk-Kubisiak",
    role: "Specjalista medycyny rodzinnej",
    hours: [
      ["poniedziałek", "11:00 – 16:00"],
      ["wtorek", "8:00 – 13:00"],
      ["środa", "8:00 – 13:00"],
      ["czwartek", "8:00 – 13:00"],
      ["piątek", "dni parzyste 8:00 – 13:00; nieparzyste 11:00 – 16:00"],
    ],
  },
  {
    name: "Irena Grzeluszka-Tobiasz",
    role: "Lekarz pediatra, medycyna rodzinna",
    hours: [
      ["poniedziałek", "9:00 – 14:00"],
      ["wtorek", "9:00 – 12:30"],
      ["środa", "11:00 – 16:00"],
      ["czwartek", "13:00 – 18:00"],
      ["piątek", "9:00 – 13:00"],
    ],
  },
  {
    name: "Ewa Marciniak",
    role: "Specjalista medycyny rodzinnej",
    hours: [
      ["poniedziałek", "8:00 – 13:00"],
      ["wtorek", "13:00 – 18:00"],
      ["środa", "8:00 – 13:00"],
      ["czwartek", "8:00 – 13:00"],
      ["piątek", "dni parzyste 13:00 – 18:00; nieparzyste 8:00 – 13:00"],
    ],
  },
  {
    name: "Paweł Krzywda",
    role: "Rezydent medycyny rodzinnej",
    hours: [
      ["wtorek", "15:00 – 18:00"],
      ["piątek", "15:00 – 18:00"],
    ],
  },
];

export const specialists = [
  {
    field: "Ortopeda",
    name: "dr n. med. Piotr Wojciechowski",
    when: "wtorki od 18:00",
    phone: "500 308 305",
  },
  { field: "Neurolog", name: "dr n. med. Karolina Tworek", when: "", phone: "500 308 305" },
  {
    field: "Kardiolog",
    name: "lek. Agata Serwecińska",
    when: "poniedziałki",
    phone: "500 308 305",
  },
  {
    field: "Lekarz medycyny pracy i transportu",
    name: "lek. Piotr Lisowski",
    when: "poniedziałek – czwartek",
    phone: "500 308 305",
  },
  { field: "Pulmonolog", name: "lek. Waldemar Bakalarz", when: "czwartki", phone: "500 308 305" },
  {
    field: "Psychiatra",
    name: "lek. Jadwiga Liberowicz-Przybył",
    when: "poniedziałek i środa",
    phone: "692 685 922",
  },
  {
    field: "Chirurg naczyniowy",
    name: "dr n. med. Jarosław Kasperczak",
    when: "poniedziałek i czwartek od 16:00",
    phone: "607 051 894",
    note: "do potwierdzenia: strona główna podaje poniedziałek i czwartek, „O nas” poniedziałek i piątek.",
  },
  {
    field: "Fizjoterapia uroginekologiczna i urologiczna",
    name: "mgr Aneta Kliber",
    when: "",
    phone: "881 693 188",
  },
  {
    field: "Masaż leczniczy",
    name: "Gohar Meliksetyan",
    when: "poniedziałek – piątek od 12:00",
    phone: "880 683 065",
    note: "do potwierdzenia: strona główna podaje ten numer; „O nas” podaje 500 308 305.",
  },
  {
    field: "Poradnia psychologii pracy",
    name: "mgr Izabela Płucienniczak",
    when: "pon. 8:00–15:00, czw. 12:00–18:00",
    phone: "503 114 595",
  },
  { field: "Psycholog", name: "mgr Justyna Prus-Buczak", when: "", phone: "601 775 701" },
  {
    field: "Dietetyk",
    name: "Julia Dobosz",
    when: "",
    phone: "791 755 792",
    note: "do potwierdzenia: „O nas” podaje Julię Dobosz, strona główna Wiktorię Szczęsną; telefon jest ten sam.",
  },
];

// Źródła: audit/pages/oferta-poz.md, laboratorium.md, kalendarz-szczepien.md.
export const openingHours = [
  {
    name: "POZ",
    days: "poniedziałek – piątek",
    time: "8:00–18:00",
    note: clinic.hoursNote,
  },
  {
    name: "Gabinet zabiegowy",
    days: "poniedziałek – piątek",
    time: "8:00–18:00",
    note: "do potwierdzenia: oferta POZ mówi o godzinach pracy przychodni; stopka podaje 7:30–18:00.",
  },
  { name: "Pobranie krwi", days: "poniedziałek – piątek", time: "7:30–11:00", note: "" },
  {
    name: "Odbiór wyników",
    days: "następnego dnia",
    time: "od 14:00",
    note: "do potwierdzenia: terminy po piątku i świętach oraz sposób odbioru nie są opisane.",
  },
  {
    name: "Rejestracja centralna do specjalistów",
    days: "poniedziałek – piątek",
    time: "8:00–16:00",
    note: "Tel. 500 308 305 — ortopeda, neurolog, kardiolog, pulmonolog oraz lekarz medycyny pracy i transportu. Pozostali mają osobne numery.",
  },
];

export const laboratory = {
  hours: "Poniedziałek – piątek, 7:30–11:00",
  results: "Odbiór wyników następnego dnia od 14:00.",
  availability:
    "W przychodni można wykonać badania płatne. Lista badań i ceny nie są opublikowane.",
  referral:
    "do potwierdzenia: zakres badań na NFZ i wymagane skierowanie. Zapytaj lekarza POZ, które badania może zlecić.",
  preparation:
    "do potwierdzenia: przygotowanie zależy od badania. Przed pobraniem zapytaj, czy trzeba być na czczo i jak przygotować się do konkretnego badania.",
  collection:
    "do potwierdzenia: sposób odbioru wyników, czas oczekiwania na poszczególne badania i terminy po weekendach lub świętach.",
};

export const vaccinations = [
  {
    name: "Wirusowe zapalenie wątroby",
    vaccine: "Euvax — źródło opisuje pełny cykl jako 3 dawki.",
  },
  { name: "Pneumokoki", vaccine: "Prevenar" },
  { name: "Rotawirusy", vaccine: "Rotarix" },
  {
    name: "Szczepienie skojarzone",
    vaccine: "Infanrix IPV+Hib — do potwierdzenia: dokładny zakres szczepienia opisanego w źródle.",
  },
  {
    name: "Krztusiec",
    vaccine:
      "Informacja przychodni dotyczy osób mających kontakt z niemowlętami, kobiet w ciąży lub planujących ciążę. U dorosłych źródło zaleca dawkę przypominającą co 10 lat.",
  },
];
export const vaccinationNote =
  "do potwierdzenia: aktualna dostępność, wiek pacjenta, kwalifikacja i finansowanie. Kalendarz w treści strony jest na 2026 r., ale tytuł strony nadal podaje 2025 r. Szczegóły ustal w punkcie szczepień.";
