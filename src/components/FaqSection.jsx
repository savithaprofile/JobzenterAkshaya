import React, { useState } from "react";

const QA = [
  {
    q: "Will Jobzenter actually help me get a job? What does your placement support include?",
    a: "Yes—end-to-end support: resume & LinkedIn makeover, aptitude and communication prep, weekly mock interviews (HR/Technical), curated job alerts, referrals via partner/alumni network, interview scheduling, and 1:1 feedback until you convert. (No false 'guarantee'; outcomes depend on your performance, but we stay with you.)",
  },
  {
    q: "What real projects will I build that impress recruiters?",
    a: "Every track includes hands-on labs and a capstone (e.g., Selenium automation suite, AWS CI/CD pipeline, BI dashboards with DAX, Full-Stack CRUD with auth, React Native app). You'll push code to GitHub with a professional README and present impact metrics—ready for portfolio and interviews.",
  },
  {
    q: "Can I learn while studying/working? What if I miss a class?",
    a: "Yes—flexible batches (weekday/weekend/evening), backup classes, doubt-clearing support, and recordings for online/hybrid sessions ensure you never fall behind.",
  },
  {
    q: "Who are the trainers and how is the class conducted?",
    a: "Industry practitioners lead small cohorts with structured roadmaps, live coding, assignments, code reviews, and interview-style checkpoints. You get personal feedback and a clear weekly progression plan.",
  },
  {
    q: "What do I walk away with at the end of the program?",
    a: "A Jobzenter certificate, 1–2 showcase projects, a recruiter-ready resume/LinkedIn, mock-interview reports, a 90-day job-search playbook, and continued access to our alumni/job updates community.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="w-full bg-gradient-to-br from-[#FFF6CC] to-white py-[96px] flex flex-col items-center">
      {/* Title */}
      <h2 className="text-[32px] font-extrabold text-[#1A1A1A] text-center mt-[10px] mb-[70px]">
        Frequently Ask Questions
      </h2>

      {/* Main row */}
      <div className="w-full max-w-[1180px] flex flex-wrap lg:flex-nowrap gap-[100px] items-start justify-between px-6 ">
        {/* LEFT: FAQ list */}
        <div className="flex-1 max-w-[560px] w-full flex flex-col gap-[18px] ">
          {QA.map((item, index) => {
            const active = open === index;
            return (
              <div
                key={index}
                className="bg-white rounded-[18px] shadow-[0_18px_35px_rgba(20,20,20,0.12)] transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpen(active ? null : index)}
                  className="w-full flex items-start gap-[24px] px-[32px] py-[26px] text-left  text-bold border-none bg-[#FFFFFF] "
                  aria-expanded={active}
                >
                  {/* Left plus */}
                  <span className="text-[40px] leading-none font-bold font-['Inter'] font-weight-600 font-extrabold text-[#111111] mt-[4px]">
                    +
                  </span>

                  {/* Question text */}
                  <span className="flex-1 text-[18px] leading-[28px] font-semibold text-[#1F1F1F]">
                    {item.q}
                  </span>

                  {/* Right toggle */}
                  <span className="relative ml-auto w-[40px] h-[40px] rounded-full shadow-[0_4px_14px_rgba(20,20,20,0.25)] bg-[#000000] bg-black flex items-center justify-center">
                    <span className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[20px] font-extrabold text-[#FFFFFF] leading-none">
                      {active ? "−" : "+"}
                    </span>
                  </span>
                </button>

                {active && (
                  <div className="bg-[#FFFFFF] px-[32px] pb-[28px] pt-0 border-t border-[#ECECEC] shadow-[0_-1px_0_rgba(0,0,0,0.03)]">
                    <p className="text-[15px] leading-[24px] text-[#3A3A3A]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT: blob + "Any Question?" + input */}
        <div className="flex-1 max-w-[-100px] flex flex-col items-center text-center">
          {/* Black blob with white question mark */}
          <div className="relative w-[230px] h-[230px] flex items-center justify-center mb-10 mt-[100px]">
            <img
              src="/Vector 1.png"
              alt="blob"
              className="absolute inset-0 w-full h-full object-contain"
            />
            <img
              src="/questionmark.png"
              alt="question mark"
              className="relative z-10 w-[68px] h-[68px] object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-[26px] font-extrabold text-[#111111] mb-13 mt-[20px">
            Any Question?
          </h3>

          {/* Subtitle */}
          <p className="text-[16px] leading-[22px] text-[#4A4A4A] mb-[40px]">
            You can ask anything you want to know Feedback
          </p>

          {/* Input Field */}
          <div className="w-[360px] max-w-full flex flex-col items-start gap-[8px]">
            <label className="text-[14px] font-bold text-[#1F1F1F]">
              Let me know
            </label>
            <div className="w-full flex items-center bg-[#FFFFFF] justify-between border border-[#D9D9D9] bg-white rounded-[10px] px-[14px] h-[44px] shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
              <input
                type="text"
                placeholder="Enter Here"
                className="w-full bg-transparent bg-[#FFFFFF] text-[14px] text-[#1F1F1F] placeholder:text-[#B5B5B5] border-none outline-none"
              />
              <span className="pl-3 text-[#A1A1A1] text-[15px] font-semibold cursor-pointer">
                ×
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
