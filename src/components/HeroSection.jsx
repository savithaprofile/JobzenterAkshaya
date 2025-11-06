import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[963px] mt-[-90px] flex items-center justify-center overflow-hidden">
      {/* Curved Yellow Box */}
      <div
        className="absolute"
        style={{
          width: "1702.77px",
          height: "1200.34px",
          top: "-404px",
          
          boxShadow: "2px 2px 12.4px 2px #00000040",

          left: "-152px",
          backgroundColor: "#FDF00173",
          borderRadius: "161px",
          transform: "rotate(-13.75deg)",
          opacity: 1,
          zIndex: 0,
        }}
      ></div>

      {/* Text and Buttons */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <h1
          className="absolute font-['Inter'] text-[69px] font-extrabold leading-[68px] text-[#000000]"
          style={{
            width: "549px",
            height: "186px",
            top: "254px",
            left: "210px",
          }}
        >
          Learn, Upskill &amp; <br/> <span className="block mt-[10px]">Get Placed</span>
        </h1>

        <p
          className="absolute text-[18px] leading-[28px] font-['Inter'] text-[#000000]"
          style={{
            width: "700px",
            height: "64px",
            top: "445px",
            left: "210px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br />Lorem Ipsum has been the industry&apos;s standard dummy.
        </p>

        <button
          className="absolute text-[18px] bg-[#000000] border-none text-[#FDF001] rounded-[8px] font-semibold hover:bg-[#FDF001] hover:text-[#000000]  hover:opacity-90 transition-all"
          style={{
            width: "237px",
            height: "61px",
            top: "547px",
            left: "220px",
            boxShadow: "0px 0px 7px 3px #00000040",
          }}
        >
          Explore Courses
        </button>

        <button
          className="absolute bg-[#FDF001] border-none box text-[18px] text-[#000000] rounded-[8px] font-semibold hover:bg-[#000000]  hover:text-[#FDF001] transition-all"
          style={{
            width: "237px",
            height: "61px",
            top: "547px",
            left: "495px",
            boxShadow: "0px 0px 7px 3px #00000040",
          }}
        >
          Talk to us
        </button>
      </div>

      {/* Rocket Image */}
      <img
        src="/Rocket.png"
        alt="Rocket"
        className="absolute"
        style={{
          width: "280.64px",
          height: "280.64px",
          top: "122px",
          left: "787px",
          transform: "rotate(2.35deg)",
          opacity: 1,
          zIndex: 3,
        }}
      />

      {/* Mask Group (Ellipse + Girl Image) */}
      <div
        className="absolute"
        style={{
          width: "425.46px",
          height: "425.46px",
          top: "242.54px",
          left: "870px", // moved slightly right
          opacity: 1,
          zIndex: 2,
        }}
      >
        {/* Yellow Ellipse background */}
        {/* <div
          className="absolute"
          style={{
            width: "425.46px",
            height: "425.46px",
            backgroundColor: "#FFC107",
            borderRadius: "50%",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        ></div> */}

        {/* Girl Image - adjusted to lower & right alignment */}
        <img
          src="/Group.png"
          alt="Happy Woman"
          className="absolute object-contain"
          style={{
            width: "587.97px",
            height: "495.21px",
            top: "-70px", // moved slightly lower
            left: "10px", // moved slightly right
            opacity: 1,
            zIndex: 2,
          }}
        />
      </div>

      {/* Top Ellipse - Image with black outer and yellow inner */}
      <div
        className="absolute"
        style={{
          width: "114px",
          height: "112px",
          top: "173px",
          left: "1279px",
          opacity: 1,
          zIndex: 3,
        }}
      >
        {/* Black outer ring */}
        <img
          src="/black.png"
          alt="Black Outer Ring"
          className="absolute inset-0 w-full h-full object-contain"
        />
        {/* Yellow inner circle */}
        <img
          src="/yellow.png"
          alt="Yellow Inner Circle"
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            width: "90%",
            height: "90%",
            top: "50%",
            left: "48%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Bottom Elliptical Shape (stretched and rotated) */}
      <div
        className="absolute"
        style={{
         width: "114px",
          height: "112px",
          top: "533px",
          left: "890px",
          
          opacity: 1,
          zIndex: 3,
        }}

      >
<img
          src="/black.png"
          alt="Black Outer Ring"
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            width: "80%",
            height: "80%",
            top: "50%",
            left: "48%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        />
        {/* Yellow inner circle */}
        <img
          src="/yellow.png"
          alt="Yellow Inner Circle"
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            width: "80%",
            height: "80%",
            top: "50%",
            left: "54%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        />




      </div>
    </section>
  );
};

export default HeroSection;
