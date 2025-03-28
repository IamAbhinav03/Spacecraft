import "./Highlights.css";

const Highlights = () => {
  const events = [
    {
      year: "2024",
      title: "SpaceCraft 2.0",
      date: "30th March - 6th April",
      description:
        "An eight-day extravaganza promoting Astronomy through diverse applications, featuring international collaborations, workshops, and engaging activities.",
      highlights: [
        {
          title: "LIGO India Collaboration",
          date: "3rd April",
          description:
            "Hosted Dr. Debarati Chaterjee from IUCAA for an engaging seminar on LIGO developments and opportunities.",
        },
        {
          title: "ARIES Collaboration",
          date: "5th April",
          description:
            "Dr. Dipankar Banerjee delivered a compelling seminar on solar physics and India's solar missions.",
        },
        {
          title: "Rocket Launch Competition",
          date: "30th March",
          description:
            "Over 70 students participated in designing and launching model rockets, with a total prize pool of Rs 45k.",
        },
        {
          title: "MUN Club Collaboration",
          date: "5th April",
          description:
            "Organized a mock UNOOSA to discuss environmental sustainability in space exploration.",
        },
        {
          title: "AstroMela",
          date: "6th April",
          description:
            "Space-themed games and activities in collaboration with Banjaara, featuring our merchandise collection.",
        },
      ],
    },
    {
      year: "2023",
      title: "SpaceCraft 1.0",
      date: "First Edition",
      description:
        "A three-day event promoting astronomy as an interdisciplinary field.",
      highlights: [
        {
          title: "DIY Workshops",
          date: "",
          description:
            "Spectrometer and Astrolabe construction workshops with hands-on learning.",
        },
        {
          title: "Rocket Launch Competition",
          date: "",
          description:
            "Successful student-made rockets covering the entire sunken frisbee field.",
        },
        {
          title: "Faculty Lectures",
          date: "",
          description:
            "Talks by Prof. Somak Raychaudhury on Gravitational Wave Astronomy and Prof. Dipankar Bhattacharya on iconic astronomical images.",
        },
      ],
    },
  ];

  return (
    <div className="highlights-section">
      <h2 className="section-title">Past Highlights</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-year">{event.year}</div>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
              <div className="event-highlights">
                {event.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="highlight-card">
                    <h4>{highlight.title}</h4>
                    {highlight.date && (
                      <p className="highlight-date">{highlight.date}</p>
                    )}
                    <p>{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
