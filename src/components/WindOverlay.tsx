const mists = [
  { top: 18, delay: 0, width: 70 },
  { top: 48, delay: 4, width: 80 },
  { top: 78, delay: 8, width: 65 },
];

const streaks = [
  { top: 12, delay: 0, dur: 9 },
  { top: 28, delay: 3, dur: 11 },
  { top: 45, delay: 6, dur: 8 },
  { top: 62, delay: 1.5, dur: 12 },
  { top: 78, delay: 4.5, dur: 10 },
  { top: 90, delay: 7.5, dur: 9 },
];

const specks = [
  { top: 8, delay: 2, dur: 6 },
  { top: 20, delay: 0, dur: 5 },
  { top: 34, delay: 3.5, dur: 7 },
  { top: 52, delay: 1, dur: 5.5 },
  { top: 66, delay: 4, dur: 6.5 },
  { top: 84, delay: 2.5, dur: 5 },
];

export default function WindOverlay() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
      {mists.map((mist, i) => (
        <div
          key={`mist-${i}`}
          className="anim-mist-screen absolute rounded-full bg-bone/10 blur-3xl"
          style={{
            top: `${mist.top}%`,
            left: "-10%",
            width: `${mist.width}vw`,
            height: "9rem",
            animationDelay: `${mist.delay}s`,
          }}
        />
      ))}

      {streaks.map((streak, i) => (
        <svg
          key={`streak-${i}`}
          className="anim-wind-screen absolute left-0"
          width="140"
          height="24"
          viewBox="0 0 140 24"
          style={{
            top: `${streak.top}%`,
            animationDelay: `${streak.delay}s`,
            animationDuration: `${streak.dur}s`,
          }}
        >
          <path
            d="M0 22h110c16 0 24-12 14-20"
            stroke="#E6DFCB"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity=".5"
          />
        </svg>
      ))}

      {specks.map((speck, i) => (
        <span
          key={`speck-${i}`}
          className="anim-wind-screen absolute left-0 h-[3px] w-[3px] rounded-full bg-bone"
          style={{
            top: `${speck.top}%`,
            animationDelay: `${speck.delay}s`,
            animationDuration: `${speck.dur}s`,
          }}
        />
      ))}
    </div>
  );
}