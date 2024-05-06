import "./App.css";
import { Header } from "./components/Header";
import { ToolKitList } from "./components/ToolKitList";
import { AboutMe } from "./components/AboutMe";
import { ProjectList } from "./components/ProjectList";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header name="Hancer Mercedes" />
        <AboutMe />
        <ToolKitList />
        <ProjectList />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
