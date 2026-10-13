import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";
import receptionImage from "@/assets/reception.jpg";
import { clinic, openingHours, laboratory, vaccinations, vaccinationNote } from "@/data/clinic";
import { DoctorSchedule } from "@/components/doctor-schedule";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ARSMEDICA CENTRUM Kalisz — godziny, lekarze, laboratorium i szczepienia" },
      {
        name: "description",
        content:
          "Godziny POZ, grafiki lekarzy, pobrania krwi i szczepienia. Kalisz, ul. Babina 3. Rejestracja: 62 580 22 52.",
      },
    ],
  }),
});

function TodayHours() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const day = new Intl.DateTimeFormat("en-US", {
        timeZone: "Europe/Warsaw",
        weekday: "short",
      }).format(now);
      const date = new Intl.DateTimeFormat("pl-PL", {
        timeZone: "Europe/Warsaw",
        day: "numeric",
        month: "long",
      }).format(now);
      setToday(`${date}: ${day === "Sat" || day === "Sun" ? "POZ nieczynne" : "POZ 8:00–18:00"}`);
    };
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <>
      <strong className="today-hours">
        {today ? `Dziś, ${today}` : "POZ pon.–pt. 8:00–18:00"}
      </strong>
      <span className="regular-hours">Według stałego planu; z wyjątkiem świąt.</span>
    </>
  );
}

function Home() {
  return (
    <>
      <section id="godziny" className="hours-section content-width">
        <div className="registration-panel">
          <div>
            <h1>Godziny i rejestracja</h1>
            <TodayHours />
          </div>
          <a href={`tel:${clinic.phoneHref}`} className="registration-phone">
            <Phone aria-hidden="true" />
            <span>
              Rejestracja: <strong>{clinic.phone}</strong>
            </span>
          </a>
          <p className="confirmation">
            <span>Rozbieżne godziny POZ.</span>
            <small title={clinic.hoursNote}>do potwierdzenia</small>
          </p>
        </div>
        <div className="hours-layout">
          <dl className="opening-hours">
            {openingHours.map((item) => (
              <div key={item.name}>
                <dt>
                  {item.name}
                  <span>{item.days}</span>
                </dt>
                <dd>
                  <strong>{item.time}</strong>
                  {item.note && <small>{item.note}</small>}
                </dd>
              </div>
            ))}
          </dl>
          <figure className="clinic-photo">
            <img
              src={heroImage}
              alt="Siedziba przychodni ARSMEDICA przy ul. Babina 3 w Kaliszu"
              width={800}
              height={450}
            />
            <figcaption>ARSMEDICA CENTRUM, ul. Babina 3, Kalisz</figcaption>
          </figure>
        </div>
      </section>

      <section id="lekarze" className="patient-section content-width">
        <div className="section-title">
          <h2>Kiedy przyjmuje lekarz?</h2>
          <a className="text-link" href={`tel:${clinic.phoneHref}`}>
            Umów wizytę telefonicznie
          </a>
        </div>
        <DoctorSchedule />
      </section>

      <section id="laboratorium" className="laboratory-section">
        <div className="content-width patient-section">
          <h2>Laboratorium i pobranie krwi</h2>
          <div className="lab-layout">
            <div className="lab-times">
              <h3>Pobranie krwi</h3>
              <p className="large-time">7:30–11:00</p>
              <p>Poniedziałek – piątek</p>
              <h3>Wyniki</h3>
              <p>{laboratory.results}</p>
              <p className="confirmation">{laboratory.collection}</p>
            </div>
            <div className="lab-guide">
              <h3>Jakie badania można wykonać?</h3>
              <p>{laboratory.availability}</p>
              <p className="confirmation">{laboratory.referral}</p>
              <h3>Jak przygotować się do badania?</h3>
              <p>{laboratory.preparation}</p>
              <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-accent">
                Zapytaj o badanie: {clinic.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="szczepienia" className="patient-section content-width">
        <h2>Szczepienia</h2>
        <p>
          Przychodnia prowadzi szczepienia zalecane. Termin i szczepienie odpowiednie dla Ciebie lub
          dziecka ustal w punkcie szczepień przez rejestrację.
        </p>
        <dl className="vaccination-list">
          {vaccinations.map((item) => (
            <div key={item.name}>
              <dt>{item.name}</dt>
              <dd>{item.vaccine}</dd>
            </div>
          ))}
        </dl>
        <div className="staff-note">
          <h3>Kalendarz szczepień 2026</h3>
          <p className="confirmation">{vaccinationNote}</p>
        </div>
        <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-primary">
          Umów szczepienie: {clinic.phone}
        </a>
      </section>

      <section id="informacje" className="patient-section content-width">
        <h2>Informacje i kontakt</h2>
        <div className="information-layout">
          <div>
            <h3>Przychodnia przy Babina 3</h3>
            <p>
              {clinic.street}
              <br />
              {clinic.city}
            </p>
            <a href={`tel:${clinic.phoneHref}`} className="text-link">
              Rejestracja: {clinic.phone}
            </a>
            <a href={`tel:${clinic.mobileHref}`} className="text-link">
              Telefon komórkowy: {clinic.mobile}
            </a>
            <Link to="/kontakt" className="text-link">
              Kontakt i wskazówki dojazdu
            </Link>
          </div>
          <div className="information-links">
            <Link to="/informacje" hash="recepty">
              E-recepta na leki stałe
            </Link>
            <Link to="/informacje" hash="nfz">
              POZ na NFZ i profilaktyka
            </Link>
            <Link to="/informacje" hash="dokumenty">
              Prawa pacjenta i dokumenty
            </Link>
            <Link to="/informacje" hash="bezpieczenstwo">
              Komunikaty o ochronie danych
            </Link>
          </div>
        </div>
        <aside className="after-hours">
          <h3>Po godzinach i w dni świąteczne</h3>
          <p>Opieka nocna i świąteczna: Wojewódzki Szpital Zespolony w Kaliszu, ul. Poznańska 79.</p>
          <a className="text-link" href={`tel:${clinic.afterHoursPhoneHref}`}>
            {clinic.afterHoursPhone}
          </a>
          <h3>Teleplatforma Pierwszego Kontaktu (TPK)</h3>
          <a className="text-link" href={`tel:${clinic.tpkPhoneHref}`}>
            Bezpłatny numer: {clinic.tpkPhone}
          </a>
          <p>{clinic.tpkHours}</p>
        </aside>
      </section>

      <section className="clinic-introduction content-width">
        <img
          src={receptionImage}
          alt="Rejestracja ARSMEDICA CENTRUM z nazwą przychodni na szklanej przegrodzie"
          loading="lazy"
          width={800}
          height={449}
        />
        <div>
          <h2>Opieka blisko domu</h2>
          <p>
            Lekarz rodzinny, internista i pediatra w ramach NFZ. W tej samej siedzibie: gabinet
            zabiegowy, laboratorium i prywatne gabinety specjalistyczne.
          </p>
          <Link to="/informacje" hash="profilaktyka" className="text-link">
            Programy CHUK, „Moje Zdrowie” i opieka koordynowana
          </Link>
        </div>
      </section>
    </>
  );
}
