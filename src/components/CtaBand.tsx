import { FORM_URL } from "../data/links";

export default function CtaBand() {
  return (
    <section id="gabung" className="border-y-[3px] border-bone bg-blood">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-14">
        <h2 className="max-w-[640px] font-blackletter text-[clamp(28px,4vw,48px)] font-bold leading-none text-[#F4EEDC]">
          Turun ke laut bersama kami
        </h2>
        <a
          href={FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-punk inline-block -rotate-2 border-2 border-bone bg-ink px-8 py-4 text-[15px] uppercase tracking-[0.14em]"
        >
          Daftar Anggota
        </a>
      </div>
    </section>
  );
}