import React, { useState, useEffect } from 'react';
import Navbar from "../Components/navbar/Navbar";
import Footer from "../Components/footer/Footer";
import MyProfile from "../Components/myprofile/MyProfile";
import Projects from "../Components/projects/Projects";
import ContactMe from "../Components/contactMe/ContactMe";

function Homepage() {
  
  const [themeChange, setThemeChange] = useState(false);
  const [Theme, setTheme] = useState("dark");

  const nightLightMode = () => {
    setThemeChange(true);

    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");

    if (Theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    if (Theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
    
    moon?.classList.toggle("block");
    sun?.classList.toggle("none");
  };

  useEffect(() => {
    setThemeChange(false);
    setTheme(localStorage.getItem("theme") || "dark"); 
    if (Theme === "light") {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    if (Theme === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [Theme, themeChange]);

  return (
    <div>
      <Navbar
        nightLightMode={nightLightMode}
        Theme={Theme}
      />
      <MyProfile />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Homepage;
