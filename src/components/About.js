import React from "react";

function About({ skills }) {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p className="section-lead">
        I am a Full Stack Developer with 8 years of IT experience, specializing
        in interactive, high-performance web applications. I have hands-on
        experience modernizing legacy systems, building microfrontend
        architectures, deploying to Netlify, and implementing CI/CD with strong
        quality and observability practices.
      </p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default About;
