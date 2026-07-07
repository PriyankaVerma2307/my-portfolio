import React, { useState, useEffect } from "react";
import "./index.css";
import {
  resumeLink,
  certificateLinks,
  badgeLinks,
  achievements
} from "./portfolioConfig";

// ==========================================
// CUSTOM SVG ICONS & BRAND LOGOS
// ==========================================
const Icons = {
  Github: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  Linkedin: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" rx="1" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  ),
  Mail: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1rem", height: "1rem" }}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  Download: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1rem", height: "1rem" }}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  Briefcase: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  ),
  GraduationCap: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  ),
  Award: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Code: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Terminal: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 15h3" />
      <path d="M1 9h3" />
      <path d="M1 15h3" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),

  // BRAND LOGOS (SVGs)
  Microsoft: () => (
    <svg className="brand-logo" viewBox="0 0 23 23" fill="none" style={{ width: "1.3rem", height: "1.3rem" }}>
      <rect width="11" height="11" fill="#F25022" />
      <rect x="12" width="11" height="11" fill="#7FBA00" />
      <rect y="12" width="11" height="11" fill="#00A4EF" />
      <rect x="12" y="12" width="11" height="11" fill="#FFB900" />
    </svg>
  ),
  IBM: () => (
    <svg className="brand-logo" viewBox="0 0 40 16" fill="none" style={{ width: "2.4rem", height: "1rem" }}>
      <path d="M0 0h40v2H0zm0 3h40v2H0zm0 3h40v2H0zm0 3h40v2H0zm0 3h40v2H0zm0 3h40v2H0z" fill="#006699" />
      <text x="4" y="12" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="system-ui" letterSpacing="2">IBM</text>
    </svg>
  ),
  EY: () => (
    <svg className="brand-logo" viewBox="0 0 120 60" style={{ width: "3rem", height: "1.5rem" }} xmlns="http://www.w3.org/2000/svg">
      <path d="M45.8,43.4v-3.5h7.7v-4.4h-7.7V32h8.5l-2.8-4.8H39.4v21.1h17v-4.8H45.8z M67.7,27.1L64.1,34l-3.6-6.9h-7l7.4,12.7v8.3h6.4v-8.3l7.4-12.7H67.7z" fill="#FFE600" />
      <polygon points="81,5.8 39,21 81,13.6" fill="#FFE600" />
    </svg>
  ),
  LeetCode: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.038-1.902l-2.697-2.606c-.466-.466-1.111-.662-1.823-.662s-1.357.196-1.824.662l-4.332 4.363c-.467.467-.702 1.15-.702 1.863s.235 1.357.702 1.824l4.319 4.38c.467.467 1.125.645 1.837.645s1.357-.195 1.823-.662l2.697-2.606c.514-.515 1.365-.497 1.9.038.535.536.553 1.387.038 1.902zM21.05 10.204l-7.319-7.319c-.466-.466-1.111-.662-1.823-.662s-1.357.195-1.824.662l-1.31 1.31c-.514.515-.514 1.388 0 1.902.514.515 1.387.515 1.902 0l1.31-1.31c.466-.466 1.111-.662 1.823-.662s1.357.195 1.824.662l7.319 7.319c.466.466.662 1.111.662 1.823s-.195 1.357-.662 1.824l-3.327 3.327c-.514.515-.514 1.388 0 1.902.514.515 1.387.515 1.902 0l3.327-3.327c.467-.467.702-1.15.702-1.863s-.235-1.357-.702-1.824z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.25rem", height: "1.25rem" }}>
      <path d="M20.52 3.449A9.63 9.63 0 0 0 13.568.5a9.66 9.66 0 0 0-9.66 9.66c0 1.703.442 3.36 1.284 4.814L3.1 21.05l5.525-1.448a9.61 9.61 0 0 0 4.59 1.17h.004a9.66 9.66 0 0 0 9.66-9.66c0-2.58-1.005-5.008-2.83-6.832zm-6.952 15.65h-.003a8.006 8.006 0 0 1-4.08-1.115l-.293-.173-3.033.795 1.104-2.955-.19-.304a8.03 8.03 0 0 1-1.22-4.265c0-4.425 3.601-8.025 8.025-8.025a8.006 8.006 0 0 1 5.684 2.356 8.006 8.006 0 0 1 2.357 5.684c-.004 4.424-3.602 8.024-8.026 8.024zm4.394-6.024c-.24-.12-1.424-.712-1.644-.794-.22-.083-.38-.124-.54.124-.16.248-.621.794-.761.957-.14.164-.28.184-.521.063-.24-.121-1.014-.374-1.93-1.192-.713-.635-1.195-1.42-1.336-1.666-.14-.246-.015-.38.107-.503.111-.111.248-.29.372-.435.124-.145.165-.248.248-.413.083-.165.042-.31-.02-.434-.063-.124-.54-1.301-.741-1.782-.2-.464-.403-.401-.54-.408-.14-.007-.3-.008-.46-.008a.885.885 0 0 0-.642.298c-.22.247-.841.821-.841 2.003s.862 2.331.982 2.495c.121.164 1.696 2.589 4.108 3.635.574.248 1.022.397 1.372.506.577.183 1.102.157 1.516.096.462-.068 1.423-.582 1.622-1.145.2-.563.2-.958.14-1.145-.06-.184-.22-.297-.461-.416z" />
    </svg>
  )
};

