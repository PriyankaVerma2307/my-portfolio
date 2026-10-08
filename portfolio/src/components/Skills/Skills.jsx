import "./Skills.css";

const skillGroups = [
  {
    title: "FRONTEND",
    number: "01",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    number: "02",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "DATABASE",
    number: "03",
    skills: ["MongoDB", "Supabase", "Firebase", "SQL"],
  },
  {
    title: "LANGUAGES",
    number: "04",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "TOOLS",
    number: "05",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Vercel"],
  },
  {
    title: "AI / OTHER",
    number: "06",
    skills: ["AI APIs", "GenAI", "Prompt Engineering"],
  },
];

/* Technology icons */
const skillIcons = {
  React: "devicon-react-original",
  JavaScript: "devicon-javascript-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  "Tailwind CSS": "devicon-tailwindcss-original",

  "Node.js": "devicon-nodejs-plain",
  "Express.js": "devicon-express-original",

  MongoDB: "devicon-mongodb-plain",
  Supabase: "devicon-supabase-plain",
  Firebase: "devicon-firebase-plain",
  SQL: "devicon-mysql-plain",

  Java: "devicon-java-plain",

  Git: "devicon-git-plain",
  GitHub: "devicon-github-original",
  "VS Code": "devicon-vscode-plain",
  Postman: "devicon-postman-plain",
  Jira: "devicon-jira-plain",
  Vercel: "devicon-vercel-original",
};

export default function Skills() {
  return (
    <section className="skills-section" id="skills">

      {/* Background code */}
      <div className="skills-code-bg" aria-hidden="true">
        <span>const skills = ["React", "Node", "Java"];</span>
        <span>git add . → git commit → git push</span>
        <span>npm run dev</span>
        <span>010101 110010 001011</span>
        <span>build(); learn(); repeat();</span>
      </div>

      {/* 3D Orbit */}
      <div className="skills-orbit" aria-hidden="true">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="orbit-core">
          &lt;/&gt;
        </div>
      </div>

      {/* Header */}
      <div className="skills-header">

        <div className="skills-label">
          <span>04.</span> Stack
        </div>

        <div className="skills-header-note">
          things I build with
          <span>↙</span>
        </div>

        {/* Status */}
        <div className="skills-status">
          <span className="status-dot"></span>
          STACK_STATUS: ACTIVE
        </div>

      </div>

      <div className="skills-content">

        {/* LEFT - Intro */}
        <div className="skills-intro">

          <div className="skills-command">
            &gt; skills --list<span>_</span>
          </div>

          <h1>
            tools of
            <br />
            <em>the trade.</em>
          </h1>

          <p>
            A growing toolkit built through projects,
            practice, debugging and a lot of curiosity.
          </p>

          <div className="skills-intro-meta">
            <span>01</span>
            <span>→</span>
            <span>BUILD / LEARN / REPEAT</span>
          </div>

        </div>

        {/* RIGHT - Skills */}
        <div className="skills-grid">

          {skillGroups.map((group) => (
            <div
              className="skill-group"
              key={group.number}
            >

              {/* Group heading */}
              <div className="skill-group-top">
                <span>{group.number}</span>
                <h2>{group.title}</h2>
              </div>

              {/* Skills */}
              <div className="skill-list">

                {group.skills.map((skill, index) => (
                  <div
                    className="skill-item"
                    key={skill}
                  >

                    {/* Arrow */}
                    <span className="skill-arrow">
                      {index % 2 === 0 ? "→" : "↳"}
                    </span>

                    {/* Icon */}
                    <span className="skill-icon">

                      {skillIcons[skill] ? (
                        <i className={skillIcons[skill]}></i>
                      ) : (
                        <span className="fallback-icon">
                          ✦
                        </span>
                      )}

                    </span>

                    {/* Skill name */}
                    <span className="skill-name">
                      {skill}
                    </span>

                    {/* Hover arrow */}
                    <span className="skill-hover">
                      ↗
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Handwritten Notes */}
      <div className="skills-note skills-note-one">
        still learning.
        <br />
        still building. ♡
      </div>

      <div className="skills-note skills-note-two">
        no shortcuts
        <br />
        just practice →
      </div>

      {/* Bottom */}
      <div className="skills-bottom-left">
        ✦ curiosity &gt; perfection
      </div>

      <div className="skills-bottom-right">
        /stack _
      </div>

    </section>
  );
}