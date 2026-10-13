import { Link } from "@tanstack/react-router";
import { clinic, pozDoctors } from "@/data/clinic";

export function DoctorSchedule() {
  return (
    <>
      <p>
        Lekarze rodzinni, internista i pediatra przyjmują w ramach NFZ. Wybierz nazwisko, aby
        sprawdzić cały tydzień.
      </p>
      <div className="doctor-list">
        {pozDoctors.map((doctor) => (
          <details key={doctor.name}>
            <summary>
              <strong>{doctor.name}</strong>
              <span>{doctor.role}</span>
            </summary>
            <dl className="schedule">
              {doctor.hours.map(([day, time]) => (
                <div key={day}>
                  <dt>{day}</dt>
                  <dd>{time}</dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>
      <p className="confirmation">
        do potwierdzenia: aktualność grafiku oraz znaczenie „dni parzystych / nieparzystych” w
        piątki. Przed wizytą ustal termin w rejestracji.
      </p>
      <div className="staff-note">
        <h3>Pielęgniarki i położna</h3>
        <p>
          do potwierdzenia: w źródłach nie ma osobnego grafiku ani pełnej listy personelu. O godziny
          zapytaj w rejestracji: <a href={`tel:${clinic.phoneHref}`}>{clinic.phone}</a>.
        </p>
      </div>
      <Link to="/specjalisci" className="text-link">
        Godziny i telefony prywatnych specjalistów
      </Link>
    </>
  );
}
