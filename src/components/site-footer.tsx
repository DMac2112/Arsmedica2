import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h2 className="font-display text-xl font-bold text-primary">{clinic.name}</h2>
          <p className="mt-1 text-muted-foreground">{clinic.subtitle}</p>
          <p className="mt-4 flex items-start gap-3">
            <MapPin className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
            <span>
              {clinic.street}
              <br />
              {clinic.city}
            </span>
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Kontakt</h2>
          <p className="mt-4 flex items-center gap-3">
            <Phone className="size-5 text-primary" aria-hidden="true" />
            <a className="font-semibold underline-offset-4 hover:underline" href={`tel:${clinic.phoneHref}`}>
              {clinic.phone}
            </a>
          </p>
          <p className="mt-2 flex items-center gap-3">
            <Phone className="size-5 text-primary" aria-hidden="true" />
            <a className="font-semibold underline-offset-4 hover:underline" href={`tel:${clinic.mobileHref}`}>
              {clinic.mobile}
            </a>
          </p>
          <p className="mt-2 flex items-center gap-3">
            <Clock className="size-5 text-primary" aria-hidden="true" />
            {clinic.hours}
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold">Na skróty</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/poz" className="underline-offset-4 hover:underline">
                Lekarze rodzinni i godziny przyjęć
              </Link>
            </li>
            <li>
              <Link to="/specjalisci" className="underline-offset-4 hover:underline">
                Gabinety specjalistyczne
              </Link>
            </li>
            <li>
              <Link to="/informacje" className="underline-offset-4 hover:underline">
                Profilaktyka, laboratorium, szczepienia
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="underline-offset-4 hover:underline">
                Dojazd i kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-base text-muted-foreground">
        © {new Date().getFullYear()} ArsMedica Centrum, Kalisz. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
