// Components/Navbar/Navbar.tsx
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src="./assets/logo.png" alt="Logo" className="nav-logo" />
      <div className="nav-title">
        <a
          href="https://astrosoc.netlify.app"
          target="_blank"
          style={{ color: "inherit" }}
        >
          Ashoka Astronomy Society
        </a>
      </div>

      {isMobile && (
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${isOpen ? "open" : ""}`}></span>
        </button>
      )}

      <ul
        className={`nav-items ${isOpen ? "open" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
        {/* <a href="#spacecraft">Spacecraft</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#shop">Shop</a> 
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
