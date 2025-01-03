// Components/ParallaxEffect/ParallaxEffect.tsx
import { useEffect, useRef } from "react";
import "./ParallaxEffect.css";

interface ParallaxEffectProps {
  children: React.ReactNode;
}

const ParallaxEffect = ({ children }: ParallaxEffectProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const astronautRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.6}px)`;
        heroRef.current.style.opacity = `${1 - scrolled * 0.002}`;
      }

      if (starsRef.current) {
        starsRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }

      if (astronautRef.current) {
        astronautRef.current.style.transform = `
          translateY(${scrolled * 0.4}px) 
          rotate(${scrolled * 0.02}deg)
        `;
      }

      if (aboutRef.current) {
        const aboutStart = window.innerHeight;
        if (scrolled > aboutStart) {
          const opacity = (scrolled - aboutStart) * 0.002;
          aboutRef.current.style.opacity = Math.min(opacity, 1).toString();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      <div className="stars-bg" ref={starsRef}></div>
      <div className="astronaut" ref={astronautRef}></div>

      <div className="hero-section" ref={heroRef}>
        <h1>SPACECRAFT</h1>
        <button
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          Read More
        </button>
      </div>

      <div className="about-section" ref={aboutRef}>
        <div className="about-content">{children}</div>
      </div>
    </div>
  );
};

export default ParallaxEffect;
