export default function Logo({ height = 40 }) {
  const shieldPath = "M 122 62 L 204 48 Q 210 44 216 48 L 298 62 Q 301 62 301 66 L 301 176 Q 301 250 210 308 Q 119 250 119 176 L 119 66 Q 119 62 122 62 Z";
  const ecgPath    = "M 96 175 L 168 175 L 180 145 L 192 212 L 204 112 L 216 216 L 228 162 L 240 175 L 326 175";
  const sparklePath = "M0,-10 C1.6,-3 3,-1.6 10,0 C3,1.6 1.6,3 0,10 C-1.6,3 -3,1.6 -10,0 C-3,-1.6 -1.6,-3 0,-10 Z";

  const sparkles = [
    [150,100,1.05,"s1"],[266,92,1.30,"s2"],[184,128,0.72,"s3"],
    [254,118,0.90,"s4"],[212,78,0.62,"s5"],[160,148,0.80,"s6"],[238,138,0.68,"s7"],
  ];

  return (
    <div style={{ display:"flex", alignItems:"center", gap:14 }}>
      <svg
        height={height}
        viewBox="88 28 280 292"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ArQPulse logo"
        style={{ overflow:"visible", display:"block", flexShrink:0 }}
      >
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0"    stopColor="#2FD2F2"/>
            <stop offset="0.30" stopColor="#35A6EC"/>
            <stop offset="0.62" stopColor="#7B3ED8"/>
            <stop offset="1"    stopColor="#A31FEA"/>
          </linearGradient>
          <filter id="glow" x="-60%" y="-200%" width="220%" height="500%">
            <feGaussianBlur stdDeviation="4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#5a2fd6" floodOpacity="0.45"/>
          </filter>
          <filter id="sparkGlow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="1.4" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <path id="sp" d={shieldPath}/>
          <clipPath id="sc"><use href="#sp"/></clipPath>
          <path id="spk" d={sparklePath} fill="#fff"/>
        </defs>

        <style>{`
          .breathe{transform-box:fill-box;transform-origin:center;animation:breathe 4.6s ease-in-out 1s infinite}
          @keyframes breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.018)}}
          .pop{transform-box:fill-box;transform-origin:center;animation:pop .9s cubic-bezier(.16,1.05,.3,1) both}
          @keyframes pop{0%{opacity:0;transform:translateY(14px) scale(.82)}60%{opacity:1}100%{opacity:1;transform:translateY(0) scale(1)}}
          .spark{transform-box:fill-box;transform-origin:center;opacity:0;animation:sparkIn .6s ease-out both,twinkle 2.6s ease-in-out infinite}
          .s1{animation-delay:.9s,1.1s}.s2{animation-delay:1s,1.5s}.s3{animation-delay:1.1s,1.15s}
          .s4{animation-delay:1.2s,1.9s}.s5{animation-delay:1s,1.35s}.s6{animation-delay:1.15s,.7s}.s7{animation-delay:1.25s,2.1s}
          @keyframes sparkIn{0%{opacity:0;transform:scale(.2) rotate(-20deg)}100%{opacity:.95;transform:scale(1) rotate(0)}}
          @keyframes twinkle{0%,100%{opacity:.95;transform:scale(1) rotate(0)}50%{opacity:.5;transform:scale(.82) rotate(18deg)}}
        `}</style>

        <g className="pop">
          <g className="breathe">
            {/* Shield fill + border */}
            <use href="#sp" fill="url(#lg)" filter="url(#shadow)"/>
            <use href="#sp" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeLinejoin="round"/>

            <g clipPath="url(#sc)">
              {/* Sparkles */}
              <g filter="url(#sparkGlow)">
                {sparkles.map(([x,y,sc,cls]) => (
                  <g key={cls} transform={`translate(${x} ${y}) scale(${sc})`}>
                    <use href="#spk" className={`spark ${cls}`}/>
                  </g>
                ))}
              </g>
              {/* Shimmer sweep */}
              <rect x="-260" y="-60" width="120" height="420"
                transform="rotate(18 210 175)" fill="white" opacity="0.28"
                style={{filter:"blur(10px)"}}>
                <animate attributeName="x" values="-260;520;520"
                  keyTimes="0;0.4;1" dur="5.2s" begin="1.1s" repeatCount="indefinite"/>
              </rect>
            </g>

            {/* ECG white base */}
            <path d={ecgPath} fill="none" stroke="#ffffff" strokeWidth="5.5"
              strokeLinecap="round" strokeLinejoin="round"
              pathLength={1000} strokeDasharray="1000 1000" strokeDashoffset="1000">
              <animate attributeName="stroke-dashoffset" from="1000" to="0"
                dur="1.2s" begin="0.35s" fill="freeze" calcMode="spline" keySplines="0.3 0 0.2 1"/>
            </path>

            {/* ECG glow sweep */}
            <path d={ecgPath} fill="none" stroke="#BFF3FF" strokeWidth="6.5"
              strokeLinecap="round" strokeLinejoin="round"
              pathLength={1000} strokeDasharray="48 952" filter="url(#glow)" opacity="0.95">
              <animate attributeName="stroke-dashoffset" from="1000" to="0"
                dur="2.3s" begin="1.5s" repeatCount="indefinite"/>
            </path>

            {/* Pulse dot */}
            <g filter="url(#glow)">
              <circle cx="338" cy="175" r="8.5" fill="#ffffff"/>
              <circle cx="338" cy="175" r="8.5" fill="none" stroke="#ffffff" strokeWidth="2">
                <animate attributeName="r" values="8.5;22" dur="1.8s" begin="1.6s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.9;0" dur="1.8s" begin="1.6s" repeatCount="indefinite"/>
              </circle>
              <circle cx="338" cy="175" r="8.5" fill="none" stroke="#BFF3FF" strokeWidth="2">
                <animate attributeName="r" values="8.5;22" dur="1.8s" begin="2.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.9;0" dur="1.8s" begin="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="338" cy="175" r="8.5" fill="#ffffff">
                <animate attributeName="r" values="8.5;10.5;8.5" dur="1.15s" begin="1.6s" repeatCount="indefinite"/>
              </circle>
            </g>
          </g>
        </g>
      </svg>

      {/* Wordmark */}
      <span style={{
        fontWeight: 900,
        fontSize: height * 0.58,
        letterSpacing: "-0.6px",
        lineHeight: 1,
        color: "#000000",
        fontFamily: "Inter, system-ui, sans-serif",
      }}>
        ArQ<span style={{ color: "#1552D2" }}>Pulse</span>
      </span>
    </div>
  );
}
