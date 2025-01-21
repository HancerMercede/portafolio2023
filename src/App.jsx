import { About } from "./components/About";
import { Header } from "./components/Header";
import { TechStackList } from "./components/TechStackList";
import { WorkExpirience } from "./components/WorkExpirience";
import "animate.css";

import "./index.css";
function App() {
  return (
    <div className="container  animate__animated animate__fadeIn">
      <Header />
      <About />
      <TechStackList />
      <WorkExpirience />
    </div>
  );
}

export default App;
