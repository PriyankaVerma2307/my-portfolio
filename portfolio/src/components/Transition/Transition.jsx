import { useEffect, useState } from "react";
import "./Transition.css";

const techWords = [
  { text: "React", color: "pink" },
  { text: "Node", color: "green" },
  { text: "MongoDB", color: "yellow" },
  { text: "Java", color: "blue" },
  { text: "Git", color: "pink" },
  { text: "Express", color: "green" },
  { text: "JavaScript", color: "yellow" },
  { text: "MERN", color: "blue" },
];

const codeChars = "0123456789";

function createRain() {
  return Array.from({ length: 75 }, (_, index) => ({
    id: index,

    chars: Array.from(
      { length: Math.floor(Math.random() * 16) + 10 },
      () => codeChars[Math.floor(Math.random() * codeChars.length)]
    ).join("\n"),

    left: Math.random() * 100,
    duration: Math.random() * 8 + 7,
    delay: Math.random() * -12,
    opacity: Math.random() * 0.25 + 0.08,
  }));
}

export default function Transition({ onContinue }) {
  const [rain, setRain] = useState([]);

  useEffect(() => {
    setRain(createRain());
  }, []);

  return (
    <section className="transition">

      {/* CODE RAIN */}

      <div className="transition-code-rain">
        {rain.map((item) => (
          <span
            key={item.id}
            className="transition-rain-column"
            style={{
              left: `${item.left}%`,
              animationDuration: `${item.duration}s`,
              animationDelay: `${item.delay}s`,
              opacity: item.opacity,
            }}
          >
            {item.chars}
          </span>
        ))}
      </div>


      {/* COLORED TECH WORDS */}

      <div className="transition-tech-rain">
        {techWords.map((word, index) => (
          <span
            key={word.text}
            className={`transition-tech-word ${word.color}`}
            style={{
              left: `${7 + index * 12}%`,
              animationDelay: `${index * 1.1}s`,
            }}
          >
            {word.text}
          </span>
        ))}
      </div>


      {/* TOP LABEL */}

      <div className="transition-label">
        <span>02.</span> Transition
      </div>


      {/* LEFT NOTE */}

      <div className="transition-note note-small">
        small steps.
        <br />
        big dreams. <span>♡</span>

        <div className="note-arrow">↘</div>
      </div>


      {/* MAIN CONTENT */}

      <div className="transition-content">

        <div className="boot-line">
          &gt; booting portfolio.exe ...
          <span className="pink-cursor">█</span>
        </div>

        <h1>
          Every developer
          <br />
          has a starting point.
        </h1>

        <div className="starting-point">
          This is mine.
        </div>


        {/* START COMMAND */}

        <div className="start-command">
          &gt; start.exe<span className="command-cursor">_</span>
        </div>

        <button
          className="start-button"
          onClick={onContinue}
        >
          [ &nbsp; START EXPLORING &nbsp; → &nbsp; ]
        </button>

      </div>


      {/* GIRL */}

      {/* <div className="girl-wrapper">
        <img
          src="./public/transition-girl.png"
          alt="Girl coding with laptop"
        />
      </div> */}

             {/* HAND DRAWN GIRL */}

<div className="girl-sketch" aria-hidden="true">
  <svg
    viewBox="0 0 360 330"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* bun */}
    <path
      d="M105 72
         C72 65 67 32 92 18
         C116 4 143 20 140 48
         C138 69 125 79 105 72Z"
      fill="#090909"
      stroke="#f4f4f4"
      strokeWidth="3"
    />

    {/* bun inner sketch */}
    <path
      d="M91 51 C82 39 88 25 102 23
         M101 62 C116 59 128 49 127 34"
      fill="none"
      stroke="#888"
      strokeWidth="1.5"
    />

    {/* back hair */}
    <path
      d="M105 75
         C91 93 92 135 108 157
         C121 174 151 169 163 145
         L177 100
         C169 75 139 66 105 75Z"
      fill="#0a0a0a"
      stroke="#f4f4f4"
      strokeWidth="3"
    />

    {/* face */}
    <path
      d="M139 76
         C165 73 181 91 178 117
         C176 139 160 151 142 143
         C126 136 119 117 123 96
         C126 83 132 78 139 76Z"
      fill="#111"
      stroke="#f4f4f4"
      strokeWidth="2.5"
    />

    {/* face details */}
    <circle
      cx="163"
      cy="105"
      r="2.5"
      fill="#ff6fb7"
    />

    <path
      d="M169 117 Q175 120 169 123"
      fill="none"
      stroke="#f4f4f4"
      strokeWidth="1.5"
    />

    {/* hoodie body */}
    <path
      d="M108 145
         C83 153 57 176 49 217
         L43 282
         L225 282
         L216 213
         C210 177 190 153 166 145
         C150 159 125 160 108 145Z"
      fill="#0c0c0c"
      stroke="#f4f4f4"
      strokeWidth="3"
    />

    {/* hood */}
    <path
      d="M96 150
         C91 124 107 109 133 108
         C161 107 180 124 174 151
         C157 164 116 164 96 150Z"
      fill="#0c0c0c"
      stroke="#f4f4f4"
      strokeWidth="2.5"
    />

    {/* hoodie strings */}
    <path
      d="M119 145 L117 190
         M153 145 L157 190"
      fill="none"
      stroke="#eeeeee"
      strokeWidth="2"
    />

    {/* left arm */}
    <path
      d="M76 183
         C52 189 37 212 49 230
         C59 243 75 235 91 214"
      fill="#0c0c0c"
      stroke="#f4f4f4"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* right arm */}
    <path
      d="M188 184
         C214 188 231 207 221 226
         C214 239 198 234 180 214"
      fill="#0c0c0c"
      stroke="#f4f4f4"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* laptop screen */}
    <path
      d="M157 184
         L278 172
         L282 253
         L159 263Z"
      fill="#080808"
      stroke="#f4f4f4"
      strokeWidth="3"
    />

    {/* laptop inner screen */}
    <path
      d="M168 192 L268 183 L272 243 L169 251Z"
      fill="none"
      stroke="#555"
      strokeWidth="1"
    />

    {/* laptop heart */}
    <text
      x="245"
      y="231"
      fill="#ff6fb7"
      fontSize="24"
      fontFamily="Caveat"
    >
      ♡
    </text>

    {/* laptop base */}
    <path
      d="M147 258
         L285 246
         L311 267
         L173 286
         Z"
      fill="#101010"
      stroke="#f4f4f4"
      strokeWidth="3"
    />

    {/* keyboard line */}
    <path
      d="M174 267 L278 256"
      stroke="#666"
      strokeWidth="1"
    />

    {/* little sketch marks */}
    <path
      d="M39 285 Q120 291 210 285"
      fill="none"
      stroke="#f4f4f4"
      strokeWidth="2"
    />

    {/* pink heart beside girl */}
    <text
      x="104"
      y="224"
      fill="#ff6fb7"
      fontSize="22"
      fontFamily="Caveat"
    >
      ♡
    </text>

  </svg>
</div>


      {/* PAPER PLANE */}

      <div className="paper-plane">
        <div className="plane">➤</div>

        <div className="plane-path">
          - - - - - - - - -
        </div>
      </div>


      {/* RIGHT CHECKLIST */}

      <div className="checklist">
        <div>
          <span>✓</span> curiosity
        </div>

        <div>
          <span>✓</span> consistency
        </div>

        <div>
          <span>✓</span> code
        </div>

        <div className="check-heart">♡</div>
      </div>


      {/* DECORATIONS */}

      <div className="star star-one">✦</div>
      <div className="star star-two">☆</div>
      <div className="star star-three">+</div>

      <div className="pink-cross">×</div>

      <div className="plant">♧</div>

      <div className="cat">
        ฅ^•ﻌ•^ฅ
        <span>♡</span>
      </div>


      {/* BOTTOM */}

      <div className="transition-path">
        <span>▱</span> /transition _
      </div>

      <div className="transition-year">
        ( 2026 )
      </div>

      <div className="transition-made">
        made with ♡
        <br />
        by Priyanka
      </div>

    </section>
  );
}