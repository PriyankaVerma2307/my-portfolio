import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      {/* Background code */}
      <div className="about-code-bg" aria-hidden="true">
        <span>{"{ } => ( ) ; const let return"}</span>
        <span>{"<div> <section> </section> </div>"}</span>
        <span>{"01 10 01 11 00 10 01 11"}</span>
        <span>{"function build() { return idea; }"}</span>
        <span>{"npm run dev && git push"}</span>
      </div>

      {/* Section label */}
      <div className="about-label">
        <span>03.</span> About Me
      </div>

      {/* Handwritten note */}
      <div className="about-note">
        coffee → code → repeat
        <span>♡</span>
        <div className="about-note-arrow">↘</div>
      </div>

      <div className="about-inner">

        {/* LEFT */}
        <div className="about-left">
          <div className="about-small-line">
            &gt; who_am_i<span>_</span>
          </div>

          <h1>
            hello,
            <br />
            <span>I'm Priyanka.</span>
          </h1>

          <div className="about-underline">
            ────────────────
          </div>

          <p className="about-intro">
            I'm an MCA student and software developer who enjoys
            turning ideas into useful, working products.
          </p>

          <p className="about-description">
            I mainly work with JavaScript, React, Node.js and MongoDB.
            I also enjoy solving problems with Java and continuously
            improving my DSA and development skills.
          </p>

          <div className="about-signature">
            Priyanka
            <span>♡</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right">

          <div className="terminal-box">
            <div className="terminal-top">
              <span className="terminal-dot pink"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>

              <span className="terminal-title">
                priyanka@portfolio:~
              </span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="terminal-pink">$</span> whoami
              </p>

              <p className="terminal-value">
                Priyanka Verma
              </p>

              <p>
                <span className="terminal-pink">$</span> role
              </p>

              <p className="terminal-value">
                Software Developer
              </p>

              <p>
                <span className="terminal-pink">$</span> education
              </p>

              <p className="terminal-value">
                MCA • 2026
              </p>

              <p>
                <span className="terminal-pink">$</span> solved
              </p>

              <p className="terminal-value">
                200+ LeetCode
              </p>

              <p>
                <span className="terminal-pink">$</span> community
              </p>

              <p className="terminal-value">
                GSSoC '26 Contributor
              </p>

              <p className="terminal-cursor">
                <span>$</span> _
              </p>
            </div>
          </div>

          {/* Current focus */}
          <div className="focus-box">
            <div className="focus-title">
              currently:
            </div>

            <div className="focus-item">
              <span>✓</span> learning DSA
            </div>

            <div className="focus-item">
              <span>✓</span> building projects
            </div>

            <div className="focus-item">
              <span>✓</span> growing every day
            </div>

            <div className="focus-heart">♡</div>
          </div>

        </div>
      </div>

      {/* Bottom decoration */}
      <div className="about-bottom-left">
        <span>✦</span> keep building.
      </div>

      <div className="about-bottom-right">
        /about_me _
      </div>

      <div className="about-year">
        ( 2026 )
      </div>
    </section>
  );
}