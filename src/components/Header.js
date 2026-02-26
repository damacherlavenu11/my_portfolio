import React from "react";

function Header({ profile }) {
  return (
    <header className="hero" id="home">
      <nav className="top-nav">
        <a href="#home" className="brand">
          {profile.name}
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero-content">
        <p className="eyebrow">{profile.location}</p>
        <h1>{profile.title}</h1>
        <p className="tagline">{profile.tagline}</p>
        <div className="stats-row">
          <div className="stat-card">
            <p>Experience</p>
            <h3>8+ Years</h3>
          </div>
          <div className="stat-card">
            <p>Focus</p>
            <h3>Scalable Web Apps</h3>
          </div>
          <div className="stat-card">
            <p>Specialty</p>
            <h3>React + TypeScript</h3>
          </div>
        </div>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
