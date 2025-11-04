

// export default TopRatedCourses;
import React from "react";

const TopRatedCourses = () => {
  return (
    <section className="w-full flex justify-center py-[80px]">
      <div className="relative w-[1100px] h-[718px] rounded-[91px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] overflow-hidden">
        {/* Header */}
        <div className="px-[40px] pt-[36px]">
          <h2 className="text-[32px] md:text-[36px] font-[800] leading-none text-black">
            Top Rated <span className="text-[#F7A600] underline decoration-[#F7A600]">Courses</span>
          </h2>
          <p className="mt-2 max-w-[760px] text-[14px] md:text-[16px] text-black/80">
            Explore the most trusted and highly reviewed courses loved by learners.
          </p>
        </div>

        {/* Cards Row */}
        <div className="mt-[28px] px-[24px] flex gap-[30px] justify-center">
          {/* Card 1 - React Native Fullstack */}
          <div className="group relative w-[320px] h-[380px] rounded-[18px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ease-out">
            {/* image */}
            <div className="relative z-[1] h-[170px] flex items-start justify-center pt-[10px]">
              <img src="/reactnative.png" alt="React Native" className="w-[300px] h-[150px] object-cover rounded-[14px]" />
            </div>
            {/* content area with left semicircle background */}
            <div className="relative px-[18px] pt-[28px] pb-[18px] bg-white transition-colors duration-300 ease-out group-hover:bg-[#FDF001]">
              <div className="pointer-events-none absolute -left-[160px] bottom-0 w-[329px] h-[329px] rounded-full bg-[#FDF001]/35 group-hover:opacity-0" />
              <h3 className="text-[15px] font-[700] text-black">React Native Fullstack</h3>
              <p className="mt-[8px] text-[11px] leading-[16px] text-black/70">
                React Native Fullstack development combines React Native for mobile apps with Node.js, Express, and a database (like MongoDB or PostgreSQL) on the backend.
              </p>
              <div className="mt-[10px] flex items-center gap-[3px]">
                <img src="/star1i120-ds8j.svg" alt="star" />
                <img src="/star2i120-c1xf.svg" alt="star" />
                <img src="/star3i120-xnzh.svg" alt="star" />
                <img src="/star4i120-py9o.svg" alt="star" />
                <img src="/star5i120-mwov.svg" alt="star" />
              </div>
              <button className="mt-[12px] h-[28px] px-[14px] rounded-[6px] bg-black text-white text-[11px]">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Card 2 - Software Testing */}
          <div className="group relative w-[320px] h-[380px] rounded-[18px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ease-out">
            <div className="relative z-[1] h-[170px] flex items-start justify-center pt-[10px]">
              <img src="/software-testing.png" alt="Software Testing" className="w-[300px] h-[150px] object-cover rounded-[14px]" />
            </div>
            <div className="relative px-[18px] pt-[28px] pb-[18px] bg-white transition-colors duration-300 ease-out group-hover:bg-[#FDF001]">
              <div className="pointer-events-none absolute -left-[160px] bottom-0 w-[329px] h-[329px] rounded-full bg-[#FDF001]/35 group-hover:opacity-0" />
              <h3 className="text-[15px] font-[700] text-black">Software Testing</h3>
              <p className="mt-[8px] text-[11px] leading-[16px] text-black/70">
                Software Testing is the process of evaluating software to identify defects and ensure it meets the required quality standards.
              </p>
              <div className="mt-[10px] flex items-center gap-[3px]">
                <img src="/star1i120-8ujw.svg" alt="star" />
                <img src="/star2i120-4u4.svg" alt="star" />
                <img src="/star3i120-6vc.svg" alt="star" />
                <img src="/star4i120-i28d.svg" alt="star" />
                <img src="/star5i120-bani.svg" alt="star" />
              </div>
              <button className="mt-[12px] h-[28px] px-[14px] rounded-[6px] bg-black text-white text-[11px]">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Card 3 - JAVA Fullstack */}
          <div className="group relative w-[320px] h-[380px] rounded-[18px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ease-out">
            <div className="relative z-[1] h-[170px] flex items-start justify-center pt-[10px]">
              <img src="/fullstack development.png" alt="JAVA Fullstack" className="w-[300px] h-[150px] object-cover rounded-[14px]" />
            </div>
            <div className="relative px-[18px] pt-[28px] pb-[18px] bg-white transition-colors duration-300 ease-out group-hover:bg-[#FDF001]">
              <div className="pointer-events-none absolute -left-[160px] bottom-0 w-[329px] h-[329px] rounded-full bg-[#FDF001]/35 group-hover:opacity-0" />
              <h3 className="text-[15px] font-[700] text-black">JAVA Fullstack Development</h3>
              <p className="mt-[8px] text-[11px] leading-[16px] text-black/70">
                Java Full Stack Development is the process of building complete web applications using both frontend (JavaScript) and backend (Java, Spring Boot) technologies.
              </p>
              <div className="mt-[10px] flex items-center gap-[3px]">
                <img src="/star1i120-x4ds.svg" alt="star" />
                <img src="/star2i120-1k3.svg" alt="star" />
                <img src="/star3i120-bhyj.svg" alt="star" />
                <img src="/star4i120-b5u.svg" alt="star" />
                <img src="/star5i120-eouq.svg" alt="star" />
              </div>
               {/* Centered Download Brochure Button */}
               <div className="flex justify-center mt-[12px]">
                <button className="h-[28px] px-[14px] rounded-[6px] bg-black text-white text-[11px]">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Left/Right circular arrows */}
        <button aria-label="previous" className="absolute left-[28px] bottom-[86px] w-[44px] h-[44px] rounded-full bg-black text-white grid place-items-center shadow">
          <img src="/weuiarrowfilledi120-vtun.svg" alt="left" className="rotate-180" />
        </button>
        <button aria-label="next" className="absolute right-[28px] bottom-[86px] w-[44px] h-[44px] rounded-full bg-black text-white grid place-items-center shadow">
          <img src="/weuiarrowfilledi120-6nd.svg" alt="right" />
        </button>

        {/* Dots */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[90px] flex items-center gap-[10px]">
          <img src="/ellipse327i120-4hoc-200h.png" alt="dot" className="w-[8px] h-[8px]" />
          <img src="/ellipse330i120-a6n5-200h.png" alt="dot-active" className="w-[8px] h-[8px]" />
          <img src="/ellipse328i120-2jh-200h.png" alt="dot" className="w-[8px] h-[8px]" />
        </div>

      </div>
    </section>
  );
};

export default TopRatedCourses;
