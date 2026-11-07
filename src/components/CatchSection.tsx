import SectionHeading from "./SectionHeading";
import CatchCard from "./CatchCard";
import { catches } from "../data/catches";

export default function CatchSection() {
  return (
    <section id="tangkapan" className="mx-auto max-w-6xl px-6 pb-6 pt-16">
      <SectionHeading title="Tangkapan Terbaru" subtitle="Tangkapan Terbaru dari para sesepuh" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {catches.map((item, index) => (
          <CatchCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}