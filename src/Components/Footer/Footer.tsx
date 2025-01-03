// Components/Footer/Footer.tsx
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" id="footer">
      <div className="footer-content">
        <div className="footer-details">
          <div className="contact-details">
            <h3>Contact Us</h3>
            <p>Email: astronomysociety@ashoka.edu.in</p>
            <p>Phone: +91 870775 5044, +91 960657 3151</p>
          </div>
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">
                <img src="src/assets/icons/linkedin.svg" alt="LinkedIn" />
              </a>
              <a
                href="https://www.instagram.com/astronomy_ashoka/"
                aria-label="Instagram"
              >
                <img src="/src/assets/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="src/assets/icons/twitter(1).png" alt="Twitter" />
              </a>
            </div>
            <p>Icons by Icon8</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Astronomy Club. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