export default function App() {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSkillTab, setActiveSkillTab] = useState("all");
  const [showBTT, setShowBTT] = useState(false);

  // Certificate Modal State
  const [activeCertModal, setActiveCertModal] = useState(null);

  // Typewriter effect state for taglines
  const [typewriterText, setTypewriterText] = useState("");
  const taglines = [
    "Full Stack Developer",
    "MERN Stack Specialist",
    "AI Integration Enthusiast",
    "Creative Problem Solver"
  ];
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ==========================================
  // SIDE EFFECTS
  // ==========================================

  // Loading animation simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Custom Cursor Glow Position Tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll Tracking (Progress indicator, Navbar highlight, Back To Top button)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      setIsScrolled(window.scrollY > 50);
      setShowBTT(window.scrollY > 400);

      // Section spy
      const sections = ["home", "about", "skills", "projects", "certifications", "achievements", "timeline", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter Effect logic
  useEffect(() => {
    if (isLoading) return;

    let timer;
    const currentFullText = taglines[taglineIdx];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setTypewriterText(currentFullText.substring(0, typewriterText.length + 1));
      }, 100);

      if (typewriterText === currentFullText) {
        // Wait before starting delete
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setTypewriterText(currentFullText.substring(0, typewriterText.length - 1));
      }, 50);

      if (typewriterText === "") {
        setIsDeleting(false);
        setTaglineIdx((prev) => (prev + 1) % taglines.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, taglineIdx, isLoading]);

  // ==========================================
  // HANDLERS
  // ==========================================
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };



  // ==========================================
  // DATA STRUCTS
  // ==========================================

  // Skills organized by tabs
  const skillsData = {
    frontend: [
      { name: "HTML", level: "Expert", pct: 95 },
      { name: "CSS", level: "Expert", pct: 92 },
      { name: "JavaScript", level: "Expert", pct: 90 },
      { name: "React.js", level: "Expert", pct: 88 },
      { name: "Bootstrap", level: "Intermediate", pct: 85 }
    ],
    backend: [
      { name: "Node.js", level: "Expert", pct: 85 },
      { name: "Express.js", level: "Expert", pct: 85 }
    ],
    database: [
      { name: "MongoDB", level: "Expert", pct: 85 },
      { name: "MongoDB Atlas", level: "Expert", pct: 85 },
      { name: "Firebase", level: "Intermediate", pct: 75 }
    ],
    programming: [
      { name: "Java", level: "Expert", pct: 85 },
      { name: "JavaScript", level: "Expert", pct: 90 }
    ],
    ai: [
      { name: "Prompt Engineering", level: "Expert", pct: 92 },
      { name: "AI API Integration", level: "Expert", pct: 88 },
      { name: "Generative AI", level: "Intermediate", pct: 80 }
    ],
    tools: [
      { name: "Git", level: "Expert", pct: 85 },
      { name: "GitHub", level: "Expert", pct: 90 },
      { name: "Vercel", level: "Expert", pct: 88 },
      { name: "VS Code", level: "Expert", pct: 95 }
    ],
    core: [
      { name: "Data Structures", level: "Intermediate", pct: 80 },
      { name: "OOP", level: "Expert", pct: 85 },
      { name: "DBMS", level: "Expert", pct: 85 },
      { name: "Operating Systems", level: "Intermediate", pct: 75 },
      { name: "MVC Architecture", level: "Expert", pct: 88 }
    ]
  };

  const allSkills = Object.values(skillsData).flat();

  // Projects Details
  const projectsData = [
    {
      id: "ai-job-tracker",
      title: "AI Job Tracker",
      desc: "An AI-powered MERN application that helps users track job applications, manage interviews, analyze resumes, and receive AI-powered job compatibility suggestions.",
      features: ["Authentication", "Dashboard", "Resume Matching", "AI Integration", "Job Tracking", "Filters", "Search"],
      tech: ["React", "Node.js", "Express", "MongoDB", "AI APIs"],
      accentClass: "tag-violet",
      glowClass: "project-glow-1",
      icon: "🤖",
      previewImage: "/project-ai-job-tracker.png",
      demoUrl: "https://job-tracker-hazel-ten.vercel.app/",
      githubUrl: "https://github.com/PriyankaVerma2307/job-tracker"
    },
    {
      id: "expert-booking",
      title: "Expert Booking Platform",
      desc: "A modern appointment booking platform where users can book experts, manage appointments, and schedule available slots.",
      features: ["Authentication", "Slot Booking", "Dashboard", "Responsive Design", "Booking Management"],
      tech: ["React", "Node.js", "Express", "MongoDB"],
      accentClass: "tag-cyan",
      glowClass: "project-glow-2",
      icon: "📅",
      previewImage: "/project-expert-booking.png",
      demoUrl: "https://expert-project-lemon.vercel.app/",
      githubUrl: "https://github.com/PriyankaVerma2307/Expert-project"
    },
    {
      id: "bhajan-mgmt",
      title: "Bhajan Management System",
      desc: "A MERN web application developed for organizing satsang bhajans with smart duplicate detection and repetition prevention.",
      features: ["Bhajan Management", "Duplicate Detection", "Search", "Pagination", "CRUD Operations", "60+ Satsang Optimization"],
      tech: ["React", "Node.js", "Express", "MongoDB Atlas"],
      accentClass: "tag-emerald",
      glowClass: "project-glow-3",
      icon: "🎶",
      previewImage: "/project-bhajan-mgmt.png",
      demoUrl: "https://vercel-frontend-smoky.vercel.app",
      githubUrl: "https://github.com/PriyankaVerma2307/vercel-frontend"
    }
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* Entrance Loader */}
      <div className={`loader-wrapper ${!isLoading ? "hidden" : ""}`}>
        <div className="loader-spinner"></div>
        <div className="loader-text">Loading Priyanka's Workspace...</div>
      </div>

      {/* Radial Cursor Glow Tracker */}
      <div className="cursor-glow" />

      {/* Sticky Glassmorphism Header */}
      <header className={`navbar-wrapper ${isScrolled ? "scrolled" : "not-scrolled"}`}>
        <div className="container nav-container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "home")}>
            PV<span>.dev</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li>
              <a href="#home" className={`nav-link ${activeSection === "home" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={`nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className={`nav-link ${activeSection === "projects" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" className={`nav-link ${activeSection === "certifications" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "certifications")}>
                Certifications
              </a>
            </li>
            <li>
              <a href="#achievements" className={`nav-link ${activeSection === "achievements" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "achievements")}>
                Achievements & Badges
              </a>
            </li>
            <li>
              <a href="#timeline" className={`nav-link ${activeSection === "timeline" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "timeline")}>
                Timeline
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>

          {/* <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, "contact")}>
            Hire Me
          </a> */}

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#home" className={`mobile-nav-link ${activeSection === "home" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "home")}>
            Home
          </a>
          <a href="#about" className={`mobile-nav-link ${activeSection === "about" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "about")}>
            About Me
          </a>
          <a href="#skills" className={`mobile-nav-link ${activeSection === "skills" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "skills")}>
            Skills
          </a>
          <a href="#projects" className={`mobile-nav-link ${activeSection === "projects" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "projects")}>
            Projects
          </a>
          <a href="#certifications" className={`mobile-nav-link ${activeSection === "certifications" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "certifications")}>
            Certifications
          </a>
          <a href="#achievements" className={`mobile-nav-link ${activeSection === "achievements" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "achievements")}>
            Achievements
          </a>
          <a href="#timeline" className={`mobile-nav-link ${activeSection === "timeline" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "timeline")}>
            Timeline
          </a>
          <a href="#contact" className={`mobile-nav-link ${activeSection === "contact" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "contact")}>
            Contact
          </a>
        </div>
      </header>

      {/* ==========================================
         HERO SECTION
         ========================================== */}
      <section id="home" className="hero-section">
        <div className="grid-bg" />
        <div className="bg-glow-violet" style={{ top: "10%", left: "5%" }} />
        <div className="bg-glow-cyan" style={{ bottom: "10%", right: "10%" }} />

        <div className="container hero-grid">
          <div>
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              Open to Opportunities
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text-primary">Priyanka Verma</span>
            </h1>
            <div className="hero-taglines">
              <div className="hero-tagline-main">
                I am a <span className="gradient-text-secondary">{typewriterText}</span>
                <span className="typewriter-cursor">|</span>
              </div>
              <p className="hero-tagline-sub">
                Building scalable web applications powered by AI and modern web technologies. Focus on full-stack architecture, clean codebases, and interactive user flows.
              </p>
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary" onClick={(e) => handleNavClick(e, "projects")}>
                View Projects
                <Icons.ArrowUpRight />
              </a>
              <a href={resumeLink.viewUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View Resume
              </a>
              <a href={resumeLink.downloadUrl} download="Priyanka_Verma_Resume.pdf" className="btn-outline-glow">
                <Icons.Download />
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle-glow" />
            <div className="glass-panel hero-visual-card">
              <div className="hero-visual-header">
                <div className="hero-visual-dots">
                  <div className="hero-visual-dot" />
                  <div className="hero-visual-dot" />
                  <div className="hero-visual-dot" />
                </div>
                <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>priyanka.json</span>
              </div>
              <div className="hero-visual-content">
                <div className="hero-visual-code-line w-full accent-1" />
                <div className="hero-visual-code-line w-3-4" />
                <div className="hero-visual-code-line w-1-2 accent-2" />
                <div className="hero-visual-code-line w-2-3" />
                <div className="hero-visual-code-line w-3-4 accent-1" />
                <div className="hero-visual-code-line w-1-2" />
              </div>
              <div className="hero-visual-footer">
                <div className="hero-visual-avatar" />
                <div>
                  <div style={{ fontSize: "0.8rem", fontWeight: "700" }}>Priyanka Verma</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-secondary)" }}>LPU MCA Student</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="floating-badge fb-1">
              <Icons.Code /> React.js
            </div>
            <div className="floating-badge fb-2">
              <Icons.Cpu /> AI APIs
            </div>
            <div className="floating-badge fb-3">
              <Icons.Terminal /> MERN Stack
            </div>
          </div>
        </div>

        <div className="scroll-down-wrapper">
          <span className="scroll-down-text">Scroll Down</span>
          <div className="scroll-down-mouse">
            <div className="scroll-down-wheel" />
          </div>
        </div>
      </section>

      {/* ==========================================
         ABOUT ME SECTION
         ========================================== */}
      <section id="about" style={{ background: "var(--bg-dark-900)" }}>
        <div className="bg-glow-cyan" style={{ top: "20%", left: "-10%" }} />
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">About Me</h2>
            <div className="section-subtitle">A glimpse into my background, motivation, and metrics.</div>
          </div>

          <div className="about-grid">
            <div className="about-card-container">
              <div className="glass-panel about-image-card">
                <div className="about-glow" />
                <div className="about-image-wrapper">
                  <svg className="about-avatar-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 20a6 6 0 0 0-12 0" />
                    <circle cx="12" cy="10" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 18v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </div>
                <div className="about-status-tag">
                  <span className="hero-badge-dot" /> Available for Internships
                </div>
              </div>
            </div>

            <div className="about-text-content">
              <h3 className="about-title">Full Stack Developer & AI Enthusiast</h3>
              <p className="about-paragraph">
                I am an MCA student passionate about building real-world web applications using the MERN stack. I enjoy solving practical problems, creating user-friendly interfaces, integrating AI into products, and continuously improving my development skills. I believe in learning by building projects.
              </p>
              <p className="about-paragraph">
                With a strong curiosity about Generative AI, I proactively integrate APIs and construct smart agents that provide tailored user feedback, compatibility testing, and automatic workflows.
              </p>

              <div className="about-metrics">
                <div className="glass-panel about-metric-card">
                  <div className="about-metric-num gradient-text-primary">200+</div>
                  <div className="about-metric-label">LeetCode Solved</div>
                </div>
                <div className="glass-panel about-metric-card">
                  <div className="about-metric-num gradient-text-secondary">3+</div>
                  <div className="about-metric-label">MERN Web Apps</div>
                </div>
                <div className="glass-panel about-metric-card">
                  <div className="about-metric-num gradient-text-primary">2+</div>
                  <div className="about-metric-label">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         SKILLS SECTION
         ========================================== */}
      <section id="skills">
        <div className="bg-glow-violet" style={{ bottom: "5%", right: "-10%" }} />
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">My Skills</h2>
            <div className="section-subtitle">Proficiencies in web technologies, database management, programming, and AI.</div>
          </div>

          <div className="skills-nav">
            <button className={`skills-tab-btn ${activeSkillTab === "all" ? "active" : ""}`} onClick={() => setActiveSkillTab("all")}>All</button>
            <button className={`skills-tab-btn ${activeSkillTab === "frontend" ? "active" : ""}`} onClick={() => setActiveSkillTab("frontend")}>Frontend</button>
            <button className={`skills-tab-btn ${activeSkillTab === "backend" ? "active" : ""}`} onClick={() => setActiveSkillTab("backend")}>Backend</button>
            <button className={`skills-tab-btn ${activeSkillTab === "database" ? "active" : ""}`} onClick={() => setActiveSkillTab("database")}>Database</button>
            <button className={`skills-tab-btn ${activeSkillTab === "programming" ? "active" : ""}`} onClick={() => setActiveSkillTab("programming")}>Programming</button>
            <button className={`skills-tab-btn ${activeSkillTab === "ai" ? "active" : ""}`} onClick={() => setActiveSkillTab("ai")}>AI & GenAI</button>
            <button className={`skills-tab-btn ${activeSkillTab === "tools" ? "active" : ""}`} onClick={() => setActiveSkillTab("tools")}>Tools</button>
            <button className={`skills-tab-btn ${activeSkillTab === "core" ? "active" : ""}`} onClick={() => setActiveSkillTab("core")}>Core CS Concepts</button>
          </div>

          <div className="skills-grid">
            {(activeSkillTab === "all" ? allSkills : skillsData[activeSkillTab]).map((skill, index) => {
              let iconTheme = "skill-icon-primary";
              if (activeSkillTab === "frontend" || index % 3 === 0) iconTheme = "skill-icon-primary";
              else if (activeSkillTab === "backend" || activeSkillTab === "database" || index % 3 === 1) iconTheme = "skill-icon-secondary";
              else iconTheme = "skill-icon-accent";

              return (
                <div key={`${skill.name}-${index}`} className="glass-panel skill-card">
                  <div className={`skill-icon-wrapper ${iconTheme}`}>
                    {skill.name.charAt(0)}
                  </div>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-desc">{skill.level}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
         FEATURED PROJECTS SECTION
         ========================================== */}
      <section id="projects" style={{ background: "var(--bg-dark-900)" }}>
        <div className="grid-bg" />
        <div className="bg-glow-cyan" style={{ top: "10%", left: "10%" }} />

        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">Featured Projects</h2>
            <div className="section-subtitle">Real-world applications built during my MCA studies using modern technology.</div>
          </div>

          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="glass-panel project-card">
                <div className="project-card-header">
                  <div className={`project-card-glow ${project.glowClass}`} />
                  <div className="project-preview-wrapper">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} preview`}
                      className="project-preview-img"
                    />
                    <div className="project-preview-overlay">
                      <span className="project-preview-icon">{project.icon}</span>
                    </div>
                  </div>
                </div>
                <div className="project-card-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  
                  <div>
                    <h4 style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "8px", textTransform: "uppercase" }}>Key Features</h4>
                    <ul className="project-features-list">
                      {project.features.map((feature, i) => (
                        <li key={i} className="project-feature-tag">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-stack">
                    {project.tech.map((techItem, i) => (
                      <span key={i} className={`project-tech-tag ${project.accentClass}`}>
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-card-footer">
                  <a 
                    href={project.demoUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-primary"
                  >
                    Live Demo
                    <Icons.ArrowUpRight />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-secondary"
                  >
                    <Icons.Github />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         CERTIFICATIONS SECTION
         ========================================== */}
      <section id="certifications">
        <div className="bg-glow-violet" style={{ bottom: "5%", left: "10%" }} />
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">Certifications</h2>
            <div className="section-subtitle">Verified professional credentials in AI and software engineering systems.</div>
          </div>

          <div className="certifications-grid">
            {certificateLinks.map((cert) => {
              // Select appropriate logo
              let BrandLogo = Icons.Award;
              if (cert.issuer.includes("EY") || cert.issuer.includes("Microsoft")) {
                BrandLogo = () => (
                  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                    <Icons.EY />
                    <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--text-muted)" }}>+</span>
                    <Icons.Microsoft />
                  </div>
                );
              } else if (cert.issuer.includes("IBM")) {
                BrandLogo = Icons.IBM;
              }

              return (
                <div
                  key={cert.id}
                  className="glass-panel certification-card"
                  onClick={() => setActiveCertModal(cert)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="certification-visual">
                    <div className="certification-thumb-wrapper">
                      <img
                        src={cert.thumbnailUrl}
                        alt={cert.title}
                        className="certification-thumb-img"
                      />
                      <div className="certification-thumb-overlay">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "2rem", height: "2rem", color: "white" }}>
                          <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                        </svg>
                        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "white", marginTop: 4 }}>View Certificate</span>
                      </div>
                    </div>
                    <span className="certification-badge">Verified</span>
                  </div>

                  <div className="certification-body">
                    <div style={{ height: "40px", display: "flex", alignItems: "center", marginBottom: "8px" }}>
                      <BrandLogo />
                    </div>
                    <h3 className="certification-title" style={{ minHeight: "50px" }}>{cert.title}</h3>
                    <div className="certification-issuer">
                      <div className="certification-issuer-dot" />
                      {cert.issuer} ({cert.year})
                    </div>
                    <div className="certification-cta">
                      <span>View Certificate</span>
                      <Icons.ArrowUpRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
         ACHIEVEMENTS & BADGES SECTION
         ========================================== */}
      <section id="achievements" style={{ background: "var(--bg-dark-900)" }}>
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">Achievements & Badges</h2>
            <div className="section-subtitle">Key performance accomplishments and Microsoft technical badges.</div>
          </div>

          <div className="edu-exp-grid">
            {/* Left Side: Technical Achievements */}
            <div>
              <h3 className="timeline-section-title">
                <span className="timeline-icon"><Icons.Award /></span> Key Achievements
              </h3>
              <div className="achievements-grid" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {achievements.map((achievement, index) => (
                  <div key={index} className="glass-panel achievement-card">
                    <div className="achievement-icon-wrapper">
                      <Icons.CheckCircle />
                    </div>
                    <div className="achievement-content">
                      <h4 className="achievement-title">{achievement.title}</h4>
                      <p className="achievement-desc">{achievement.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Credentials & Technical Badges */}
            <div>
              <h3 className="timeline-section-title">
                <span className="timeline-icon"><Icons.Cpu /></span> Technical Badges
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {badgeLinks.map((badge) => (
                  <div key={badge.id} className="glass-panel achievement-card" style={{ padding: "20px" }}>
                    <div className="achievement-icon-wrapper" style={{ borderRadius: "8px", background: "rgba(0,164,239,0.1)", border: "1px solid rgba(0,164,239,0.2)" }}>
                      <Icons.Microsoft />
                    </div>
                    <div className="achievement-content" style={{ width: "100%" }}>
                      <h4 className="achievement-title" style={{ fontSize: "1.05rem" }}>{badge.title}</h4>
                      <p className="achievement-desc" style={{ fontSize: "0.85rem", marginBottom: "12px" }}>{badge.description}</p>
                      
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600" }}>
                          Issuer: {badge.issuer}
                        </span>
                        <a 
                          href={badge.verifyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-btn project-btn-secondary" 
                          style={{ flex: "none", padding: "6px 12px", fontSize: "0.75rem" }}
                        >
                          View Badge
                          <Icons.ArrowUpRight />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         TIMELINE SECTION (EDUCATION & EXPERIENCE)
         ========================================== */}
      <section id="timeline">
        <div className="bg-glow-violet" style={{ top: "30%", right: "5%" }} />
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">Timeline</h2>
            <div className="section-subtitle">Academic milestones, education history, and goals.</div>
          </div>

          <div className="edu-exp-grid" style={{ gridTemplateColumns: "1.1fr 0.9fr" }}>
            {/* Timelines */}
            <div>
              <h3 className="timeline-section-title">
                <span className="timeline-icon"><Icons.GraduationCap /></span> Education & Career
              </h3>
              <div className="timeline-container">
                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="glass-panel timeline-card">
                    <span className="timeline-period">2025 - Present</span>
                    <h4 className="timeline-title">Master of Computer Applications (MCA)</h4>
                    <div className="timeline-subtitle">Lovely Professional University</div>
                    <p className="timeline-desc">
                      Focusing on advanced algorithms, software architectures, enterprise web applications development, and intelligent software agents.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="glass-panel timeline-card">
                    <span className="timeline-period">Currently Seeking</span>
                    <h4 className="timeline-title">Software Development Internship</h4>
                    <div className="timeline-subtitle">Available Immediately</div>
                    <p className="timeline-desc">
                      Looking to contribute to agile development teams, building responsive frontends, backend APIs, or incorporating machine learning/generative AI interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Summary card */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div className="glass-panel" style={{ padding: "32px", borderLeft: "4px solid var(--primary)" }}>
                <h4 style={{ fontSize: "1.3rem", marginBottom: "12px", fontFamily: "var(--font-display)" }}>Looking for a MERN & AI Developer?</h4>
                <p style={{ color: "var(--text-secondary)", lineHeight: "1.6", fontSize: "0.95rem", marginBottom: "16px" }}>
                  I construct robust backends using Node.js and MongoDB Atlas, combine them with responsive interfaces built in React, and add functional intelligence with LLM API orchestrations.
                </p>
                <a href="#contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={(e) => handleNavClick(e, "contact")}>
                  Let's Discuss Internships
                  <Icons.ArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         CONTACT SECTION - Let's Connect
         ========================================== */}
      <section id="contact" style={{ background: "var(--bg-dark-900)" }}>
        <div className="bg-glow-violet" style={{ bottom: "10%", left: "5%" }} />
        <div className="bg-glow-cyan" style={{ top: "10%", right: "5%" }} />
        <div className="container">
          <div className="section-title-wrapper">
            <h2 className="section-title gradient-text">Let's Connect</h2>
            <div className="section-subtitle">Open to internships, collaborations, and opportunities. Reach out on any platform.</div>
          </div>

          <div className="connect-grid">
            {/* Email */}
            <a href="mailto:vermapriyanka32892@gmail.com" className="connect-card" aria-label="Email">
              <div className="connect-card-icon" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", color: "#a78bfa" }}>
                <Icons.Mail />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">Email</span>
                <span className="connect-card-value">priyankaverma.dev@gmail.com</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/priyanka-verma-3a5031347/" target="_blank" rel="noopener noreferrer" className="connect-card" aria-label="LinkedIn">
              <div className="connect-card-icon" style={{ background: "rgba(10,102,194,0.15)", border: "1px solid rgba(10,102,194,0.35)", color: "#60a5fa" }}>
                <Icons.Linkedin />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">LinkedIn</span>
                <span className="connect-card-value">priyanka-verma-3a5031347</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/PriyankaVerma2307" target="_blank" rel="noopener noreferrer" className="connect-card" aria-label="GitHub">
              <div className="connect-card-icon" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0" }}>
                <Icons.Github />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">GitHub</span>
                <span className="connect-card-value">@PriyankaVerma2307</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a>

            {/* Resume */}
            {/* <a href="/Priyanka_Resume.pdf" target="_blank" rel="noopener noreferrer" className="connect-card" aria-label="Resume">
              <div className="connect-card-icon" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", color: "#34d399" }}>
                <Icons.Download />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">Resume</span>
                <span className="connect-card-value">View / Download PDF</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a> */}

            {/* LeetCode */}
            <a href="https://leetcode.com/u/PriyankaVermaJi/" target="_blank" rel="noopener noreferrer" className="connect-card" aria-label="LeetCode">
              <div className="connect-card-icon" style={{ background: "rgba(248,159,27,0.12)", border: "1px solid rgba(248,159,27,0.3)", color: "#fbbf24" }}>
                <Icons.LeetCode />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">LeetCode</span>
                <span className="connect-card-value">200+ Problems Solved</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a>

            {/* X (Twitter) */}
            <a href="https://x.com/VermaVe23372" target="_blank" rel="noopener noreferrer" className="connect-card" aria-label="X (Twitter)">
              <div className="connect-card-icon" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "#e2e8f0" }}>
                <Icons.Twitter />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">X (Twitter)</span>
                <span className="connect-card-value">@VermaVe23372</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a>

            {/* WhatsApp */}
            {/* <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="connect-card" aria-label="WhatsApp">
              <div className="connect-card-icon" style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)", color: "#4ade80" }}>
                <Icons.WhatsApp />
              </div>
              <div className="connect-card-info">
                <span className="connect-card-label">WhatsApp</span>
                <span className="connect-card-value">Chat Directly</span>
              </div>
              <div className="connect-card-arrow"><Icons.ArrowUpRight /></div>
            </a> */}
          </div>
        </div>
      </section>

      {/* ==========================================
         FOOTER
         ========================================== */}
      <footer className="footer-wrapper">
        <div className="container">
          <a href="#home" className="footer-logo" onClick={(e) => handleNavClick(e, "home")}>
            PV.dev
          </a>
          <p className="footer-text">
            Designed & Developed by <span>Priyanka Verma</span>
          </p>
          <p className="footer-text" style={{ fontSize: "0.75rem", marginTop: "8px" }}>
            &copy; {new Date().getFullYear()} Priyanka Verma. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Certificate Preview Modal */}
      {activeCertModal && (
        <div className="modal-overlay" onClick={() => setActiveCertModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveCertModal(null)} aria-label="Close">✕</button>
            <div className="modal-body">
              <div className="modal-cert-preview">
                <img
                  src={activeCertModal.thumbnailUrl}
                  alt={activeCertModal.title}
                  style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "8px" }}
                />
              </div>
              <div className="modal-cert-details">
                <h3 className="modal-cert-title-disp">{activeCertModal.title}</h3>
                <div className="modal-cert-meta">
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">Issuer</span>
                    <span className="modal-meta-value">{activeCertModal.issuer}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">Year</span>
                    <span className="modal-meta-value">{activeCertModal.year}</span>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <a href={activeCertModal.viewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: "center" }}>
                  Open Full Certificate <Icons.ArrowUpRight />
                </a>
                <button className="btn-secondary" onClick={() => setActiveCertModal(null)} style={{ flex: 1, justifyContent: "center", border: "1px solid var(--border-light)" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to top button */}
      <button 
        className={`back-to-top-btn ${showBTT ? "visible" : ""}`} 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to Top"
      >
        <svg style={{ width: "1.25rem", height: "1.25rem" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </>
  );
}