import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { TechStackList } from "./components/TechStackList";
import { WorkExpirience } from "./components/WorkExpirience";
import { ProjectList } from "./components/ProjectList";
import "animate.css";

import "./index.css";
function App() {
  return (
    <>
      <Navigation />
      <div className="container animate__animated animate__fadeIn">
        <section id="home">
          <Header />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="tech-stack">
          <TechStackList />
        </section>
        
        <section id="experience">
          <WorkExpirience />
        </section>
        
        <section id="projects">
          <ProjectList />
        </section>
      </div>
    </>
  );
}

export default App;
