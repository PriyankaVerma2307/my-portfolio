import "./Experience.css";

const experiences = [
  {
    number: "01",
    period: "JUL 2026 → PRESENT",
    type: "INTERNSHIP",
    role: "Software Developer Intern",
    company: "VedNova AI Technologies",

    stack: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
    ],

    points: [
      "Developing and maintaining full-stack web applications.",
      "Built and enhanced production-ready features and responsive UI.",
      "Worked with GitHub and Jira in an Agile development workflow.",
      "Debugged application issues and worked on performance improvements.",
    ],
  },

  {
    number: "02",
    period: "2026",
    type: "OPEN SOURCE",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code '26",

    stack: [
      "Git",
      "GitHub",
      "Open Source",
      "Collaboration",
    ],

    points: [
      "Contributed to open-source projects through the GSSoC '26 program.",
      "Worked with collaborative Git and GitHub workflows.",
      "Participated in an open-source development environment.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">

      {/* Background code */}
      <div className="experience-code-bg" aria-hidden="true">
        <span>git checkout -b feature/experience</span>
        <span>git commit -m "keep building"</span>
        <span>code(); debug(); repeat();</span>
        <span>010101 110010 001011</span>
        <span>const journey = &lt;keepGoing /&gt;;</span>
      </div>

      {/* Header */}
      <div className="experience-header">

        <div className="experience-label">
          <span>06.</span> Experience
        </div>

        <div className="experience-header-note">
          where I learned
          <br />
          to build <span>↙</span>
        </div>

        <div className="experience-status">
          <span className="status-dot"></span>
          CAREER_LOG: ACTIVE
        </div>

      </div>

      {/* Intro */}
      <div className="experience-intro">

        <div className="experience-command">
          &gt; experience --log<span>_</span>
        </div>

        <h1>
          where I
          <br />
          <em>learned to build.</em>
        </h1>

        <p>
          From writing code for real products to contributing
          <br />
          to open-source projects.
        </p>

      </div>

      {/* Timeline */}
      <div className="experience-timeline">

        <div className="timeline-line"></div>

        {experiences.map((experience) => (
          <article
            className="experience-item"
            key={experience.number}
          >

            {/* Timeline marker */}
            <div className="timeline-marker">
              <span>{experience.number}</span>
            </div>

            {/* Date */}
            <div className="experience-period">
              {experience.period}
            </div>

            {/* Main card */}
            <div className="experience-card">

              <div className="experience-card-top">

                <span className="experience-type">
                  {experience.type}
                </span>

                <span className="experience-index">
                  EXP_{experience.number}
                </span>

              </div>

              <div className="experience-card-content">

                {/* Left */}
                <div className="experience-main">

                  <h2>
                    {experience.role}
                  </h2>

                  <div className="experience-company">
                    @ {experience.company}
                  </div>

                  {/* Stack */}
                  <div className="experience-stack">
                    {experience.stack.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Work */}
                  <div className="experience-work">

                    <div className="work-title">
                      <span>›</span> WHAT I DID
                    </div>

                    {experience.points.map((point, index) => (
                      <div
                        className="work-point"
                        key={index}
                      >
                        <span className="point-number">
                          0{index + 1}
                        </span>

                        <p>{point}</p>
                      </div>
                    ))}

                  </div>

                </div>

                {/* Right terminal */}
                <div className="experience-terminal">

                  <div className="terminal-header">

                    <span className="terminal-dot pink"></span>
                    <span className="terminal-dot yellow"></span>
                    <span className="terminal-dot green"></span>

                    <span>
                      career.log
                    </span>

                  </div>

                  <div className="terminal-body">

                    <p>
                      <span className="terminal-pink">
                        $
                      </span>{" "}
                      role
                    </p>

                    <p className="terminal-value">
                      {experience.role}
                    </p>

                    <p>
                      <span className="terminal-pink">
                        $
                      </span>{" "}
                      organization
                    </p>

                    <p className="terminal-value">
                      {experience.company}
                    </p>

                    <p>
                      <span className="terminal-pink">
                        $
                      </span>{" "}
                      status
                    </p>

                    <p className="terminal-value">
                      {experience.number === "01"
                        ? "● CURRENT"
                        : "● COMPLETE"}
                    </p>

                    <p className="terminal-cursor">
                      <span>$</span> _
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </article>
        ))}

      </div>

      {/* Handwritten notes */}
      <div className="experience-note experience-note-one">
        first internship
        <br />
        first real codebase ♡
      </div>

      <div className="experience-note experience-note-two">
        open source →
        <br />
        keep contributing
      </div>

      {/* Bottom */}
      <div className="experience-bottom-left">
        ✦ learn → build → contribute
      </div>

      <div className="experience-bottom-right">
        /experience _
      </div>

    </section>
  );
}