import "./Projects.css";

const projects = [
  {
    number: "01",
    type: "FEATURED PROJECT",
    title: "AI Job Tracker",

    description:
      "A full-stack job application tracker that helps manage applications, track hiring stages, and check resume fit against job descriptions.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "AI",
    ],

    status: "DEPLOYED",
    featured: true,

    live: "https://job-tracker-hazel-ten.vercel.app/",
    github: "https://github.com/PriyankaVerma2307/job-tracker",

    preview: [
      ["APPLICATIONS", "42"],
      ["INTERVIEWS", "08"],
      ["SELECTED", "03"],
      ["REJECTED", "17"],
    ],
  },

  {
    number: "02",
    type: "FULL STACK",
    title: "Expert Booking App",

    description:
      "A full-stack platform for discovering experts, viewing available slots, and managing bookings with real-time communication.",

    tech: [
      "React",
      "Vite",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
    ],

    status: "DEPLOYED",
    featured: false,

    live: "https://expert-project-lemon.vercel.app/",
    github: "https://github.com/PriyankaVerma2307/Expert-project",

    preview: [
      ["AVAILABLE", "10:00"],
      ["AVAILABLE", "11:30"],
      ["BOOKED", "14:00"],
      ["AVAILABLE", "16:30"],
    ],
  },

  {
    number: "03",
    type: "LIVE OPERATIONS DASHBOARD",
    title: "Instant Mechanic",

    description:
      "A real-time operations dashboard for monitoring customers, mechanics and service bookings with live metrics, analytics and booking status updates.",

    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Recharts",
    ],

    status: "DEPLOYED",
    featured: false,

    live: "https://instant-mechanic-live-dashboard-five.vercel.app/",
    github: "https://github.com/PriyankaVerma2307/instant-mechanic-live-dashboard",

    preview: [
      ["CUSTOMERS", "60"],
      ["MECHANICS", "25"],
      ["BOOKINGS", "600"],
      ["PENDING", "66"],
    ],
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">

      {/* Background code */}
      <div className="projects-code-bg" aria-hidden="true">
        <span>const projects = await build();</span>
        <span>git add . → git commit → git push</span>
        <span>npm run build &amp;&amp; npm run deploy</span>
        <span>010101 110010 001011</span>
        <span>if (idea) → code → ship();</span>
      </div>

      {/* Header */}
      <div className="projects-header">

        <div className="projects-label">
          <span>05.</span> Selected Work
        </div>

        <div className="projects-header-note">
          things I&apos;ve built
          <span>↙</span>
        </div>

        <div className="projects-status">
          <span className="status-dot"></span>
          PROJECTS_STATUS: ONLINE
        </div>

      </div>

      {/* Intro */}
      <div className="projects-intro">

        <div className="projects-command">
          &gt; projects --showcase<span>_</span>
        </div>

        <h1>
          things I&apos;ve
          <br />
          <em>built.</em>
        </h1>

        <p>
          Real projects, real bugs, real deployments.
          <br />
          Built while learning, breaking and rebuilding.
        </p>

      </div>

      {/* Projects */}
      <div className="projects-list">

        {projects.map((project) => (
          <article
            className={`project-card ${
              project.featured ? "featured" : ""
            }`}
            key={project.number}
          >

            {/* Card top */}
            <div className="project-top">

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-type">
                {project.type}
              </div>

              <div className="project-status">
                <span>●</span> {project.status}
              </div>

            </div>

            {/* Main content */}
            <div className="project-main">

              {/* Project information */}
              <div className="project-info">

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                {/* Tech stack */}
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Project visual */}
              <div className="project-visual">

                <div className="project-window">

                  {/* Browser / terminal top */}
                  <div className="window-top">

                    <span></span>
                    <span></span>
                    <span></span>

                    <small>
                      {project.title
                        .toLowerCase()
                        .replaceAll(" ", "-")}
                    </small>

                  </div>

                  {/* Preview */}
                  <div className="window-content">

                    <div className="preview-title">
                      {project.title === "AI Job Tracker"
                        ? "JOB DASHBOARD"
                        : project.title === "Expert Booking App"
                        ? "BOOKING SLOTS"
                        : "LIVE OPERATIONS"}
                    </div>

                    <div className="preview-stats">

                      {project.preview.map(
                        ([label, value]) => (
                          <div
                            className="preview-row"
                            key={`${label}-${value}`}
                          >

                            <span className="preview-label">
                              {label}
                            </span>

                            <span className="preview-value">
                              {value}
                            </span>

                          </div>
                        )
                      )}

                    </div>

                    <div className="preview-line"></div>

                    <div className="window-code">
                      &lt;/&gt;
                    </div>

                  </div>

                </div>

                <div className="visual-label">
                  BUILD / SHIP / REPEAT
                </div>

              </div>

            </div>

            {/* Bottom */}
            <div className="project-bottom">

              <div className="project-index">
                PROJECT_{project.number}
              </div>

              <div className="project-links">

                {/* Live */}
                <a
                  href={
                    project.live.startsWith("http")
                      ? project.live
                      : undefined
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={`project-link ${
                    !project.live.startsWith("http")
                      ? "disabled"
                      : ""
                  }`}
                  onClick={(event) => {
                    if (!project.live.startsWith("http")) {
                      event.preventDefault();
                    }
                  }}
                >
                  ↗ LIVE DEMO
                </a>

                {/* GitHub */}
                <a
                  href={
                    project.github.startsWith("http")
                      ? project.github
                      : undefined
                  }
                  target="_blank"
                  rel="noreferrer"
                  className={`project-link ${
                    !project.github.startsWith("http")
                      ? "disabled"
                      : ""
                  }`}
                  onClick={(event) => {
                    if (!project.github.startsWith("http")) {
                      event.preventDefault();
                    }
                  }}
                >
                  ↗ GITHUB
                </a>

              </div>

            </div>

          </article>
        ))}

      </div>

      {/* Handwritten notes */}
      <div className="projects-note projects-note-one">
        built it.
        <br />
        broke it.
        <br />
        fixed it. ♡
      </div>

      <div className="projects-note projects-note-two">
        no shortcuts
        <br />
        just practice →
      </div>

      {/* Bottom decoration */}
      <div className="projects-bottom-left">
        ✦ code is better when it ships.
      </div>

      <div className="projects-bottom-right">
        /projects _
      </div>

    </section>
  );
}