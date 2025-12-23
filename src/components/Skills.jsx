import React from "react";
import "../styles/skills.css";

import { motion } from "framer-motion";

// Icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiFigma, SiVite, SiGo, SiC } from "react-icons/si";
import { DiJava, DiPython } from "react-icons/di";
import { MdOutlineDataArray } from "react-icons/md";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      {/* Heading */}
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Programming Languages */}
      <motion.div
        className="skills-category"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <h3>Programming Languages</h3>
        <div className="skills-grid">
          <motion.div variants={item} className="skill-card"><DiJava /><span>Java</span></motion.div>
          <motion.div variants={item} className="skill-card"><DiPython /><span>Python</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiJavascript /><span>JavaScript</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiC /><span>C</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiGo /><span>Go</span></motion.div>
        </div>
      </motion.div>

      {/* Frontend */}
      <motion.div className="skills-category" variants={container} initial="hidden" whileInView="visible">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <motion.div variants={item} className="skill-card"><FaHtml5 /><span>HTML5</span></motion.div>
          <motion.div variants={item} className="skill-card"><FaCss3Alt /><span>CSS3</span></motion.div>
          <motion.div variants={item} className="skill-card"><FaReact /><span>React</span></motion.div>
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div className="skills-category" variants={container} initial="hidden" whileInView="visible">
        <h3>Backend</h3>
        <div className="skills-grid">
          <motion.div variants={item} className="skill-card"><FaNodeJs /><span>Node.js</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiExpress /><span>Express</span></motion.div>
        </div>
      </motion.div>

      {/* Databases */}
      <motion.div className="skills-category" variants={container} initial="hidden" whileInView="visible">
        <h3>Databases</h3>
        <div className="skills-grid">
          <motion.div variants={item} className="skill-card"><SiMongodb /><span>MongoDB</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiMysql /><span>SQL</span></motion.div>
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div className="skills-category" variants={container} initial="hidden" whileInView="visible">
        <h3>Tools & Technologies</h3>
        <div className="skills-grid">
          <motion.div variants={item} className="skill-card"><FaGitAlt /><span>Git</span></motion.div>
          <motion.div variants={item} className="skill-card"><FaGithub /><span>GitHub</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiFigma /><span>Figma</span></motion.div>
          <motion.div variants={item} className="skill-card"><SiVite /><span>Vite</span></motion.div>
        </div>
      </motion.div>

      {/* CS Fundamentals */}
      <motion.div className="skills-category" variants={container} initial="hidden" whileInView="visible">
        <h3>CS Fundamentals</h3>
        <div className="skills-grid">
          <motion.div variants={item} className="skill-card">
            <MdOutlineDataArray />
            <span>DSA & Problem Solving</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
