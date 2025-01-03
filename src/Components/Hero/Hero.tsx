import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [textLoaded, setTextLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextLoaded(true), 500); // Delay for animation
  }, []);

  const handleReadMore = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRegister = () => {
    const registrationLink = "https://linktr.ee/SpaceCraft25"; // Replace with your actual link
    window.open(registrationLink, "_blank"); // Opens in a new tab/window
  };

  return (
    <div className="hero" id="home">
      <img src="/assets/spacecraft-logo.png" alt="spacecraftlogo" />
      <h1 className={`hero-title ${textLoaded ? "text-visible" : ""}`}>
        SPACECRAFT
      </h1>
      <div className="hero-buttons">
        <button onClick={handleReadMore} className="read-more-btn">
          Read More
        </button>
        <button onClick={handleRegister} className="register-btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default Hero;
