// ==========================================
// PORTFOLIO CONFIGURATION DATA
// ==========================================

// Configurable Resume Links
// Note: To make download work seamlessly, you can place a file named 'resume.pdf' 
// in the 'public/' directory of your Vite project, and set downloadUrl to '/resume.pdf'.
export const resumeLink = {
  viewUrl: "/Priyanka_Resume.pdf", 
  downloadUrl: "/Priyanka_Resume.pdf" 
};

// Configurable Certifications Links
export const certificateLinks = [
  {
    id: "ey-microsoft-ai-skills",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    year: "2026",
    viewUrl: "/micro_page-0001.jpg",
    thumbnailUrl: "/micro_page-0001.jpg"
  },
  {
    id: "ibm-1m1b-ai-sustainability",
    title: "IBM 1M1B – AI + Sustainability Virtual Internship",
    issuer: "IBM & 1M1B",
    year: "2026",
    viewUrl: "/ibm-certification_page-0001.jpg",
    thumbnailUrl: "/ibm-certification_page-0001.jpg"
  }
];

// Configurable Badge Verification Links
export const badgeLinks = [
  {
    id: "ms-ai-skills-fest-2026",
    title: "Microsoft AI Skills Fest 2026 Badge",
    issuer: "Microsoft",
    logoType: "MICROSOFT",
    description: "Awarded for designing and implementing custom AI solutions, completing prompt flow workflows, and integrating cognitive search on Azure.",
    verifyUrl: "https://www.credly.com/badges/5ab27de5-ccfd-4420-a9eb-05d4249e258e/linked_in_profile"
  },
  {
    id: "ms-ai-skills-passport-badge",
    title: "Microsoft AI Skills Passport Badge",
    issuer: "Microsoft",
    logoType: "MICROSOFT",
    description: "Earned for demonstrating foundational knowledge of Generative AI, copilot extensibility, and responsible artificial intelligence principles.",
    verifyUrl: "https://www.credly.com/badges/76f9eaa5-32ac-414d-a015-a01a5bad66dc/linked_in_profile"
  }
];

// Configurable Achievements (These are text accomplishments displayed under Achievements)
export const achievements = [
  {
    title: "Solved 200+ LeetCode problems",
    desc: "Built a solid background in data structures, design patterns, and analysis of algorithms by solving challenges daily."
  },
  {
    title: "Built multiple real-world MERN Stack applications",
    desc: "Designed and engineered functional applications with responsive frontends, REST APIs, Atlas databases, and OAuth."
  }
];
