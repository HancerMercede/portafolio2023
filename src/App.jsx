import { About } from "./components/About";
import { Header } from "./components/Header";
import { TechStackList } from "./components/TechStackList";
import { WorkExpirience } from "./components/WorkExpirience";
import { ProjectList } from "./components/ProjectList";
import "animate.css";

import "./index.css";
function App() {
  return (
    <div className="container  animate__animated animate__fadeIn">
      <Header />
      <About />
      <TechStackList />
      <WorkExpirience />
      <ProjectList />
    </div>
  );
}

export default App;
