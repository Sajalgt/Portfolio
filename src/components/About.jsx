// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* Left Content */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>
            I’m <span>Sajal Gupta</span> — a software developer who enjoys breaking
            down complex problems and turning them into clean, scalable solutions.
            For me, coding isn’t just about writing lines of code, it’s about
            thinking clearly, structuring logic, and building things that last.
          </p>

          <p>
            My technical foundation lies in <span>Java</span>,{" "}
            <span>Data Structures</span>, and modern{" "}
            <span>Web Development</span>. I enjoy working end-to-end on projects —
            from designing logic to shipping usable features — with a strong focus
            on clean, maintainable code.
          </p>

          <p>
            Alongside development, I’ve taken on real leadership responsibilities
            as <span>Vice President of E-Cell GLAU</span>,{" "}
            <span>Student Convener at IIC GLAU</span>, and a member of the{" "}
            <span>Co-Oranizer of Techstars and Organizing Committee at TEDx GLAU</span>. These roles
            strengthened my leadership, communication, and time-management skills.
          </p>

          <p>
            What sets me apart is that I didn’t just lead — I built. I actively
            worked on improving the websites of <span>E-Cell GLAU</span>,{" "}
            <span>TEDx GLAU</span>, and <span>Techstars initiatives</span>, applying
            my development skills in real, live environments.
          </p>

          <p>
            I’m driven by <span>curiosity</span>, <span>consistency</span>, and{" "}
            <span>growth</span>. I like taking ownership, learning by building, and
            becoming a developer who delivers impact — not just code.
          </p>
        </motion.div>

        {/* Right Highlights */}
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="highlight-card">💻 Full-Stack Mindset</div>
          <div className="highlight-card">🧠 Strong DSA & Logic</div>
          <div className="highlight-card">👥 Leadership Experience</div>
          <div className="highlight-card">🚀 Real-World Projects</div>
          <div className="highlight-card">⏱️ Time & Team Management</div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
