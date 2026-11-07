import SectionHeading from "./SectionHeading";
import SpotCard from "./SpotCard";
import { spots } from "../data/spots";

export default function SpotSection() {
  return (
    <section id="spot" className="mx-auto max-w-6xl px-6 pb-6 pt-16">
      <SectionHeading title="Spot Mancing" subtitle="Tandess gacorr, Rekomend nich" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {spots.map((spot, index) => (
          <SpotCard key={spot.name} spot={spot} index={index} />
        ))}
      </div>
    </section>
  );
}