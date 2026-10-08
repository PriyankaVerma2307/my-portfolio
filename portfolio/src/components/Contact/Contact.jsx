import "./Contact.css";

const contacts = [
  {
    number: "01",
    label: "LINKEDIN",
    handle: "linkedin.com/in/priyanka-verma",
    href: "https://www.linkedin.com/in/priyanka-verma-3a5031347/",
    icon: "in",
  },
  {
    number: "02",
    label: "GITHUB",
    handle: "github.com/PriyankaVerma2307",
    href: "https://github.com/PriyankaVerma2307",
    icon: "⌘",
  },
  {
    number: "03",
    label: "X / TWITTER",
    handle: "@PriyankaVerma",
    href: "https://x.com/VermaVe23372",
    icon: "𝕏",
  },
  {
    number: "04",
    label: "EMAIL",
    handle: "vermapriyanka32892@gmail.com",
    href: "mailto:vermapriyanka32892@gmail.com",
    icon: "@",
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">

      {/* Background code */}
      <div className="contact-code-bg" aria-hidden="true">
        <span>const next = await connect();</span>
        <span>console.log("thanks for visiting");</span>
        <span>git push origin future</span>
        <span>010101 110010 001011</span>
        <span>return &lt;keepBuilding /&gt;;</span>
      </div>

      {/* Decorative grid */}
      <div className="contact-grid" aria-hidden="true"></div>

      {/* Header */}
      <div className="contact-header">
        <div className="contact-label">
          <span>08.</span> Contact
        </div>

        <div className="contact-header-note">
          say hello
          <span>↙</span>
        </div>

        <div className="contact-status">
          <span></span>
          CONNECTION: OPEN
        </div>
      </div>

      {/* Main */}
      <div className="contact-main">

        <div className="contact-command">
          &gt; ./connect-with-priyanka<span>_</span>
        </div>

        <div className="contact-title">
          <span>let's</span>
          <em>talk.</em>
        </div>

        <p className="contact-subtitle">
          Got an idea, opportunity, collaboration
          <br />
          or just want to say hello?
        </p>

        {/* Terminal */}
        <div className="contact-terminal">
          <div className="contact-terminal-top">
            <div className="terminal-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>connect.sh</span>

            <span className="terminal-live">
              ● LIVE
            </span>
          </div>

          <div className="contact-terminal-body">
            <p>
              <span className="terminal-pink">$</span> whoami
            </p>

            <p className="terminal-value">
              Priyanka Verma
            </p>

            <p>
              <span className="terminal-pink">$</span> status
            </p>

            <p className="terminal-value">
              open to opportunities &amp; collaborations
            </p>

            <p>
              <span className="terminal-pink">$</span> contact
            </p>

            <p className="terminal-value">
              choose a channel below
            </p>

            <p className="terminal-cursor">
              <span>$</span> _
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="contact-links">
          {contacts.map((contact) => (
            <a
              key={contact.number}
              href={
                contact.href.startsWith("YOUR_")
                  ? undefined
                  : contact.href
              }
              target={
                contact.href.startsWith("mailto:")
                  ? undefined
                  : "_blank"
              }
              rel="noreferrer"
              className={`contact-link ${
                contact.href.startsWith("YOUR_")
                  ? "contact-link-disabled"
                  : ""
              }`}
              onClick={(event) => {
                if (contact.href.startsWith("YOUR_")) {
                  event.preventDefault();
                }
              }}
            >
              <span className="contact-link-number">
                {contact.number}
              </span>

              <span className="contact-link-icon">
                {contact.icon}
              </span>

              <span className="contact-link-info">
                <small>{contact.label}</small>
                <strong>{contact.handle}</strong>
              </span>

              <span className="contact-link-arrow">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="thank-you">
  <div className="thank-you-doodle">
    <svg
      viewBox="0 0 520 330"
      className="doodle-svg"
      aria-label="Cute developer desk doodle"
    >
      {/* little stars */}
      <path className="doodle-line" d="M65 48 l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" />
      <path className="doodle-line pink-line" d="M430 52 l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" />

      {/* tiny sparkle */}
      <path className="doodle-line" d="M390 105 l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />

      {/* steam from coffee */}
      <path className="doodle-line steam" d="M75 164 C62 150 88 143 73 128" />
      <path className="doodle-line steam" d="M92 164 C80 150 104 143 91 127" />

      {/* coffee cup */}
      <path
        className="doodle-line"
        d="M48 165 Q48 155 58 155 H105 Q115 155 115 165 L110 205 Q108 215 98 215 H65 Q55 215 53 205Z"
      />
      <path
        className="doodle-line"
        d="M115 170 Q140 168 138 185 Q136 200 112 195"
      />
      <path className="pink-line doodle-line" d="M62 181 H103" />

      {/* laptop screen */}
      <rect
        x="155"
        y="70"
        width="230"
        height="145"
        rx="8"
        className="doodle-line"
      />

      {/* laptop top details */}
      <circle cx="172" cy="85" r="3" className="doodle-fill-pink" />
      <circle cx="183" cy="85" r="3" className="doodle-fill" />
      <circle cx="194" cy="85" r="3" className="doodle-fill" />

      {/* terminal inside laptop */}
      <text x="178" y="115" className="doodle-code">
        $ whoami
      </text>

      <text x="178" y="140" className="doodle-code pink-text">
        Priyanka
      </text>

      <text x="178" y="165" className="doodle-code">
        $ keep_building
      </text>

      <text x="178" y="190" className="doodle-code pink-text">
        &gt;_
      </text>

      {/* laptop base */}
      <path
        className="doodle-line"
        d="M135 218 Q145 212 155 212 H385 Q395 212 405 218 L430 237 H110Z"
      />

      {/* tiny keyboard */}
      <path className="doodle-line" d="M175 220 H365" />
      <path className="doodle-line" d="M195 227 H345" />

      {/* heart */}
      <path
        className="pink-line doodle-line heart-doodle"
        d="M420 140
           C405 122 378 139 388 158
           C396 174 420 188 420 188
           C420 188 444 174 452 158
           C462 139 435 122 420 140Z"
      />

      {/* little arrow */}
      <path className="doodle-line" d="M360 270 Q400 250 440 270" />
      <path className="doodle-line" d="M430 260 L440 270 L429 278" />

      {/* handwritten message */}
      <text x="155" y="285" className="doodle-handwriting">
        thank you ♡
      </text>

      {/* tiny desk line */}
      <path className="doodle-line" d="M40 240 Q260 248 475 240" />

      {/* tiny decoration */}
      <path className="doodle-line" d="M55 260 q8-15 16 0 q8-15 16 0" />
    </svg>
  </div>

  <div className="thank-you-text">
    <div className="thank-you-small">END OF PORTFOLIO</div>

    <h2>
      see you
      <span>around.</span>
    </h2>

    <p>
      Thanks for stopping by.
      <br />
      Keep building something you believe in.
    </p>

    <div className="thank-you-command">
      <span>~</span> exit(0);
    </div>
  </div>
</div>

      {/* Footer */}
      <div className="contact-bottom-left">
        ✦ built with curiosity &amp; coffee
      </div>

      <div className="contact-bottom-right">
        /contact _
      </div>

      <div className="contact-year">
        ( 2026 )
      </div>
    </section>
  );
}