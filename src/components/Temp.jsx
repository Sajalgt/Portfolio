import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left */}
        <div className="footer-left">
          <h3>Sajal Gupta</h3>
          <p>Frontend • Backend • Java • DSA</p>
        </div>

        {/* Center */}
        <div className="footer-socials">
          <a href="mailto:sajalngupta@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Sajalgt"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sajal-gupta31"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right */}
        <div className="footer-right">
          <p>© {new Date().getFullYear()} Sajal Gupta</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
