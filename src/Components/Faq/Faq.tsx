import "./Faq.css";

function FAQ() {
  return (
    <div className="faq-section" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        <div className="faq-item">
          <h3 className="faq-question">How do I reach the venue?</h3>
          <p className="faq-answer">
            Reach Jahangirpuri Metro Station, and Ashoka shuttles will be
            provided to take you to the venue.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">What is the nearest metro station?</h3>
          <p className="faq-answer">
            The nearest metro station is Jahangirpuri Metro Station on the
            Yellow Line.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">
            Is the event registration fee refundable?
          </h3>
          <p className="faq-answer">
            No refunds will be provided in case you miss the event.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
