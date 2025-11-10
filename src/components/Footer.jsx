
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    {
      label: "LinkedIn",
      to: "https://www.linkedin.com/company/jobzenter",
      icon: FaLinkedinIn,
    },
    {
      label: "Facebook",
      to: "https://facebook.com/jobzenter",
      icon: FaFacebookF,
    },
    {
      label: "Instagram",
      to: "https://www.instagram.com/jobzenter_official?igsh=dWVwdGs1bWM4ZnBp",
      icon: FaInstagram,
    },
    {
      label: "YouTube",
      to: "https://youtube.com/@jobzenter",
      icon: FaYoutube,
    },
    {
      label: "WhatsApp",
      to: "https://wa.me/919000000000",
      icon: FaWhatsapp,
    },
  ];

  const courses = [
    { label: "AWS", to: "/courses/aws" },
    { label: "Software Testing", to: "/courses/software-testing" },
    { label: "Fullstack Development", to: "/courses/fullstack-development" },
    { label: "Business Intelligence", to: "/courses/business-intelligence" },
    { label: "CCNA", to: "/courses/ccna" },
    { label: "Medical Billing", to: "/courses/medical-billing" },
  ];

  const quickLinks = [
    { label: "Terms and Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Disclaimer", to: "/disclaimer" },
    { label: "Courses We Offer", to: "/courses" },
  ];

  const servicesLinks = [
    { label: "Bootcamps", to: "/services/bootcamps" },
    { label: "Resume Building", to: "/services/resume-building" },
    { label: "Interview Preparation", to: "/services/interview-preparation" },
  ];

  const contactDetails = [
    {
      icon: Mail,
      label: "support@jobzenter.com",
      to: "mailto:support@jobzenter.com",
    },
    {
      icon: Phone,
      label: "+91 90000 00000",
      to: "tel:+919000000000",
    },
    {
      icon: MapPin,
      label: "Chennai, Tamil Nadu",
      to: "/reach-us",
    },
  ];

  return (
    <footer className="footer">
      <div className="container-fluid footer-container">
        <div className="footer-surface">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="/logo1206-7vhj-200h.png"
                alt="Jobzenter Logo"
                className="footer-logo"
              />
              <p className="footer-social-title">Social Media</p>
              <div className="footer-social">
                {socialLinks.map(({ label, to, icon: Icon }) => (
                  <Link
                    key={label}
                    to={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social-pill"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-list">
                {quickLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Courses</h4>
              <ul className="footer-list">
                {courses.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Services Links</h4>
              <ul className="footer-list">
                {servicesLinks.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Contact With Us</h4>
              <ul className="footer-contact-list">
                {contactDetails.map(({ icon: Icon, label, to }) => (
                  <li key={label}>
                    <Icon size={18} className="footer-contact-icon" />
                    <Link to={to} className="footer-contact-link">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copy">Copyright © 2025 Jobzenter. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
