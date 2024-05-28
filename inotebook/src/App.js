import Navbar from "./components/Navbar";
import About from "./components/About";
import {Home} from "./components/Home";
import NoteState from "./context/notes/NoteState";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Homer = () => (
  <div>
    <Navbar />
    <Home />
  </div>
);

const Aboutr = () => (
  <div>
    <Navbar />
    <About />
  </div>
);

function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Routes>
            <Route path="/" element={<Homer />} />
            <Route path="/About" element={<Aboutr />} />
          </Routes>
        </Router>
      </NoteState>
    </div>
  );
}

export default App;
