
// export default Footer;
import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowRight, ChevronRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const courses = [
    "AWS",
    "Software Testing",
    "Fullstack Development",
    "Business Intelligence",
    "CCNA",
    "Medical Billing",
  ];

  const quickLinks = [
    "Terms and Conditions",
    "Privacy Policy",
    "Disclaimer",
    "Courses We Offer",
  ];

  const servicesLinks = [
    "Resume Building",
    "Interview Preparation",
    "Job Portal Access",
    "Career Counseling",
    "Bootcamps",
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Subscribing email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-black text-white py-12 w-full" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-6">
        {/* Top Section - 4 Columns */}
        <div className="flex flex-wrap gap-8 justify-between">
          {/* Courses Column */}
          <div className="flex-1 text-[#FFFFFF] min-w-[280px]">
            <h3 
              className="mb-6 mt-12 ml-[45px] text-[#FFFFFF]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
              }}
            >
              Courses
            </h3>
            <ul>
              {courses.map((course, index) => (
                <li key={index} className="flex items-center group cursor-pointer mb-4">
                  <ChevronRight className="w-4 h-4 mr-2 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white group-hover:text-yellow-400 transition-colors">{course}</span>
                </li>
              ))}
          </ul>
        </div>

          {/* Quick Links Column */}
          <div className="flex-1 text-[#FFFFFF] min-w-[280px]">
            <h3 
              className="-mb-9 mt-6 ml-[45px] text-[#FFFFFF]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
              }}
            >
              Quick Links
            </h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index} className="flex items-center  group cursor-pointer mb-4">
                  <ChevronRight className="w-4 h-4 mr-2 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white group-hover:text-yellow-400 transition-colors">{link}</span>
                </li>
              ))}
          </ul>
        </div>

          {/* Services Links Column */}
          <div className="flex-1 min-w-[280px] text-[#FFFFFF]">
            <h3 
              className="mb-6 ml-[45px] text-[#FFFFFF]"
              style={{
                fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '100%',
                letterSpacing: '0%',
                textDecoration: 'underline',
                textDecorationStyle: 'solid',
              }}
            >
              Services Links
            </h3>
            <ul>
              {servicesLinks.map((service, index) => (
                <li key={index} className="flex items-center group cursor-pointer mb-4">
                  <ChevronRight className="w-4 h-4 mr-2 text-white transition-transform group-hover:translate-x-1" />
                  <span className="text-white group-hover:text-yellow-400  transition-colors">{service}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Subscribe Section */}
          <div
            className="relative bg-[#FDF001] text-black rounded-lg"
            style={{ width: '642px', height: '332px', right: '60px' }}
          >
            <h3 className="text-[17px] font-bold mb-5 ml-[20px] pt-8 ">Subscribe</h3>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="text-black focus:outline-none"
                style={{
                  width: '402.5555419921875px',
                  height: '50px',
                  top: '25px',
                  left: '20px',
                  position: 'absolute',
                  borderWidth: '0px',
                  borderStyle: 'solid',
                  borderColor: '#D6D6D6',
                  padding: '0 16px',
                  borderRadius: '6px',
                }}
              />
              <button
                type="submit"
                className="bg-[#FDBE0A] hover:bg-[#FFC107] text-white px-6 py-2 rounded-r-md absolute border-none"
                style={{
                  top: '25px',
                  left: '422.56px',
                  height: '50px',
                  width: '50px',
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
            <h4 className="absolute font-bold mb-2 ml-[20px]  opacity: 0.6, fontFamily: 'Inter', fontSize: '16px', top-[140px]">Stay in the loop with our newsletter!</h4>
            <p 
              className="text-black"
              style={{
                width: '602px',
                height: '151px',
                top: '199px',
                left: '20px',
                position: 'absolute',
                opacity: 0.6,
                fontFamily: 'Inter',
                fontWeight: 300,
                fontSize: '14px',
                lineHeight: '30px',
                letterSpacing: '0%',
              }}
            >
              Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to
              know about our latest products, special promotions, and exciting updates. Join our
              community of like-minded individuals who share a passion for [your niche/industry].
          </p>
        </div>
      </div>

        {/* Bottom Section - Copyright and Social Media Icons */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">© 2023 All Rights Reserved</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
