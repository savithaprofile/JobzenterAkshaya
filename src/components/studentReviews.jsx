import React, { useState } from "react";
import { FaStar, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const reviews = [
  {
    name: "Soya",
    role: "React Native Developer",
    text: "At Jobzenter, I worked on a real-time project, which helped me secure a position as a React Native Developer in an MNC. The training was thorough and practical.",
    img: "/feed1.png",
  },
  {
    name: "Priya",
    role: "Fullstack Developer",
    text: "Jobzenter offers a friendly and practical environment that made learning enjoyable. The hands-on experience was invaluable in preparing me for the real world.",
    img: "/feed2.png",
  },
  {
    name: "Akash",
    role: "QA Engineer",
    text: "As a first-year student, I found Jobzenter for Software Testing and got real project exposure, improving my automation skills and employability.",
    img: "/feed3.png",
  },
  {
    name: "Deepak",
    role: "Backend Developer",
    text: "I worked with mentors having industry expertise. Learned advanced Node.js concepts and debugging practices through real-time case studies.",
    img: "/feed4.png",
  },
  {
    name: "Kiran",
    role: "Frontend Developer",
    text: "I was struggling with frontend frameworks before joining Jobzenter. Their step-by-step approach and project guidance made me interview-ready.",
    img: "/feed5.png",
  },
  {
    name: "Manisha",
    role: "Data Analyst",
    text: "Jobzenter’s Power BI course helped me land a data analytics role. The project-focused approach gave me strong visualization and DAX skills.",
    img: "/feed6.png",
  },
];

const StudentReviews = () => {
  const [index, setIndex] = useState(0); // tracks which pair is showing

  const nextReviews = () => {
    if (index + 2 < reviews.length) setIndex(index + 2);
  };

  const prevReviews = () => {
    if (index > 0) setIndex(index - 2);
  };

  return (
    <section className="bg-white py-[80px] flex flex-col items-center">
      {/* Section Header */}
      <div className="text-center mb-[40px]">
        <h2 className="text-[32px] font-[800] font-['Inter'] text-[#000000]">
          What Our Students <span className="text-[#F7A600] underline decoration-[#F7A600]">Says</span>
        </h2>
        <p className="mt-[8px] text-[15px] text-[#000000B3]">
          Real stories from learners who transformed their careers with us.
        </p>
      </div>

      {/* Up Arrow - above first review */}
      {index > 0 && (
        <button
          onClick={prevReviews}
          className="mb-[20px] w-[56px] h-[56px] bg-white border border-[#EAEAEA] rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 transition-transform"
        >
          <IoChevronUp className="text-[28px] text-black" />
        </button>
      )}

      {/* Review Cards */}
      <div className="flex flex-col items-center gap-[40px] transition-all duration-500 ease-in-out">
        {reviews.slice(index, index + 2).map((r, i) => (
          <div
            key={i}
            className="relative w-[600px] min-h-[180px] bg-white border-l-[6px] border-b-[6px] border-[#FFF000] rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-[28px]"
          >
            {/* Stars */}
            <div className="flex gap-[3px] mb-[8px] text-[#FFC107] bg-white">
              {Array(5)
                .fill()
                .map((_, j) => (
                  <FaStar key={j} />
                ))}
            </div>

            {/* Review Text */}
            <p 
              className="absolute bg-white text-[#000000E0] font-['Inter']"
              style={{
                width: '556.75px',
                height: '96px',
                top: '55.28px',
                left: '82.5px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '17px',
                lineHeight: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              {r.text}
            </p>

            {/* Profile */}
            <div className="flex gap-[7px] absolute bottom-[5px] left-[1px] -ml-[55px]">
              <img
                src={r.img}
                alt={r.name}
                className="w-[110px] h-[110px] rounded-full border-white shadow-[0_2px_6px_rgba(0,0,0,0.15)]"
              />
             <div className="bg-white">
              <h4 className="text-[14px] font-[700] text-[#000000] bg-white py-[10px] px-[10px] mb-[10px]">
                {r.name}
              </h4>
              <p className="text-[10px] text-[#555555] bg-white -mt-[14px] px-[10px] mb-[8px]">{r.role}</p>
              
              {/* Like and Dislike Buttons */}
              <div className="flex gap-4 px-[10px]">
                {/* Like Button - Yellow */}
                <button className="w-[26px] h-[26px] rounded-full bg-[#FFF000] flex items-center justify-center hover:opacity-80 transition-opacity border-none">
                  <FaThumbsUp className="text-[12px] text-black" />
                </button>
                {/* Dislike Button - Dark Gray */}
                <button className="w-[26px] h-[26px] rounded-full bg-gray-700 flex items-center justify-center hover:opacity-80 transition-opacity border-none">
                  <FaThumbsDown className="text-[12px] text-white" />
                </button>
              </div>
            </div>
            </div>

            {/* Yellow Background Shadow */}
            {/* <div className="absolute top-[8px] left-[8px] w-full h-full bg-[#FFF000] rounded-[10px] -z-[1]"></div> */}
          </div>
        ))}
      </div>

      {/* Down Arrow - below second review */}
      {index + 2 < reviews.length && (
        <button
          onClick={nextReviews}
          className="mt-[50px] w-[56px] h-[56px] bg-white border border-[#EAEAEA] rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-105 transition-transform"
        >
          <IoChevronDown className="text-[28px] text-black" />
        </button>
      )}
    </section>
  );
};

export default StudentReviews;
