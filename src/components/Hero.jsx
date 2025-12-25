import heroImg from "../assets/sajal.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "../styles/hero.css";


const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="headingandparatext">
          <h2>Hi, It's me</h2><h1 className="heading"> Sajal Gupta </h1>
          <h3>And I'm a <span className="heading">Software Developer</span></h3><br></br>
          <p>Developer focused on Java, algorithms, and web technologies, creating solutions that combine performance and precision.</p>
        
         <span className="profiles">
          <a href="https://github.com/Sajalgt" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sajal-gupta31" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/sajal.gta" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span >
        <span className="button">
          <button className="cv">Download CV</button>
        </span>
        </div>
        <div className="myimage">
          <img src={heroImg} alt="Sajal Gupta"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero