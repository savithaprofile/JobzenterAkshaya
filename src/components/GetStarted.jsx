import React from "react";
import { IoChevronDown } from "react-icons/io5";

const GetStarted = () => {
  return (
    <section className="relative flex justify-center items-center bg-white">
      {/* Outer Card */}
      <div
        className="relative bg-white shadow-[0_8px_25px_rgba(0,0,0,0.15)] rounded-[31px] flex flex-col items-center"
        style={{
          width: "1120px",
          height: "266px",
          marginTop: "120px",
        }}
      >
        {/* Title */}
        <h2
          className="absolute font-['Inter'] font-semibold text-[40px] text-[#000000] text-center leading-[100%]"
          style={{
            width: "640px",
            height: "64px",
            top: "25px",
            left: "240px",
          }}
        >
          Find The Best Service You Need
        </h2>

        {/* Yellow Line */}
        <div
          className="absolute bg-[#FFF000]"
          style={{
            width: "1092px",
            height: "5px",
            top: "132px", // slightly lowered for gap
            left: "14px",
          }}
        ></div>

        {/* Input Row */}
        <div
          className="absolute flex items-center justify-between"
          style={{
            top: "163px",
            left: "54px",
            width: "1012px",
          }}
        >
          {/* Dropdown */}
          <div className="relative">
            <select
              className="w-[194px] h-[45px] rounded-[7px] bg-[#F2F2F2] text-[#B7B7B7] font-['Inter'] pl-[14px] pr-[10px] text-[13px] font-normal leading-[31.52px] tracking-[-0.02em] outline-none border-none appearance-none focus:ring-0"
              defaultValue=""
            >
              <option value="" disabled>
                Type of service
              </option>
              <option value="training">Software Training</option>
              <option value="placement">Placement Support</option>
              <option value="consulting">Consulting</option>
            </select>

            {/* Arrow Icon */}
            <IoChevronDown
              className="absolute text-[#9B9B9B] pointer-events-none"
              style={{
                width: "14px",
                height: "14px",
                top: "50%",
                right: "12px",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-[194px] h-[45px] rounded-[7px] bg-[#F2F2F2] pl-[14px] pr-[10px] font-['Inter'] text-[13px] text-[#B7B7B7] leading-[31.52px] tracking-[-0.02em] outline-none border-none placeholder:text-[#B7B7B7]"
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone"
            className="w-[194px] h-[45px] rounded-[7px] bg-[#F2F2F2] pl-14 font-['Inter'] text-[13px] text-[#B7B7B7] leading-[31.52px] tracking-[-0.02em] outline-none border-none placeholder:text-[#B7B7B7]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-[194px] h-[45px] rounded-[7px] bg-[#F2F2F2] pl-14 font-['Inter'] text-[13px] text-[#B7B7B7] leading-[31.52px] tracking-[-0.02em] outline-none border-none placeholder:text-[#B7B7B7]"
          />

          {/* Get Started Button */}
          <button
            className="rounded-[10px] font-['Inter'] font-medium text-[18px] text-[#000000] bg-[#FFF000] hover:bg-[#ffec00] transition-all shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            style={{
              width: "187px",
              height: "64px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
