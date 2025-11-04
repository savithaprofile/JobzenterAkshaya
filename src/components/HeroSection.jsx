import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[963px] flex items-center justify-center overflow-hidden">
      {/* Curved Yellow Box */}
      <div
        className="absolute"
        style={{
          width: "1832.77px",
          height: "1200.34px",
          top: "-404px",
          left: "-212px",
          backgroundColor: "#FDF00173",
          borderRadius: "131px",
          boxShadow: "0px 12px 42.4px 5px #00000040",
          transform: "rotate(-13.75deg)",
          opacity: 1,
          zIndex: 0,
        }}
      ></div>

      {/* Text and Buttons */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col">
        <h1
          className="absolute font-['Inter'] text-[60px] font-extrabold leading-[68px] text-[#000000]"
          style={{
            width: "529px",
            height: "166px",
            top: "304px",
            left: "160px",
          }}
        >
          Learn, Upskill &amp; <br /> Get Placed
        </h1>

        <p
          className="absolute text-[18px] leading-[28px] font-['Inter'] text-[#000000B2]"
          style={{
            width: "700px",
            height: "64px",
            top: "475px",
            left: "160px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy.
        </p>

        <button
          className="absolute bg-[#000000] text-[#FDF001] rounded-[8px] font-semibold hover:opacity-90 transition-all"
          style={{
            width: "237px",
            height: "61px",
            top: "567px",
            left: "160px",
          }}
        >
          Explore Courses
        </button>

        <button
          className="absolute bg-[#FDF001] border border-black text-[#000000] rounded-[8px] font-semibold hover:bg-[#fff450] transition-all"
          style={{
            width: "237px",
            height: "61px",
            top: "567px",
            left: "425px",
          }}
        >
          Talk to us
        </button>
      </div>

      {/* Rocket Image */}
      <img
        src="/image5143537removebgpreview11192-cbty-300h.png"
        alt="Rocket"
        className="absolute"
        style={{
          width: "240.64px",
          height: "240.64px",
          top: "92px",
          left: "717px",
          transform: "rotate(11.35deg)",
          opacity: 1,
          zIndex: 2,
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
            width: "487.97px",
            height: "395.21px",
            top: "-10px", // moved slightly lower
            left: "10px", // moved slightly right
            opacity: 1,
            zIndex: 2,
          }}
        />
      </div>

      {/* Top Ellipse (Filled + Border, true ellipse shape) */}
      <div
        className="absolute"
        style={{
          width: "121px",
          height: "117px",
          top: "168px",
          left: "1179px",
          backgroundColor: "#FFC107",
          border: "2px solid #FFC107",
          borderRadius: "49% / 51%", // elliptical, not perfectly circular
          opacity: 1,
          zIndex: 3,
        }}
      ></div>

      {/* Bottom Elliptical Shape (stretched and rotated) */}
      <div
        className="absolute"
        style={{
          width: "95.34px",
          height: "93.05px",
          top: "556.16px",
          left: "840.23px",
          backgroundColor: "#FFC107",
          borderRadius: "49% / 51%", // maintains ellipse proportions
          transform: "rotate(58.67deg) scaleX(1.15)", // stretched horizontally for correct Figma feel
          opacity: 1,
          zIndex: 3,
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
