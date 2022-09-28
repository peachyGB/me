import "./App.css";
import peach from "./Neon-Peach-sq.png";
import Projects from "./Projects";
import Bio from "./Bio";
import Skills from "./Skills";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <img src={peach} alt="" id="backgroundImg" />
      <h1>Georgia Burnside</h1>
      <p id="peachy">// Peachy</p>
      <Projects />
      <Bio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
