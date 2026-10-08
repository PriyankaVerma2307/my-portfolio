import { useEffect, useState } from "react";

import Opening from "./components/Opening/Opening";
import Transition from "./components/Transition/Transition";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Navigation from "./components/Navigation/Navigation";
import Experience from "./components/Experience/Experience";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact/Contact";

const sections = [
  "about",
  "skills",
  "projects",
  "experience",
  "achievements",
  "contact",
];

function App() {
  const [page, setPage] = useState("opening");

  const currentIndex = sections.indexOf(page);

  /* =========================
     NAVIGATION
  ========================= */

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      setPage(sections[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setPage(sections[currentIndex - 1]);
    } else {
      setPage("transition");
    }
  };

  /* =========================
     GO BACK TO OPENING / HOME
  ========================= */

  const handleHome = () => {
    setPage("opening");
  };

  /* =========================
     KEYBOARD NAVIGATION
  ========================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Don't navigate with arrow keys
      // on opening or transition screen
      if (page === "opening" || page === "transition") {
        return;
      }

      if (event.key === "ArrowRight") {
        handleNext();
      }

      if (event.key === "ArrowLeft") {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page, currentIndex]);

  /* =========================
     OPENING PAGE
  ========================= */

  if (page === "opening") {
    return (
      <Opening
        onEnter={() => setPage("transition")}
      />
    );
  }

  /* =========================
     TRANSITION PAGE
  ========================= */

  if (page === "transition") {
    return (
      <Transition
        onContinue={() => setPage("about")}
      />
    );
  }

  /* =========================
     MAIN PORTFOLIO
  ========================= */

  return (
    <>
      {/* ABOUT */}
      {page === "about" && <About />}

      {/* SKILLS */}
      {page === "skills" && <Skills />}

      {/* PROJECTS */}
      {page === "projects" && <Projects />}

      {/* EXPERIENCE */}
      {page === "experience" && <Experience />}

      {/* ACHIEVEMENTS */}
      {page === "achievements" && <Achievements />}

      {/* CONTACT */}
      {page === "contact" && <Contact />}

      {/* SIDE NAVIGATION */}
      <Navigation
        currentPage={page}
        onNavigate={setPage}
        onNext={handleNext}
        onBack={handleBack}
        onHome={handleHome}
      />
    </>
  );
}

export default App;