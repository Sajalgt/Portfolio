import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Have a project, idea, or opportunity? Let’s talk.
      </motion.p>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {/* Left */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>I’m always open to discussing new projects or opportunities.</p>

          <div className="contact-links">
            <a href="mailto:sajalngupta@gmail.com">
              <FaEnvelope /> sajalngupta@gmail.com
            </a>
            <a href="https://github.com/Sajalgt" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/sajal-gupta31" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message [Lock]</button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
