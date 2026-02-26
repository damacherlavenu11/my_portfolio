import React, { useState } from "react";

function Expertise({ expertise }) {
  const [selectedExpertise, setSelectedExpertise] = useState(expertise[0]);

  return (
    <section id="expertise" className="section">
      <h2>Core Expertise</h2>
      <p className="section-lead">
        Click each area to explore where I deliver the most impact.
      </p>
      <div className="expertise-layout">
        <div
          className="expertise-list"
          role="tablist"
          aria-label="Core expertise"
        >
          {expertise.map((item) => (
            <button
              key={item.key}
              role="tab"
              aria-selected={selectedExpertise.key === item.key}
              className={`expertise-btn ${
                selectedExpertise.key === item.key ? "active" : ""
              }`}
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
  );
}

export default Expertise;
