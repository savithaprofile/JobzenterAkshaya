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
    a: "Yes, you can learn at your own pace with recorded sessions and flexible schedules. Our mentors help you stay on track.",
  },
  {
    q: "Who are the trainers and how is the class conducted?",
    a: "Our trainers are working professionals from top MNCs. Classes are live, interactive, and hands-on with practice tasks.",
  },
  {
    q: "What do I walk away with at the end of the program?",
    a: "You'll receive a certificate of completion, a portfolio of real projects, GitHub repositories, and ongoing career support.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(1); // open the second item by default

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFCE6] to-white py-24 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-[32px] font-extrabold text-black text-center mb-12">
        Frequently Ask{" "}
        <span className="text-[#F7A600] underline decoration-[#F7A600]">
          Questions
        </span>
      </h2>

      {/* Main row */}
      <div className="w-full max-w-[1200px] flex gap-[120px] justify-center px-8 bg-white ">
        {/* LEFT: FAQ list */}
        <div className="w-[559px] flex flex-col gap-[10px] bg-white ">
          {QA.map((item, i) => {
            const active = open === i;
            return (
              <div
                key={i}
                className={`relative w-[558px] bg-white flex items-start shadow-[0_4px_15px_rgba(0,0,0,0.08)] rounded-[10px] transition-all duration-300 ${
                  active ? "h-auto" : "h-[100px]"
                } overflow-hidden`}
              >
                <div className="absolute top-[27px] left-[38px] w-[460px] flex flex-col">
                  <div className="flex items-start relative">
                    {/* Left + icon - static, always +, no interaction */}
                    <div className="absolute top-[13px] left-0 text-black opacity-80 text-[36px] leading-none font-bold">
                      +
                    </div>

                    {/* Text */}
                    <button
                      onClick={() => setOpen(active ? null : i)}
                      className="absolute left-[41px] text-[18px] text-black opacity-90 font-[700] leading-[130%] font-['Inter'] text-left cursor-pointer"
                    >
                      {item.q}
                    </button>
                  </div>
                </div>

                {/* Right circle + */}
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="absolute top-[33px] left-[512px] w-[25px] h-[25px] bg-black rounded-full flex justify-center items-center cursor-pointer"
                >
                  <span className="text-white text-[18px] font-bold leading-none">
                    {active ? "−" : "+"}
                  </span>
                </button>

                {/* Answer content */}
                {active && (
                  <div className="mt-[100px] px-[38px] pb-6 w-full bg-white">
                    <div className="h-[1px] w-full bg-[#E7E7E7] mb-4" />
                    <p className="text-[16px] leading-[26px] text-[#202020] bg-white">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT: blob + "Any Question?" + input */}
        <div className="flex-1 flex flex-col items-center justify-start max-w-[500px]">
          {/* Black blob with white question mark */}
          <div className="relative w-[250px] h-[250px] flex items-center justify-center mb-8">
            {/* Black blob shape */}
            <img
              src="/Vector 1.png"
              alt="blob"
              className="absolute inset-0 w-full h-full object-contain"
            />
            {/* White question mark centered */}
            <img
              src="/questionmark.png"
              alt="question mark"
              className="relative z-10 w-[70px] h-[70px] object-contain"
            />
          </div>

          {/* Title */}
          <h3 className="text-[26px] font-[800] text-black text-center mb-2">
            Any Question?
          </h3>

          {/* Subtitle */}
          <p className="text-[14px] text-black/60 text-center mb-6">
            You can ask anything you want to know Feedback
          </p>

       {/* Input Field */}
<div className="mt-[18px] w-[380px] flex flex-col gap-[6px]">
  <label className="text-[14px] font-[700] text-black font-['Inter']">
    Let me know
  </label>

  <div className="flex items-center border border-[#D9D9D9] bg-white rounded-[8px] px-[12px] h-[40px]">
    <input
      type="text"
      placeholder="Enter Here"
      className="w-full bg-transparent text-[14px] text-black placeholder:text-[#B3B3B3] border-none outline-none"
    />
    <span className="text-[#A1A1A1] text-[14px] font-[600] cursor-pointer">
      X
    </span>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
