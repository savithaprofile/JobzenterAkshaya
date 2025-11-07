

// export default TopRatedCourses;
import React, { useState } from "react";

const TopRatedCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const courses = [
    {
      id: 1,
      title: "React Native Fullstack",
      description: "React Native Fullstack development combines React Native for mobile apps with Node.js, Express, and a database (like MongoDB or PostgreSQL) on the backend.",
      image: "/reactnative.png",
      stars: ["/star1i120-ds8j.svg", "/star2i120-c1xf.svg", "/star3i120-xnzh.svg", "/star4i120-py9o.svg", "/star5i120-mwov.svg"],
      buttonStyle: "h-[30px] w-[190px] px-[14px] rounded-[6px] bg-[#000000] text-[#FFFFFF] text-[12px] mt-[5px]"
    },
    {
      id: 2,
      title: "Software Testing",
      description: "Software Testing is the process of evaluating software to identify defects and ensure it meets the required quality standards.",
      image: "/software-testing.png",
      stars: ["/star1i120-8ujw.svg", "/star2i120-4u4.svg", "/star3i120-6vc.svg", "/star4i120-i28d.svg", "/star5i120-bani.svg"],
      buttonStyle: "h-[30px] w-[190px] px-[14px] ml-[16px] rounded-[6px] bg-[#000000] text-[#FFFFFF] text-[12px] mt-[9px]"
    },
    {
      id: 3,
      title: "JAVA Fullstack Development",
      description: "Java Full Stack Development is the process of building complete web applications using both frontend (JavaScript) and backend (Java, Spring Boot) technologies.",
      image: "/fullstack development.png",
      stars: ["/star1i120-x4ds.svg", "/star2i120-1k3.svg", "/star3i120-bhyj.svg", "/star4i120-b5u.svg", "/star5i120-eouq.svg"],
      buttonStyle: "h-[30px] w-[190px] px-[14px] rounded-[6px] bg-[#000000] text-[#FFFFFF] text-[12px] mt-[-6px]",
      buttonWrapper: true
    },
    {
      id: 4,
      title: "Business Intelligence",
      description: "Business Intelligence (BI) transforms raw data into meaningful insights to drive strategic business decisions. It helps organizations analyze trends, measure performance, and uncover growth opportunities.",
      image: "/Business.png",
      stars: ["/star1i120-ds8j.svg", "/star2i120-c1xf.svg", "/star3i120-xnzh.svg", "/star4i120-py9o.svg", "/star5i120-mwov.svg"],
      buttonStyle: "h-[30px] w-[190px] px-[14px] rounded-[6px] bg-[#000000] text-[#FFFFFF] text-[12px] mt-[5px]"
    },
    {
      id: 5,
      title: "MERN Stack Development",
      description: "MERN Stack Development combines MongoDB, Express.js, React.js, and Node.js to build powerful full-stack web applications.",
      image: "/MERN.png",
      stars: ["/star1i120-8ujw.svg", "/star2i120-4u4.svg", "/star3i120-6vc.svg", "/star4i120-i28d.svg", "/star5i120-bani.svg"],
      buttonStyle: "h-[30px] w-[190px] px-[14px] ml-[16px] rounded-[6px] bg-[#000000] text-[#FFFFFF] text-[12px] mt-[9px]"
    },
    {
      id: 6,
      title: "AWS",
      description: "AWS is a secure cloud platform offering computing power, database storage, and content delivery services on demand.",
      image: "/AWS.png",
      stars: ["/star1i120-x4ds.svg", "/star2i120-1k3.svg", "/star3i120-bhyj.svg", "/star4i120-b5u.svg", "/star5i120-eouq.svg"],
      buttonStyle: "h-[30px] w-[190px] px-[14px] rounded-[6px] bg-[#000000] text-[#FFFFFF] text-[12px] mt-[-6px]",
      buttonWrapper: true
    }
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(courses.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const visibleCourses = courses.slice(startIndex, startIndex + cardsPerPage);

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  return (
    <section className="w-full flex justify-center py-[80px]">
      <div 
        className="relative w-[1400px] h-[718px] rounded-[91px] shadow-[0_8px_25px_rgba(0,0,0,0.15)] overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, rgba(253, 240, 1, 0.45) 0%, #FFFFFF 100%)',
        }}
      >
        {/* Header */}
        <div className="px-[160px] pt-[36px]">
          <h2 className="text-[32px] md:text-[32px] font-[800] leading-none text-black">
            Top Rated Courses
          </h2>
          <p className="mt-2 max-w-[760px] text-[16px] py-[-10px] md:text-[16px] text-black/80">
            Explore the most trusted and highly reviewed courses loved by learners.
          </p>
        </div>

        {/* Cards Row */}
        <div className="mt-[28px] px-[140px] flex gap-[90px] justify-center">
          {visibleCourses.map((course) => (
            <div key={course.id} className="group relative w-[340px] h-[400px] rounded-[18px] bg-[#FFFFFF] shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300 ease-out">
              {/* image */}
              <div className="relative z-[1] h-[170px] flex items-start justify-center pt-[10px]">
                <img src={course.image} alt={course.title} className="w-[280px] h-[200px] object-cover rounded-[14px]" />
              </div>
              {/* content area with left semicircle background */}
              <div className="relative px-[18px] pt-[28px] pb-[18px] bg-white transition-colors duration-300 ease-out group-hover:bg-[#FDF001]">
                <div className="pointer-events-none absolute -left-[160px] bottom-0 w-[329px] h-[329px] rounded-full bg-[#FDF001]/35 group-hover:opacity-0" />
                <h3 className="text-[15px] font-[700] text-black">{course.title}</h3>
                <p className="mt-[8px] text-[11px] leading-[16px] text-black/70">
                  {course.description}
                </p>
                <div className="mt-[10px] flex items-center gap-[3px]">
                  {course.stars.map((star, starIndex) => (
                    <img key={starIndex} src={star} alt="star" />
                  ))}
                </div>
                {course.buttonWrapper ? (
                  <div className="flex justify-center mt-[12px]">
                    <button className={course.buttonStyle}>
                      Download Brochure
                    </button>
                  </div>
                ) : (
                  <button className={course.buttonStyle}>
                    Download Brochure
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Below cards, centered below middle card */}
        <div className="flex items-center justify-center gap-[120px] mt-[40px]">
          {/* Left Arrow */}
          <button 
            onClick={handlePrevious}
            disabled={isFirstPage}
            aria-label="previous" 
            className={`w-[60px] h-[60px]  rounded-full bg-[#000000] text-[#FFFFFF] grid place-items-center shadow transition-opacity ${
              isFirstPage ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
            }`}
          >
            <img src="/left.png" alt="left" className="rotate-360deg" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-[10px]">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-[12px] h-[12px] border-[3px] border-[#000000] rounded-full cursor-pointer transition-colors ${
                  index === currentPage ? 'bg-[#FFC107]' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={handleNext}
            disabled={isLastPage}
            aria-label="next" 
            className={`w-[60px] h-[60px] rounded-full bg-[#000000] text-[#FFFFFF] grid place-items-center shadow transition-opacity ${
              isLastPage ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 cursor-pointer'
            }`}
          >
            <img src="/weuiarrowfilledi120-6nd.svg" alt="right" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TopRatedCourses;
