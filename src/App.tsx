
import react from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";

import Projects from "./pages/Projects"



const App: React.FC = () => (

    <div className="relative overflow:-webkit-scrollbar:none scrollbar-hide">

      < Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </Router >
    </div >
  );

export default App;