import "./App.css";
import peach from "./Neon-Peach-sq.png";
import Projects from "./Projects";
import Bio from "./Bio";

import Contact from "./Contact";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img src={peach} alt="" id="backgroundImg" />
      <h1>Georgia Burnside</h1>
      <Nav />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<Bio />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
