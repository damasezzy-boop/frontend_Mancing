import type { EventItem } from "../data/events";

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <article className="flex border-[3px] border-bone">
      <div className="flex w-24 shrink-0 flex-col items-center justify-center bg-blood py-4 text-[#F4EEDC]">
        <span className="font-blackletter text-5xl font-bold leading-none">{event.day}</span>
        <span className="mt-1 text-sm uppercase tracking-[0.2em]">{event.month}</span>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg uppercase tracking-[0.05em]">{event.title}</h3>
        <p className="text-sm text-ash">{event.location}</p>
        <p className="mt-1 text-sm text-blood-bright">{event.time}</p>
      </div>
    </article>
  );
}