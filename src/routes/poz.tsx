import { createFileRoute, Link } from "@tanstack/react-router";
import { clinic } from "@/data/clinic";
import { DoctorSchedule } from "@/components/doctor-schedule";

export const Route = createFileRoute("/poz")({
  component: PozPage,
  head: () => ({ meta: [{ title: "Lekarze POZ i godziny przyjęć — ARSMEDICA Kalisz" }] }),
});

function PozPage() {
  return (
    <div className="patient-section content-width">
      <h1 className="mb-6 text-4xl font-bold text-primary">Lekarze rodzinni i godziny przyjęć</h1>
      <a href={`tel:${clinic.phoneHref}`} className="btn-base btn-primary mb-6">
        Rejestracja: {clinic.phone}
      </a>
      <DoctorSchedule />
      <div className="mt-8 flex flex-wrap gap-6">
        <Link to="/" hash="godziny" className="text-link">
          Godziny przychodni i pobrań
        </Link>
        <Link to="/" hash="szczepienia" className="text-link">
          Szczepienia i zapisy
        </Link>
      </div>
    </div>
  );
}
