import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/About" element={<About/>} /> 
          <Route path="/Contact" element={<Contact/>} /> 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
