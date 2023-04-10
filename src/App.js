import "./App.css";
import Navbar from "./Components/navbar";
import HeroSection from "./Components/hero";
import AboutSection from "./Components/aboutme";
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
    </>
  );
}

export default App;
