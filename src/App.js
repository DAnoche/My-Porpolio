import "./App.css";
import Navbar from "./Components/navbar";
import HeroSection from "./Components/hero";
import AboutSection from "./Components/aboutme";
import ProjectSection from "./Components/projects";
import ContactSection from "./Components/contact";
import Footer from "./Components/footer";
import BackToTop from "./Components/backtotop";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    document.documentElement.setAttribute("data-theme", updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <HeroSection theme={theme} toggleTheme={toggleTheme} />
      <AboutSection theme={theme} toggleTheme={toggleTheme} />
      <ProjectSection theme={theme} toggleTheme={toggleTheme} />
      <ContactSection theme={theme} toggleTheme={toggleTheme} />
      <Footer theme={theme} toggleTheme={toggleTheme} />
      <BackToTop theme={theme} toggleTheme={toggleTheme} />
    </>
  );
}

export default App;
