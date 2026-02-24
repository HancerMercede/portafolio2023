import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { About } from "./components/About";
import { Header } from "./components/Header";
import { TechStackList } from "./components/TechStackList";
import { WorkExpirience } from "./components/WorkExpirience";
import { ProjectList } from "./components/ProjectList";
import { BlogList } from "./components/BlogList";
import { BlogPost } from "./components/BlogPost";
import { Contact } from "./components/Contact";
import "animate.css";

import "./index.css";
function App() {
  return (
    <>
      <Navigation />
      <div className="container animate__animated animate__fadeIn">
        <Routes>
          <Route path="/" element={
            <>
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

              <section id="blog">
                <BlogList />
              </section>

              <section id="contact">
                <Contact />
              </section>
            </>
          } />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
