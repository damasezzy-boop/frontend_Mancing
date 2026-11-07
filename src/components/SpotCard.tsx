import type { Spot } from "../data/spots";

const tilts = ["-rotate-[1.4deg]", "rotate-[1.2deg]", "-rotate-[0.8deg]"];

interface SpotCardProps {
  spot: Spot;
  index: number;
}

export default function SpotCard({ spot, index }: SpotCardProps) {
  return (
    <article
      className={`torn-${(index % 3) + 1} ${tilts[index % tilts.length]} bg-bone px-6 pb-7 pt-8 text-ink`}
    >
      <div className="h-24 w-24 overflow-hidden border-2 border-ink bg-blood">
        <img
          src={spot.image}
          alt={spot.name}
          className="h-full w-full object-cover mix-blend-multiply contrast-125 grayscale"
        />
      </div>
      <h3 className="mb-2 mt-4 text-[22px] uppercase tracking-[0.06em]">{spot.name}</h3>
      <p className="mb-4 leading-relaxed">{spot.description}</p>
      <p className="border-t-2 border-dashed border-ink pt-3 text-sm uppercase tracking-[0.08em]">
        {spot.fish} / {spot.time}
      </p>
    </article>
  );
}