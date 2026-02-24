import './App.css';
import { useEffect, useMemo, useState } from 'react';

const profile = {
  name: 'Venu Damacherla',
  title: 'Full-Stack Developer',
  tagline:
    'Full Stack Developer with 8 years of experience building interactive, scalable, and high-performance web applications.',
  location: 'Texas, USA',
  email: 'damacherlavenu1996@gmail.com',
  mobile: '+1 940-343-1263',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
};

const skills = [
  'HTML',
  'JavaScript',
  'React',
  'TypeScript',
  'Angular',
  'RESTful APIs',
  'Jquery',
  'Node.js',
  'CSS',
  'Microfrontends (MFE)',
  'Legacy Modernization',
  'CI/CD Pipelines',
  'SonarCloud',
  'Sentry',
  'SendGrid',
  'Performance Optimization',
  'Error Tracking & Logging',
  'System Design',
  'Git/GitHub',
];

const projects = [
  {
    id: 1,
    title: 'Enterprise Microfrontend Platform',
    category: 'Full Stack',
    summary:
      'Led MFE architecture to split a monolith into independently deployable modules, improving release speed and team autonomy.',
    stack: ['React', 'TypeScript', 'MFE', 'CI/CD'],
    demo: '#',
    code: '#',
  },
  {
    id: 2,
    title: 'Legacy App Modernization',
    category: 'Frontend',
    summary:
      'Modernized legacy front-end modules using React and TypeScript while preserving critical business workflows.',
    stack: ['React', 'TypeScript', 'JavaScript', 'CSS'],
    demo: '#',
    code: '#',
  },
  {
    id: 3,
    title: 'Release & Quality Automation',
    category: 'Full Stack',
    summary:
      'Implemented CI/CD pipelines, code quality gates in SonarCloud, and observability with Sentry for reliable production deployments.',
    stack: ['CI/CD', 'SonarCloud', 'Sentry', 'Netlify'],
    demo: '#',
    code: '#',
  },
  {
    id: 4,
    title: 'Communication Workflow Integration',
    category: 'Full Stack',
    summary:
      'Built and integrated SendGrid email templates for transactional and notification workflows across applications.',
    stack: ['SendGrid', 'React', 'APIs'],
    demo: '#',
    code: '#',
  },
];

const categories = ['All', 'Frontend',  'Full Stack'];

const expertise = [
  {
    key: 'engineering',
    title: 'Interactive Front-End Engineering',
    detail:
      'Builds rich, responsive user interfaces with React, TypeScript, JavaScript, and CSS, focused on accessibility and smooth interaction patterns.',
  },
  {
    key: 'architecture',
    title: 'Scalable Architecture',
    detail:
      'Designs scalable systems and microfrontend architectures that support parallel team development and faster feature delivery.',
  },
  {
    key: 'reliability',
    title: 'Delivery & Reliability',
    detail:
      'Implements CI/CD pipelines, production monitoring with Sentry, and code quality controls via SonarCloud for stable releases.',
  },
  {
    key: 'workflows',
    title: 'Productivity Workflows',
    detail:
      'Integrates communication workflows such as SendGrid email templates and improves performance across legacy and modern systems.',
  },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCopied, setShowCopied] = useState(false);
  const [showMobileCopied, setShowMobileCopied] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState(expertise[0]);
  const phoneHref = `tel:${profile.mobile.replace(/[^\d+]/g, '')}`;

  useEffect(() => {
    const logVisit = async () => {
      const namespace = 'venu-portfolio';
      const hostKey = window.location.hostname.replace(/[^a-zA-Z0-9-_]/g, '-') || 'local';
      const pathKey = window.location.pathname.replace(/[^a-zA-Z0-9-_]/g, '-') || 'home';
      const key = `${hostKey}${pathKey}`;

      try {
        await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
      } catch (error) {
      }
    };

    logVisit();
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 1800);
    } catch (error) {
      setShowCopied(false);
    }
  };

  const handleCopyMobile = async () => {
    try {
      await navigator.clipboard.writeText(profile.mobile);
      setShowMobileCopied(true);
      setTimeout(() => setShowMobileCopied(false), 1800);
    } catch (error) {
      setShowMobileCopied(false);
    }
  };

  return (
    <div className="App">
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
            {/* <a className="btn ghost" href="#contact">
              Contact Me
            </a> */}
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p className="section-lead">
            I am a Full Stack Developer with 8 years of IT experience, specializing in interactive,
            high-performance web applications. I have hands-on experience modernizing legacy systems,
            building microfrontend architectures, deploying to Netlify, and implementing CI/CD with
            strong quality and observability practices.
          </p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="expertise" className="section">
          <h2>Core Expertise</h2>
          <p className="section-lead">Click each area to explore where I deliver the most impact.</p>
          <div className="expertise-layout">
            <div className="expertise-list" role="tablist" aria-label="Core expertise">
              {expertise.map((item) => (
                <button
                  key={item.key}
                  role="tab"
                  aria-selected={selectedExpertise.key === item.key}
                  className={`expertise-btn ${selectedExpertise.key === item.key ? 'active' : ''}`}
                  onClick={() => setSelectedExpertise(item)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <article className="expertise-detail">
              <h3>{selectedExpertise.title}</h3>
              <p>{selectedExpertise.detail}</p>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <div className="filter-row" role="tablist" aria-label="Project categories">
              {categories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="stack-row">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Information</h2>
          <p className="section-lead">
            Click any item below to reach me directly. This section includes my personal and social
            profiles.
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <p className="contact-label">Name</p>
              <p className="contact-value">{profile.name}</p>
            </div>

            <div className="contact-item">
              <p className="contact-label">Location</p>
              <p className="contact-value">{profile.location}</p>
            </div>

            <div className="contact-item">
              <p className="contact-label">Email</p>
              <a className="contact-value contact-link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button className="btn ghost contact-copy" onClick={handleCopyEmail}>
                {showCopied ? 'Email Copied!' : 'Copy Email'}
              </button>
            </div>

            <div className="contact-item">
              <p className="contact-label">Phone</p>
              <a className="contact-value contact-link" href={phoneHref}>
                {profile.mobile}
              </a>
              <button className="btn ghost contact-copy" onClick={handleCopyMobile}>
                {showMobileCopied ? 'Phone Copied!' : 'Copy Phone'}
              </button>
            </div>

            <div className="contact-item">
              <p className="contact-label">GitHub</p>
              <a className="contact-value contact-link" href={profile.github} target="_blank" rel="noreferrer">
                {profile.github}
              </a>
            </div>

            <div className="contact-item">
              <p className="contact-label">LinkedIn</p>
              <a
                className="contact-value contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                {profile.linkedin}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
