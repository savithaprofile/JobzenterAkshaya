import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/", hasDropdown: false },
    { label: "Courses", path: "/courses", hasDropdown: false },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Reach Us", path: "/reach-us", hasDropdown: false },
    { label: "Career Lab", path: "/career-lab", hasDropdown: true },
    { label: "Tech Blogs", path: "/tech-blogs", hasDropdown: false },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[89px] bg-[#FCF68A] z-50 opacity-100 shadow-sm">
      <div className="max-w-[1400px] w-full mx-auto h-full flex items-center justify-between px-[60px]">
        {/* Logo */}
        <img
          src="/logo1206-7vhj-200h.png"
          alt="Jobzenter Logo"
          className="w-[227px] h-[52px] object-contain"
        />

        {/* Navigation Links */}
        <ul className="nav-links flex items-center gap-[40px] font-['Inter'] text-[16px] font-normal text-[#000000] leading-[100%] tracking-[0%]">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li
              key={index}
              className={`relative flex items-center justify-center min-w-[92px] h-[32px] text-center ${
                item.label === "Career Lab" ? "min-w-[120px]" : ""
              }`}
            >
              <Link
                to={item.path}
                className={`transition-colors duration-150 no-underline whitespace-nowrap ${
                  isActive
                    ? "font-medium text-[#000000] pb-1 border-b-2 border-black"
                    : "text-[#000000]"
                }`}
              >
                {item.label}
              </Link>

              {item.hasDropdown && (
                <IoChevronDownSharp
                  size={14}
                  className="ml-[4px] mt-[2px] text-[#000000]"
                />
              )}

              {/* underline handled via border on active link (Home) */}
            </li>
          );
        })}
      </ul>

        {/* Right Side Icons */}
        <div
          className="flex items-center justify-end"
          style={{
            width: "135.999px",
            height: "24px",
            gap: "40px",
            top: "32px",
            left: "1212px",
          }}
        >
        <FaTwitter className="w-[24px] h-[24px] text-[#1DA1F2] hover:scale-110 transition-transform" />
        <FaFacebookF className="w-[24px] h-[24px] text-[#1877F2] hover:scale-110 transition-transform" />
        <FaInstagram className="w-[24px] h-[24px] text-[#E4405F] hover:scale-110 transition-transform" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
