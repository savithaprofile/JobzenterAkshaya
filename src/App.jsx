import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Home from "./pages/home";
import Courses from "./pages/courses";
import Services from "./pages/services";
import ReachUs from "./pages/ReachUs";
import CareerLab from "./pages/CareerLab";
import TechBlogs from "./pages/TechBlogs";

function App() {
  return (
    <Router>
  <Navbar />
  <div className="pt-[89px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reach-us" element={<ReachUs />} />
          <Route path="/career-lab" element={<CareerLab />} />
          <Route path="/tech-blogs" element={<TechBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
