import SectionHeading from "./SectionHeading";
import EventCard from "./EventCard";
import { events } from "../data/events";

export default function EventSection() {
  return (
    <section id="acara" className="mx-auto max-w-6xl px-6 pb-16 pt-16">
      <SectionHeading title="Jadwal Acara" subtitle="Catat tanggalnya, jangan sampai ketinggalan." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </section>
  );
}