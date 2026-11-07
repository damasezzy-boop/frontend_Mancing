const words = ["Spot", "Tangkapan", "Acara", "Lomba", "Komunitas"];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-b-[3px] border-bone bg-blood">
      <p className="whitespace-nowrap px-6 py-3.5 text-center text-xl font-bold uppercase tracking-[0.3em] text-ink">
        {[...words, ...words].join(" ✕ ")}
      </p>
    </section>
  );
}