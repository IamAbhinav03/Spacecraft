import { useState } from "react";
import "./Events.css";

interface Event {
  id: number;
  name: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  prizePool: string;
  description: string;
  registrationLink: string;
}

const Events = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const events: Event[] = [
    {
      id: 1,
      name: "Rocket Launch",
      image: "/assets/rocketlaunch.JPG",
      date: "09 February, 2025",
      time: "6:00 PM - 9:00 PM",
      venue: "Ashoka Unniversity",
      prizePool: "₹40,000",
      description:
        "Assemble your team of 2-4 and test yoru engineering skills! IN just 2 hours(11:00 AM - 01:00 PM, desing and build a water-pressurized bottle rocket using basic materails and a mock budget. STratergize the perfect water level, air pressure, and launch angle for optimal performance. Then, launch your creation from out cutom-build pad (3:00 PM - 6:00 PM).",
      registrationLink: "https://forms.gle/QT3f3RbbQavc8V6a9",
    },

    {
      id: 2,
      name: "Ideathon",
      image: "/assets/ideathon.jpeg",
      date: "08 February, 2025",
      time: "11:00 AM - 01:00 PM",
      venue: "Ashoka University",
      prizePool: "₹10,000",
      description:
        "Apply your engineering and problem-solving skills to address innovative challenges in aerospace technology or experimental astrophysics. Teams of 1-4 will receive prompts 10 days in advance to develop solutions and prepare presentations for a panel of judges. Designed for a general audience, this event emphasizes creativity, logic, and technical clarity. Compete for recogintion and prized while showcasing your ingenuity. The ideathon is open to a maximum of 10 teams. So register early to secure your spot.",
      registrationLink: "https://forms.gle/wtfeXh8YwXgspM167",
    },
    {
      id: 3,
      name: "Quiz",
      image: "/assets/quiz.jpeg",
      date: "08 February, 2025",
      time: "11:00 AM - 01:00 PM",
      venue: "Ashoka University",
      prizePool: "₹5,000",
      description:
        "GEt ready to test your konwledge in a thrilling quiz spanning 8 dynamic categories, including Pop Culture, Guess the Astronomer, Image Challenges, Observatories, Astronomy FActs, and more! From startgazers to seasoned astrophiles, there's something for everyone in the interstellar journey. HOw well do you know the universe",
      registrationLink: "https://forms.gle/MJe8TDPbzFvkawuV9",
    },
    {
      id: 4,
      name: "Talk by Prof. K P Singh",
      image: "src/assets/talk.png",
      date: "08 February, 2025",
      time: "02:00 PM - 03:00 PM",
      venue: "Ashoka University",
      prizePool: "₹0",
      description: "TBA",
      registrationLink: "https://forms.gle/NCqvv9tKT7UdvuuGA",
    },
    {
      id: 5,
      name: "Sunspots Workshop",
      image: "/assets/sunspot.jpeg",
      date: "08 February, 2025",
      time: "03:00 PM - 05:00 PM",
      venue: "Ashoka University",
      prizePool: "₹0",
      description:
        "Join us for an immersive journey into solar science! Using the state-of-the-art Celestrong NexStar 8SE telescope with a solar filter and Nikon D5600 DSLR, you'll observer sunspots on the Sun's surface in stunning detail. The workshop will dive into:\n Techniques for enhancing sunspot images and correcting for instrumental errors.\nCalculating sunspot positions and uncovering solar dynamics.\nComapring real-time observations with a unique dataset captures by our students over the summer.\nWhether you're a seasoned enthusiast or new to solar astronomy, this hands-on session promises to illuminate the wonders of our start. Don't miss this chance to witness and analyze the dynamic nature of the Sun!",
      registrationLink: "https://forms.gle/7LRi2nJLG5r8fFMg9",
    },
    {
      id: 6,
      name: "Spectroscopy Workshop",
      image: "/assets/spectroscopy.jpeg",
      date: "09 February, 2025",
      time: "03:00 PM - 05:00 PM",
      venue: "Ashoka University",
      prizePool: "₹0",
      description:
        "Mark your calendars for Sunday, 9th February 2025, and join us for a beginner-friendly spectroscopy workshop! Using a DIY spectroscope, you'll observe the emission spectra of elements such as mercury, hydrogen, and sodium. Discover how to identify emission lines, interpret spectral patterns, and analyze spectra to determine the wavelengths of these lines. This hands-on workshop offers valuable insights into the applications of spectroscopy in astronomy, chemistry, and physics, enabling us to study the composition of matter from atomic scales to cosmic distances.",
      registrationLink: "https://forms.gle/XL6kA8CS5QyX8pzL7",
    },
    {
      id: 7,
      name: "Astrophotography Exhibition",
      image: "/assets/exhibition.jpg",
      date: "8-9th February, 2025",
      time: "01:00 PM - 07:00 PM",
      venue: "Ashoka University",
      prizePool: "₹0",
      description:
        "Explore the universe through two captivating component. Astrophotography Exhibition: In collaboration with Caperture, Ashoka University's Photography Society, this exhibition will showcase stunning astrophotography and night-sky images from talented participants. From scientific images captured with telescopes to breathtaking amateur photos snapped with phone cameras, witness the beauty of the cosmos, printed and displayed for public viewing. Astronomy Model Demonstrations: Get hands-on with interactive astronomy models created by participants! Explore the wonders of the universe through creative and educational demonstrations, designed to bring complex concepts to life. Join us for an unforgettable experience of art, science, and discovery under the stars! 🌠",
      registrationLink: "https://forms.gle/4ZXau4HcPwqQq7m17",
    },
  ];

  const toggleCard = (id: number | null) => {
    setExpandedId(id);
  };

  const truncateDescription = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="events-section" id="events">
      <h2 className="events-title">Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card"
            onClick={() => toggleCard(event.id)}
          >
            <div className="event-image">
              <img src={event.image} alt={event.name} />
            </div>
            <div className="event-content">
              <h3 className="event-name">{event.name}</h3>
              <div className="event-details">
                <p className="event-datetime">
                  📅 {event.date} | ⏰ {event.time} | 📍 {event.venue}
                </p>
                <p className="event-prize">🏆 Prize Pool: {event.prizePool}</p>
              </div>
              <p className="event-description">
                {truncateDescription(event.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="register-now-section">
        <h2>Why wait?</h2>
        <p className="register-message">
          <a href="#">
            <strong style={{ color: "#ffb40a" }}>Register now</strong>
          </a>{" "}
          and be part of something extraordinary!
        </p>
      </div>

      {/* Modal for Expanded Card */}
      {expandedId && (
        <div
          className="event-modal"
          onClick={() => toggleCard(null)} // Close when clicking outside
        >
          <div
            className="event-modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent close on content click
          >
            <button
              className="modal-back-button"
              onClick={() => toggleCard(null)}
            >
              ← Back
            </button>
            {events
              .filter((event) => event.id === expandedId)
              .map((event) => (
                <div key={event.id}>
                  <div className="event-image">
                    <img src={event.image} alt={event.name} />
                  </div>
                  <div className="event-content">
                    <h3 className="event-name">{event.name}</h3>
                    <div className="event-details">
                      <p className="event-datetime">
                        📅 {event.date} | ⏰ {event.time} | 📍 {event.venue}
                      </p>
                      <p className="event-prize">
                        🏆 Prize Pool: {event.prizePool}
                      </p>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <a
                      href={event.registrationLink}
                      className="register-button"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
