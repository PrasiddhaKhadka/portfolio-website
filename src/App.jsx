import earth from "./assets/images/earth.svg";
import bg from "./assets/images/bg.svg"; // import your background
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import { useRef } from "react";


function App() {
  
  const aboutRef = useRef(null);
  
  return (
    <div >
      <Hero aboutRef={aboutRef} />
      <div>
        <About aboutRef={aboutRef}/>
      </div>
      <Experience />

    </div>
  );
}

export default App;
