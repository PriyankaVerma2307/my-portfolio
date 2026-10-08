import "./Navigation.css";

const sections = [
  { id: "about", number: "03", label: "About" },
  { id: "skills", number: "04", label: "Skills" },
  { id: "projects", number: "05", label: "Projects" },
  { id: "experience", number: "06", label: "Experience" },
  { id: "achievements", number: "07", label: "Achievements" },
  { id: "contact", number: "08", label: "Contact" },
];

export default function Navigation({
  currentPage,
  onNavigate,
  onNext,
  onBack,
  onHome,
}) {
  const currentIndex = sections.findIndex(
    (section) => section.id === currentPage
  );

  const currentSection = sections[currentIndex];

  return (
    <>
      {/* SIDE MENU */}
      <aside className="side-menu">

        {/* HOME / OPENING */}
        <button
          className="side-menu-name"
          onClick={onHome}
          type="button"
          aria-label="Go to homepage"
        >
          PRIYANKA
          <span>.VERMA</span>
        </button>

        <div className="side-menu-line" />

        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`side-menu-item ${
                currentPage === section.id ? "active" : ""
              }`}
              onClick={() => onNavigate(section.id)}
            >
              <span className="menu-number">
                {section.number}
              </span>

              <span className="menu-arrow">
                {currentPage === section.id ? "→" : ""}
              </span>

              <span>{section.label}</span>
            </button>
          ))}
        </nav>

        <div className="side-menu-divider" />

        {/* RESUME */}
        <button
          className="resume-link"
          onClick={() =>
            window.open("/Priyanka_Resume.pdf", "_blank")
          }
        >
          ↳ VIEW RESUME
        </button>
      </aside>

      {/* CURRENT PAGE INDICATOR */}
      <div className="page-indicator">
        <span>PRIYANKA.VERMA</span>

        <div className="page-progress">
          <span>{currentSection.number}</span>
          <span>/ 08</span>
        </div>

        <span className="page-name">
          {currentSection.label.toUpperCase()}
        </span>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="page-navigation">
        <button
          className="nav-button"
          onClick={onBack}
          disabled={currentIndex === 0}
        >
          ← BACK
        </button>

        <span className="keyboard-hint">
          ← ↑ ↓ →
        </span>

        <button
          className="nav-button"
          onClick={onNext}
          disabled={currentIndex === sections.length - 1}
        >
          NEXT →
        </button>
      </div>
    </>
  );
}