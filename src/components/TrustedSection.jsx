
import React from "react";
import "./TrustedSection.css";

const TrustedSection = () => {
  return (
    <section className="trusted-section position-relative d-flex justify-content-between align-items-start bg-white">
      <div className="trusted-content">
        <h2 className="trusted-title">
          Trusted by thousands, we help careers
          <br />
          grow with confidence.
        </h2>

        <p className="trusted-description">
          At JobZenter, we are trusted by thousands of aspiring professionals who rely on us to shape their future with confidence. Our proven training programs and dedicated placement support have helped students, freshers, and experienced candidates transform their skills, unlock their potential, and secure positions in top MNCs with salaries ranging from 5 LPA to 15 LPA. We believe in empowering every individual with the knowledge, guidance, and industry exposure they need to achieve their career goals and step into the corporate world with certainty and success.
        </p>
      </div>

      <div className="trusted-images position-relative d-flex align-items-start">
        <img
          src="/place1.png"
          alt="Team Discussion"
          className="trusted-image trusted-image-left"
        />

        <img
          src="/place2.png"
          alt="Mentorship Session"
          className="trusted-image trusted-image-right"
        />
      </div>
    </section>
  );
};

export default TrustedSection;
