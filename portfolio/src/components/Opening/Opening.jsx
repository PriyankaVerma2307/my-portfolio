import { useEffect, useState } from "react";
import "./Opening.css";

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

const codeChars = "01{}[]<>/\\|$#@%&*+=-";

function createRain() {
  return Array.from({ length: 85 }, (_, index) => ({
    id: index,
    chars: Array.from(
      { length: Math.floor(Math.random() * 14) + 8 },
      () => codeChars[Math.floor(Math.random() * codeChars.length)]
    ).join("\n"),
    left: Math.random() * 100,
    duration: Math.random() * 8 + 7,
    delay: Math.random() * -12,
    opacity: Math.random() * 0.35 + 0.1,
  }));
}

export default function Opening({ onEnter }) {
  const [rain, setRain] = useState([]);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setRain(createRain());

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setReady(true);
          return 100;
        }

        return prev + 2;
      });
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="opening">
      {/* Code Rain */}
      <div className="code-rain">
        {rain.map((item) => (
          <span
            key={item.id}
            className="rain-column"
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

      {/* Colored Tech Words */}
      <div className="tech-rain">
        {techWords.map((word, index) => (
          <span
            key={word.text}
            className={`tech-word ${word.color}`}
            style={{
              left: `${8 + index * 12}%`,
              animationDelay: `${index * 1.2}s`,
            }}
          >
            {word.text}
          </span>
        ))}
      </div>

      {/* Top Label */}
      <div className="opening-label">
        <span>01.</span> Opening
      </div>

      {/* Main Content */}
      <div className="opening-content">
        <div className="initializing">
          &gt; Initializing...
        </div>

        <h1>
          Priyanka Verma<span className="cursor">_</span>
        </h1>

        <div className="role">
          MCA STUDENT
          <span>|</span>
          FULL STACK DEVELOPER
        </div>

        <div className="girl-codes">
          girl who codes <span>♡</span>
        </div>

        {/* Loading Box */}
        <div className="loading-box">
          <div>
            &gt; loading skills...
            <span>✓</span>
          </div>

          <div>
            &gt; loading projects...
            <span>✓</span>
          </div>

          <div>
            &gt; loading experience...
            <span>✓</span>
          </div>

          <div>
            &gt; loading achievements...
            <span>✓</span>
          </div>

          <div>
            &gt; loading dreams...
            <span>✓</span>
          </div>

          <div className="ready-line">
            &gt; {ready ? "ready!" : "loading..."}
          </div>

          <div className="progress-row">
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span>{progress}%</span>
          </div>
        </div>

        {/* Enter */}
        <div className="enter-wrapper">
          <p>&gt; Ready to explore?</p>

          <button
            className="enter-button"
            onClick={onEnter}
            disabled={!ready}
          >
            [ &nbsp; ENTER PORTFOLIO &nbsp; → &nbsp;]
          </button>
        </div>
      </div>

      {/* Handwritten Notes */}
      <div className="note note-left">
        just
        <br />
        a girl
        <br />
        who
        <br />
        codes ♡
      </div>

      <div className="note note-right">
        good
        <br />
        things
        <br />
        take
        <br />
        time :)
      </div>

      <div className="note note-bottom-left">
        <span>♡</span>
        <br />
        big dreams
        <br />
        in progress...
      </div>

      <div className="note note-bottom-right">
        ✓ better code
        <br />
        ✓ bigger dreams
        <br />
        ✓ same girl ♡
      </div>

      {/* Tiny decorative plant */}
      <div className="plant">
        ♧
      </div>

      <div className="footer-path">
        <span>▱</span> /portfolio _
      </div>

      <div className="year">( 2026 )</div>

      <div className="made-by">
        made with ♡
        <br />
        by Priyanka
      </div>
    </section>
  );
}