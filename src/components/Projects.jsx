import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  {
    title: "Personal Portfolio Website",
    status: "In Progress",
    description:
      "A modern, responsive personal portfolio built using React to showcase my skills, experience, and projects with smooth animations and clean UI.",
    tech: ["React", "CSS", "Framer Motion", "GitHub"],
  },
  
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <span className={`status ${project.status.toLowerCase().replace(" ", "-")}`}>
              {project.status}
            </span>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
