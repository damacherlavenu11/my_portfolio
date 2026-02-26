// shared data used by multiple components

export const profile = {
  name: "Venu Damacherla",
  title: "Full-Stack Developer",
  tagline:
    "Full Stack Developer with 8 years of experience building interactive, scalable, and high-performance web applications.",
  location: "Texas, USA",
  email: "damacherlavenu1996@gmail.com",
  mobile: "+1 940-487-7388",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
};

export const skills = [
  "HTML",
  "JavaScript",
  "React",
  "TypeScript",
  "Angular",
  "RESTful APIs",
  "Jquery",
  "Node.js",
  "CSS",
  "Microfrontends (MFE)",
  "Legacy Modernization",
  "CI/CD Pipelines",
  "SonarCloud",
  "Sentry",
  "SendGrid",
  "Performance Optimization",
  "Error Tracking & Logging",
  "System Design",
  "Git/GitHub",
];

export const projects = [
  {
    id: 1,
    title: "Enterprise Microfrontend Platform",
    category: "Full Stack",
    summary:
      "Led MFE architecture to split a monolith into independently deployable modules, improving release speed and team autonomy.",
    stack: ["React", "TypeScript", "MFE", "CI/CD"],
    demo: "#",
    code: "#",
  },
  {
    id: 2,
    title: "Legacy App Modernization",
    category: "Frontend",
    summary:
      "Modernized legacy front-end modules using React and TypeScript while preserving critical business workflows.",
    stack: ["React", "TypeScript", "JavaScript", "CSS"],
    demo: "#",
    code: "#",
  },
  {
    id: 3,
    title: "Release & Quality Automation",
    category: "Full Stack",
    summary:
      "Implemented CI/CD pipelines, code quality gates in SonarCloud, and observability with Sentry for reliable production deployments.",
    stack: ["CI/CD", "SonarCloud", "Sentry", "Netlify"],
    demo: "#",
    code: "#",
  },
  {
    id: 4,
    title: "Communication Workflow Integration",
    category: "Full Stack",
    summary:
      "Built and integrated SendGrid email templates for transactional and notification workflows across applications.",
    stack: ["SendGrid", "React", "APIs"],
    demo: "#",
    code: "#",
  },
];

export const categories = ["All", "Frontend", "Full Stack"];

export const expertise = [
  {
    key: "engineering",
    title: "Interactive Front-End Engineering",
    detail:
      "Builds rich, responsive user interfaces with React, TypeScript, JavaScript, and CSS, focused on accessibility and smooth interaction patterns.",
  },
  {
    key: "architecture",
    title: "Scalable Architecture",
    detail:
      "Designs scalable systems and microfrontend architectures that support parallel team development and faster feature delivery.",
  },
  {
    key: "reliability",
    title: "Delivery & Reliability",
    detail:
      "Implements CI/CD pipelines, production monitoring with Sentry, and code quality controls via SonarCloud for stable releases.",
  },
  {
    key: "workflows",
    title: "Productivity Workflows",
    detail:
      "Integrates communication workflows such as SendGrid email templates and improves performance across legacy and modern systems.",
  },
];
