import HeroArt from "./HeroArt";
import WindOverlay from "./WindOverlay";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden border-b-[3px] border-bone">
        <WindOverlay />
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 pt-14 md:grid-cols-2">
        <div className="pb-16">
          <span className="mb-6 inline-block -rotate-[4deg] border-[3px] border-blood-bright px-3.5 py-1.5 text-sm uppercase tracking-[0.2em] text-blood-bright">
            Keling Bareng
          </span>
          <h1 className="mb-5 font-blackletter text-[clamp(36px,5vw,64px)] font-bold leading-[0.95]">
            Mancing Dulu,
            <br />
            <span className="text-blood-bright">Galau Belakangan.</span>
          </h1>
          <p className="mb-8 max-w-[470px] text-[17px] leading-relaxed text-ash">
            Tempat nongkrong anak pancing yang males ribet. Bagi spot, pamerin strike, dan ikut mabar mancing bareng, dari subuh sampe subuh lagee!!.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#spot"
              className="btn-punk border-2 border-bone bg-blood px-7 py-4 text-[15px] uppercase tracking-[0.12em] text-[#F4EEDC]"
            >
              Lihat Spot
            </a>
            <a
              href="#acara"
              className="btn-punk border-2 border-dashed border-bone px-7 py-4 text-[15px] uppercase tracking-[0.12em]"
            >
              Jadwal Acara
            </a>
          </div>
        </div>
        <HeroArt />
      </div>
    </section>
  );
}