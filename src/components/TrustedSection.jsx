// import React from "react";

// const TrustedSection = () => {
//   return (
//     <section className="relative flex justify-between items-center px-[160px] py-[120px] bg-white">
//       {/* LEFT SIDE - TEXT */}
//       <div className="max-w-[600px]">
//         <h2 className="font-['Inter'] font-bold text-[32px] text-[#000000] leading-[42px] mb-[24px] relative">
//           Trusted by thousands, we help careers grow with{" "}
//           <span className="relative text-[#000000] font-bold">
//             confidence.
//             {/* Yellow underline (#FFC107) */}
//             <span className="absolute left-0 bottom-[2px] w-[118px] h-[8px] bg-[#FFC107] rounded-full"></span>
//           </span>
//         </h2>

//         <p className="font-['Inter'] text-[16px] leading-[28px] text-[#000000CC]">
//           At JobZenter, we are trusted by thousands of aspiring professionals who
//           rely on us to shape their future with confidence. Our proven training
//           programs and dedicated placement support have helped students, freshers,
//           and experienced candidates transform their skills, unlock their
//           potential, and secure positions in top MNCs with salaries ranging from
//           5 LPA to 15 LPA. We believe in empowering every individual with the
//           knowledge, guidance, and industry exposure they need to achieve their
//           career goals and step into the corporate world with certainty and
//           success.
//         </p>
//       </div>

//       {/* RIGHT SIDE - IMAGES + 100% BADGE */}
//       <div className="relative flex items-center gap-[50px]">
//         {/* LEFT IMAGE */}
//         <img
//           src="/place1.png"
//           alt="Team Discussion"
//           className="object-cover rounded-[152.87px]"
//           style={{
//             width: "305.73px",
//             height: "611.47px",
//             opacity: 1,
//             top: "1441.04px",
//             left: "708.13px",
//           }}
//         />

//         {/* RIGHT IMAGE */}
//         <img
//           src="/place2.png"
//           alt="Mentorship Session"
//           className="object-cover rounded-[152.87px]"
//           style={{
//             width: "305.73px",
//             height: "611.47px",
//             opacity: 1,
//             top: "1441.04px",
//             left: "1069.55px",
//           }}
//         />

//         {/* 100% Placement Assistance Badge */}
//         <div
//           className="absolute flex flex-col justify-center items-center rounded-full text-center shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
//           style={{
//             width: "231.14px",
//             height: "231.14px",
//             backgroundColor: "#FFF000",
//             top: "1623.85px",
//             left: "937.98px",
//           }}
//         >
//           <h3 className="font-['Inter'] font-bold text-[40px] text-[#000000] leading-[42px]">
//             100%
//           </h3>
//           <p className="font-['Inter'] text-[16px] font-medium text-[#000000] leading-[22px] mt-1">
//             Placement<br />Assistance
//           </p>
//         </div>

//         {/* Text Inside 100% Circle (Image Position Fix) */}
//         <div
//           className="absolute"
//           style={{
//             width: "158px",
//             height: "67px",
//             opacity: 1,
//             top: "1680px", // Adjusted for exact center
//             left: "975px", // Adjusted for exact center
//           }}
//         >
//           <img
//             src="/fccc8e5a-188b-42a4-b4bf-279c29f31f7f.png" // Added image URL
//             alt="Placement Assistance Text"
//             className="w-[158px] h-[67px]"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrustedSection;

import React from "react";

const TrustedSection = () => {
  return (
    <section className="relative flex justify-between items-center px-[160px] py-[120px] bg-white">
      {/* LEFT SIDE - TEXT */}
      <div className="max-w-[600px]">
        <h2 className="font-['Inter'] font-bold text-[32px] text-[#000000] leading-[42px] mb-[24px] relative">
          Trusted by thousands, we help careers grow with{" "}
          <span className="relative text-[#000000] font-bold">
            confidence.
            {/* Yellow underline (#FFC107) */}
            <span className="absolute left-0 bottom-[2px] w-[118px] h-[8px] bg-[#FFC107] rounded-full"></span>
          </span>
        </h2>

        <p className="font-['Inter'] text-[16px] leading-[28px] text-[#000000CC]">
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
  <div className="relative flex items-center gap-[50px]" style={{ height: "611.47px" }}>
        {/* LEFT IMAGE */}
        <img
          src="/place1.png"
          alt="Team Discussion"
          className="object-cover rounded-[152.87px]"
          style={{
            width: "305.73px",
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
            width: "305.73px",
            height: "611.47px",
            opacity: 1,
          }}
        />

        {/* 100% Placement Assistance Badge */}
        <div
          className="absolute flex flex-col justify-center items-center rounded-full text-center shadow-[0_8px_25px_rgba(0,0,0,0.25)]"
          style={{
            width: "231.14px",
            height: "231.14px",
            backgroundColor: "#FFF000",
            /* center the badge inside the right-side wrapper */
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            position: "absolute",
          }}
        >
          {/*
            Place two absolutely positioned text blocks inside the yellow circle.
            Assumption: you want the text sized/weighted exactly as provided, but
            centered inside the circle rather than using page-level top/left coords.
            If you truly need page-level absolute positions (top:1680px etc) tell me
            and I'll move them outside the badge and apply those coordinates.
          */}

          {/* 100% block - matches: font-size 55px, weight 600, width 158, height 67 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "40%",
              transform: "translate(-50%, -50%)",
              width: "158px",
              height: "67px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "55px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#000",
              opacity: 1,
            }}
          >
            100%
          </div>

          {/* Placement Assistance block - matches: width 106, height 50, font-size ~18.91px, weight 500 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "66%",
              transform: "translate(-50%, -50%)",
              width: "106px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontStyle: "normal",
              fontSize: "18.91px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
              color: "#000",
              opacity: 1,
            }}
          >
            <div>
              Placement
              <br />
              Assistance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
