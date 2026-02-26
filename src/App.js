import React, { useEffect } from "react";
import "./App.css";

// shared data
import { profile, skills, expertise, projects, categories } from "./data";

// GTM utility
import { logPageView } from "./utils/gtm";

// components
import Header from "./components/Header";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    logPageView("portfolio_home");
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
