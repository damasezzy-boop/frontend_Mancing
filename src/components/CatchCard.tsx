import type { Catch } from "../data/catches";

const stampTilts = ["rotate-[5deg]", "-rotate-[4deg]", "rotate-[3deg]"];

interface CatchCardProps {
  item: Catch;
  index: number;
}

export default function CatchCard({ item, index }: CatchCardProps) {
  return (
    <figure className="relative m-0 border-[3px] border-bone">
      <div className="h-48 overflow-hidden bg-blood">
        <img
          src={item.image}
          alt={item.fish}
          style={{ objectPosition: item.position }}
          className="h-full w-full object-cover mix-blend-multiply contrast-125 grayscale"
        />
      </div>
      <span
        className={`absolute -right-1.5 top-3 bg-blood px-3 py-1 text-[13px] tracking-[0.14em] text-[#F4EEDC] ${stampTilts[index % stampTilts.length]}`}
      >
        TANGKAP
      </span>
      <figcaption className="border-t-[3px] border-bone p-4">
        <strong className="text-lg uppercase tracking-[0.05em]">{item.fish}</strong>
        <br />
        <span className="text-sm text-ash">
          {item.weight} / {item.bait} / {item.member}
        </span>
      </figcaption>
    </figure>
  );
}