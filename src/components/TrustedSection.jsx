

import React from "react";

const TrustedSection = () => {
  return (
    <section className="relative flex justify-between items-center px-[160px] py-[120px] bg-white">
      {/* LEFT SIDE - TEXT */}
      <div className="max-w-[600px]">
        <h2 className="font-['Inter'] font-bold text-[30px] text-[#000000] leading-[42px] mb-[24px] relative">
          Trusted by thousands, we help careers grow with{" "}
          <span className="relative text-[#000000] font-bold">
            confidence.
            {/* Yellow underline (#FFC107) */}
            <span className="absolute ml-[-170px] left-115 bottom-[-5px] w-[168px] h-[12px] bg-[#FFC107]"></span>
          </span>
        </h2>

        <p className="font-['Inter'] text-[18px] leading-[35px] text-[#000000]">
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

  {/* RIGHT SIDE - IMAGES + 100% BADGE */}
  {/* give the wrapper the same height as the images so absolutely positioned badge can center */}
  <div className="relative flex items-center gap-[40px] ml-[20px]" style={{ height: "611.47px" }}>
        {/* LEFT IMAGE */}
        <img
          src="/place1.png"
          alt="Team Discussion"
          className="object-cover rounded-[152.87px]"
          style={{
            width: "310.73px",
            height: "611.47px",
            opacity: 1,
          }}
        />

        {/* RIGHT IMAGE */}
        <img
          src="/place2.png"
          alt="Mentorship Session"
          className="object-cover rounded-[152.87px]"
          style={{
            width: "310.73px",
            height: "611.47px",
            opacity: 1,
          }}
        />

        
      </div>
    </section>
  );
};

export default TrustedSection;
