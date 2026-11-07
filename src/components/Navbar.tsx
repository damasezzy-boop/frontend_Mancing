const links = ["Beranda", "Spot", "Tangkapan", "Acara"];

export default function Navbar() {
  return (
    <header className="border-b-[3px] border-bone">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a href="#beranda" className="font-blackletter text-3xl font-bold leading-none">
          Yang Penting Mancing
        </a>
        <nav className="flex flex-wrap gap-6 text-[15px] uppercase tracking-[0.14em]">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#gabung"
          className="btn-punk inline-block -rotate-2 border-2 border-bone bg-blood px-5 py-3 text-[15px] uppercase tracking-[0.12em] text-[#F4EEDC]"
        >
          Joinn Sini!
        </a>
      </div>
    </header>
  );
}