

import React from "react";

const TrustedSection = () => {
  return (
    <section className="relative flex justify-between items-start px-[160px] py-[120px] bg-white">
      {/* LEFT SIDE - TEXT */}
      <div className="max-w-[600px] flex-shrink-0">
        
        <h2 className="font-['Inter'] font-bold text-[31px] text-[#000000] leading-[38px] mb-[24px]">
          Trusted by thousands, we help careers<br />
          grow with confidence.
        </h2>

        <p className="font-['Inter'] text-[18.1px] leading-[35px] text-[#000000] max-w-[500px]">
          At JobZenter, we are trusted by thousands of aspiring professionals who
          rely on us to shape their future with confidence. Our proven training
          programs and dedicated placement support have helped students, freshers,
          and experienced candidates transform their skills, unlock their
          potential, and secure positions in top MNCs with salaries ranging from
          5 LPA to 15 LPA. We believe in empowering every individual with the
          knowledge, guidance, and industry exposure they need to achieve their
          career goals and step into the corporate world with certainty and
          success.
        </p>
      </div>

      {/* RIGHT SIDE - IMAGES */}
      <div className="relative flex items-start gap-[20px] ml-auto">
        {/* LEFT IMAGE - slightly taller and positioned higher */}
        <img
          src="/place1.png"
          alt="Team Discussion"
          className="object-cover rounded-[152.87px]"
          style={{
            width: "310.73px",
            height: "611.47px",
            opacity: 1,
            marginTop: "0px",
          }}
        />

        {/* RIGHT IMAGE - positioned slightly lower */}
        <img
          src="/place2.png"
          alt="Mentorship Session"
          className="object-cover rounded-[152.87px]"
          style={{
            width: "310.73px",
            height: "580px",
            opacity: 1,
            marginTop: "20px",
          }}
        />
      </div>
    </section>
  );
};

export default TrustedSection;
