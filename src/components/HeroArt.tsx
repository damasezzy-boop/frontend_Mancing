const birds = [
  { y: 70, scale: 1, delay: 0, dur: 16 },
  { y: 130, scale: 0.7, delay: 7, dur: 20 },
];

export default function HeroArt() {
  return (
    <svg
      viewBox="0 0 560 520"
      role="img"
      aria-label="Kerangka ikan tergantung di kail di depan bulan merah dengan darah menetes, burung gagak, dan ombak bergerigi"
      className="block h-auto w-full self-end"
    >
      <g className="anim-moon">
        <circle cx="330" cy="200" r="130" fill="#B3121B" />
        <g stroke="#0C0C0C" strokeWidth="3" opacity=".55">
          <path d="M210 150l240 20M214 190l230 14M222 230l214-6M240 270l180-24" />
        </g>
      </g>

      {birds.map((bird, i) => (
        <g key={i} transform={`translate(0 ${bird.y}) scale(${bird.scale})`}>
          <g className="anim-bird" style={{ animationDelay: `${bird.delay}s`, animationDuration: `${bird.dur}s` }}>
            <path
              className="anim-flap"
              d="M0 0c6-9 13-9 18 0 5-9 12-9 18 0"
              stroke="#E6DFCB"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </g>
      ))}

      <g className="anim-swing">
        <path d="M280 0V140" stroke="#E6DFCB" strokeWidth="2.5" />
        <path
          d="M280 140V300c0 40-44 54-64 22l-8-16 10 4"
          stroke="#E6DFCB"
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g className="anim-float">
        <ellipse cx="160" cy="390" rx="58" ry="38" fill="#0C0C0C" stroke="#E6DFCB" strokeWidth="4" />
        <ellipse cx="140" cy="380" rx="13" ry="16" fill="#0C0C0C" stroke="#E6DFCB" strokeWidth="3" />
        <circle cx="140" cy="382" r="4" fill="#FF4B4B" />
        <path d="M104 400h30M110 410h28M118 418h24" stroke="#E6DFCB" strokeWidth="3" />
        <path d="M112 398v22M126 400v22" stroke="#E6DFCB" strokeWidth="2" />
        <path d="M218 390H448" stroke="#E6DFCB" strokeWidth="5" />
        <g stroke="#E6DFCB" strokeWidth="3.5" strokeLinecap="round">
          <path d="M240 390l-14-42M270 390l-14-46M300 390l-12-44M330 390l-10-40M360 390l-8-34M390 390l-6-28M240 390l-14 42M270 390l-14 46M300 390l-12 44M330 390l-10 40M360 390l-8 34M390 390l-6 28" />
        </g>
        <path d="M448 390l82-52v104z" fill="none" stroke="#E6DFCB" strokeWidth="4" strokeLinejoin="round" />
        <path d="M460 390l54-26M460 390l54 26" stroke="#E6DFCB" strokeWidth="2.5" />
        <g className="anim-drip" fill="#FF4B4B">
          <path d="M150 426c-4 18-4 30 0 40 4-10 4-22 0-40z" />
          <circle cx="150" cy="470" r="6" />
        </g>
        <g className="anim-drip-late" fill="#FF4B4B">
          <path d="M180 424c-3 12-3 20 0 26 3-6 3-14 0-26z" />
          <circle cx="180" cy="454" r="4" />
        </g>
      </g>

      <path
        className="anim-wave"
        d="M0 470l36 22 36-22 36 22 36-22 36 22 36-22 36 22 36-22 36 22 36-22 36 22 36-22 36 22 36-22 36 22V520H0z"
        fill="#E6DFCB"
      />
      <path
        className="anim-wave-late"
        d="M0 500l28-14 28 14 28-14 28 14 28-14 28 14 28-14 28 14 28-14 28 14 28-14 28 14 28-14 28 14 28-14 28 14 28-14V520H0z"
        fill="#0C0C0C"
      />
    </svg>
  );
}