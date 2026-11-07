interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <h2 className="mb-2 font-blackletter text-[clamp(40px,5vw,64px)] font-bold leading-none">{title}</h2>
      <p className="text-base text-ash">{subtitle}</p>
    </div>
  );
}