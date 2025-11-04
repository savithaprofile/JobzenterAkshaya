// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-black text-white">
//       <div className="grid md:grid-cols-4 gap-8 px-8 py-10">
//         {/* Courses */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Courses</h3>
//           <ul className="space-y-2 text-sm list-none">
//             <li><Link to="/aws" className="text-white hover:text-yellow-400 no-underline decoration-none">› AWS</Link></li>
//             <li><Link to="/software-testing" className="text-white hover:text-yellow-400 no-underline decoration-none">› Software Testing</Link></li>
//             <li><Link to="/fullstack" className="text-white hover:text-yellow-400 no-underline decoration-none">› Fullstack Development</Link></li>
//             <li><Link to="/business-intelligence" className="text-white hover:text-yellow-400 no-underline decoration-none">› Business Intelligence</Link></li>
//             <li><Link to="/ccna" className="text-white hover:text-yellow-400 no-underline decoration-none">› CCNA</Link></li>
//             <li><Link to="/medical-billing" className="text-white hover:text-yellow-400 no-underline decoration-none">› Medical Billing</Link></li>
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-sm list-none">
//             <li><Link to="/terms" className="text-white hover:text-yellow-400 no-underline decoration-none">› Terms and Conditions</Link></li>
//             <li><Link to="/privacy" className="text-white hover:text-yellow-400 no-underline decoration-none">› Privacy Policy</Link></li>
//             <li><Link to="/disclaimer" className="text-white hover:text-yellow-400 no-underline decoration-none">› Disclaimer</Link></li>
//             <li><Link to="/courses" className="text-white hover:text-yellow-400 no-underline decoration-none">› Courses We Offer</Link></li>
//           </ul>
//         </div>

//         {/* Services Links */}
//         <div>
//           <h3 className="text-lg font-semibold mb-4">Services Links</h3>
//           <ul className="space-y-2 text-sm list-none">
//             <li><Link to="/resume-building" className="text-white hover:text-yellow-400 no-underline decoration-none">› Resume Building</Link></li>
//             <li><Link to="/interview-preparation" className="text-white hover:text-yellow-400 no-underline decoration-none">› Interview Preparation</Link></li>
//             <li><Link to="/job-portal" className="text-white hover:text-yellow-400 no-underline decoration-none">› Job Portal Access</Link></li>
//             <li><Link to="/career-counseling" className="text-white hover:text-yellow-400 no-underline decoration-none">› Career Counseling</Link></li>
//             <li><Link to="/bootcamps" className="text-white hover:text-yellow-400 no-underline decoration-none">› Bootcamps</Link></li>
//           </ul>
//         </div>

//         {/* Subscribe Section */}
//         <div className="bg-yellow-400 text-black rounded-lg p-6">
//           <h3 className="font-bold mb-3">Subscribe</h3>
//           <div className="flex mb-4">
//             <input
//               type="email"
//               placeholder="Enter Your Email"
//               className="flex-1 px-3 py-2 bg-white text-black rounded-l-md focus:outline-none placeholder-gray-500"
//             />
//             <button className="bg-orange-500 px-4 py-2 rounded-r-md text-white hover:bg-orange-600">
//               ➜
//             </button>
//           </div>
//           <p className="text-sm font-semibold mb-2">
//             Stay in the loop with our newsletter!
//           </p>
//           <p className="text-xs text-gray-700 leading-relaxed">
//             Subscribe to our newsletter and unlock a world of exclusive benefits.
//             Be the first to know about our latest products, special promotions,
//             and exciting updates. Join our community of like-minded individuals
//             who share a passion for your niche or industry.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="border-gray-800 py-4 px-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//         <p className="text-center mx-auto">© 2023 All Rights Reserved</p>
//         <div className="flex space-x-4 mt-3 md:mt-0">
//           <Link to="/" className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
//             <FaFacebookF />
//           </Link>
//           <Link to="/" className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
//             <FaTwitter />
//           </Link>
//           <Link to="/" className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
//             <FaInstagram />
//           </Link>
//           <Link to="/" className="bg-gray-800 text-white p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300">
//             <FaLinkedinIn />
//           </Link>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-['Inter']">
      {/* Top Section */}
      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12">
        {/* Courses */}
        <div>
          <h3 className="text-[16px] font-semibold mb-4 underline underline-offset-4 decoration-white">
            Courses
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li><Link to="/aws" className="hover:text-yellow-400 transition">› AWS</Link></li>
            <li><Link to="/software-testing" className="hover:text-yellow-400 transition">› Software Testing</Link></li>
            <li><Link to="/fullstack" className="hover:text-yellow-400 transition">› Fullstack Development</Link></li>
            <li><Link to="/business-intelligence" className="hover:text-yellow-400 transition">› Business Intelligence</Link></li>
            <li><Link to="/ccna" className="hover:text-yellow-400 transition">› CCNA</Link></li>
            <li><Link to="/medical-billing" className="hover:text-yellow-400 transition">› Medical Billing</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[16px] font-semibold mb-4 underline underline-offset-4 decoration-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li><Link to="/terms" className="hover:text-yellow-400 transition">› Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-400 transition">› Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-yellow-400 transition">› Disclaimer</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-400 transition">› Courses We Offer</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-[16px] font-semibold mb-4 underline underline-offset-4 decoration-white">
            Services Links
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li><Link to="/resume-building" className="hover:text-yellow-400 transition">› Resume Building</Link></li>
            <li><Link to="/interview-preparation" className="hover:text-yellow-400 transition">› Interview Preparation</Link></li>
            <li><Link to="/job-portal" className="hover:text-yellow-400 transition">› Job Portal Access</Link></li>
            <li><Link to="/career-counseling" className="hover:text-yellow-400 transition">› Career Counseling</Link></li>
            <li><Link to="/bootcamps" className="hover:text-yellow-400 transition">› Bootcamps</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="bg-[#FFEB00] text-black rounded-none p-6 md:p-8">
          <h3 className="text-[16px] font-semibold mb-3">Subscribe</h3>
          <div className="flex mb-5">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 text-[14px] bg-white border border-gray-300 rounded-l-md focus:outline-none placeholder-gray-500"
            />
            <button className="bg-[#FDBE0A] px-6 rounded-r-md text-white font-bold text-[16px] hover:bg-[#f5a200] transition">
              ➜
            </button>
          </div>
          <p className="text-[14px] font-semibold mb-2 text-gray-900">
            Stay in the loop with our newsletter!
          </p>
          <p className="text-[13px] text-gray-800 leading-[20px]">
            Subscribe to our newsletter and unlock a world of exclusive benefits.
            Be the first to know about our latest products, special promotions,
            and exciting updates. Join our community of like-minded individuals
            who share a passion for your niche or industry.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800 py-6 px-8 flex flex-col md:flex-row justify-between items-center text-[14px] text-gray-400">
        <p className="text-center">© 2023 All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <Link
              key={i}
              to="/"
              className="bg-[#1c1c1c] text-white p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <Icon className="text-[14px]" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
