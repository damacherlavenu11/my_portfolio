import React, { useState, useMemo } from "react";

function Projects({ projects, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Featured Projects</h2>
        <div
          className="filter-row"
          role="tablist"
          aria-label="Project categories"
        >
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={selectedCategory === category}
              className={`filter-btn ${
                selectedCategory === category ? "active" : ""
              }`}
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
  );
}

export default Projects;
