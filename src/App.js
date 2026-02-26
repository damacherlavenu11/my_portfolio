import React, { useEffect } from "react";
import "./App.css";

// shared data
import { profile, skills, expertise, projects, categories } from "./data";

// components
import Header from "./components/Header";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const logVisit = async () => {
      const namespace = "venu-portfolio";
      const hostKey =
        window.location.hostname.replace(/[^a-zA-Z0-9-_]/g, "-") || "local";
      const pathKey =
        window.location.pathname.replace(/[^a-zA-Z0-9-_]/g, "-") || "home";
      const key = `${hostKey}${pathKey}`;

      try {
        await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
      } catch (error) {
        // ignore network failures
      }
    };

    logVisit();
  }, []);

  return (
    <div className="App">
      <Header profile={profile} />
      <main>
        <About skills={skills} />
        <Expertise expertise={expertise} />
        <Projects projects={projects} categories={categories} />
        <Contact profile={profile} />
      </main>
    </div>
  );
}

export default App;
