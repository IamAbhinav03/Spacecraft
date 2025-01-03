import "./About.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <p>
          🌌 Welcome to <span className="highlight">Spacecraft 3.0</span> –
          Ashoka University's annual astronomy festival! This year, we’re
          hosting an inter-university edition where stargazers, space
          enthusiasts, and curious minds come together to celebrate the wonders
          of the cosmos.
        </p>
        <p>
          Dive into a universe of opportunities to learn, explore, and connect
          through:
        </p>
        <ul>
          <li>✨ Hands-on workshops, including stellar photometry</li>
          <li>📸 Captivating astrophotography exhibitions</li>
          <li>🚀 Thrilling competitions like the Rocket Launch</li>
        </ul>
        <p>
          Organized by the{" "}
          <span className="highlight">Ashoka Astronomy Society</span>,
          Spacecraft is more than just an event—it’s a community. Our
          student-led group welcomes dreamers from all disciplines, fostering a
          passion for the stars through stargazing nights, workshops, and
          inspiring guest lectures.
        </p>
        <p>
          💫 Don’t miss out! For a{" "}
          <span className="highlight">one-time registration fee of ₹100</span>,
          you gain access to all talks, events, and workshops. Let’s make this
          an unforgettable journey through the cosmos!
        </p>
      </div>
    </div>
  );
}

export default About;
