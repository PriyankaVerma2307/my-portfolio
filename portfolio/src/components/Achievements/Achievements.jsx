import { useState } from "react";
import "./Achievements.css";

const certificates = [
  {
    number: "01",
    organization: "EY × MICROSOFT",
    title: "AI Skills Passport",
    year: "2026",
    image: "/micro_page-0001.jpg",
  },
  {
    number: "02",
    organization: "IBM × 1M1B",
    title: "AI + Sustainability Virtual Internship",
    year: "2026",
    image: "/ibm-certification_page-0001.jpg",
  },
  {
    number: "03",
    organization: "GIRLSCRIPT SUMMER OF CODE",
    title: "GSSoC '26 Contributor",
    year: "2026",
    image: "/GSSoC.jpg",
  },
];

export default function Achievements() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section className="achievements-section" id="achievements">

      {/* Background */}
      <div className="achievements-code-bg" aria-hidden="true">
        <span>const growth = solve(300+);</span>
        <span>git commit -m "keep going"</span>
        <span>learn(); build(); repeat();</span>
        <span>010101 110010 001011</span>
        <span>const progress = "ongoing";</span>
      </div>

      {/* Header */}
      <div className="achievements-header">
        <div className="achievements-label">
          <span>07.</span> Proof of Work
        </div>

        <div className="achievements-header-note">
          little things that count
          <span>↙</span>
        </div>

        <div className="achievements-status">
          <span className="status-dot"></span>
          PROGRESS_LOG: ACTIVE
        </div>
      </div>

      {/* Intro */}
      <div className="achievements-intro">
        <div className="achievements-command">
          &gt; achievements --show<span>_</span>
        </div>

        <h1>
          proof that
          <br />
          <em>I kept going.</em>
        </h1>

        <p>
          Coding milestones, industry badges and
          <br />
          certifications collected along the way.
        </p>
      </div>

      {/* TOP BOARD */}
      <div className="achievement-board">

        {/* LeetCode */}
        <article className="achievement-card leetcode-card">
          <div className="achievement-card-top">
            <span>01</span>
            <span>CODING MILESTONE</span>
          </div>

          <div className="leetcode-content">
            <div className="leetcode-number">
              300<span>+</span>
            </div>

            <h2>LeetCode Problems</h2>

            <p>
              Data Structures & Algorithms
              <br />
              Java • Problem Solving
            </p>
          </div>

          <div className="leetcode-ring">
            <span>DSA</span>
          </div>

          <div className="leetcode-note">
            one more problem →
          </div>
        </article>

        {/* Microsoft AI Skills Fest */}
        <article className="achievement-card microsoft-card">
          <div className="achievement-card-top">
            <span>02</span>
            <span>MICROSOFT BADGE</span>
          </div>

          <div className="microsoft-content">
            <div className="microsoft-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <div className="microsoft-label">
                MICROSOFT
              </div>

              <h2>AI Skills Fest</h2>

              <p>2026 Badge</p>
            </div>
          </div>

          <div className="badge-corner">↗</div>
        </article>

        {/* Microsoft AI Skills Passport */}
        <article className="achievement-card microsoft-card">
          <div className="achievement-card-top">
            <span>03</span>
            <span>MICROSOFT BADGE</span>
          </div>

          <div className="microsoft-content">
            <div className="microsoft-icon">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <div className="microsoft-label">
                MICROSOFT ELEVATE
              </div>

              <h2>AI Skills Passport</h2>

              <p>Badge</p>
            </div>
          </div>

          <div className="badge-corner">↗</div>
        </article>
      </div>

      {/* CERTIFICATE WALL */}
      <div className="certificate-wall">

        <div className="certificate-heading">
          <span>→</span>
          CERTIFICATES
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article
              className="certificate-card"
              key={certificate.number}
            >
              <button
                className="certificate-image-wrap"
                type="button"
                onClick={() =>
                  setSelectedCertificate(certificate)
                }
                aria-label={`View ${certificate.title} certificate`}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                />

                <div className="certificate-overlay">
                  <span>VIEW FULL</span>
                  <span>↗</span>
                </div>
              </button>

              <div className="certificate-info">
                <div className="certificate-number">
                  {certificate.number}
                </div>

                <div>
                  <span className="certificate-org">
                    {certificate.organization}
                  </span>

                  <h3>{certificate.title}</h3>

                  <span className="certificate-year">
                    {certificate.year}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="achievements-note achievements-note-one">
        not trophies.
        <br />
        just proof ♡
      </div>

      <div className="achievements-note achievements-note-two">
        keep learning
        <br />
        keep building →
      </div>

      {/* Bottom */}
      <div className="achievements-bottom-left">
        ✦ progress &gt; perfection
      </div>

      <div className="achievements-bottom-right">
        /achievements _
      </div>

      <div className="achievements-year">
        ( 2026 )
      </div>

      {/* FULL CERTIFICATE VIEW */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-modal-close"
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <div className="certificate-modal-label">
              {selectedCertificate.organization}
            </div>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="certificate-full-image"
            />

            <div className="certificate-modal-footer">
              <span>{selectedCertificate.title}</span>
              <span>{selectedCertificate.year}</span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}