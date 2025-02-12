import "../components/Footer.css";
import logo from "../assets/HomeEdWhite.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import tiktok from "../assets/tiktok.png";

function Footer() {
  return (
    <div className="footer-cont">
      <div className="footer-logo">
        <img src={logo} alt="Home Ed Logo" />
        <p>Home Edventurers &copy; 2025</p>
      </div>

      <div className="footer-links">
        <a className="nav-a" href="/">
          Home
        </a>
        <a className="nav-a" href="/About">
          About Me
        </a>
        <a className="nav-a" href="/Shop">
          Shop
        </a>
        <a className="nav-a" href="/Chat">
          Chat
        </a>
      </div>

      <div className="footer-social">
        <div>
          <a
            className="social-links"
            href="https://www.instagram.com/homeedventurers/"
          >
            <img src={instagram} alt="Instagram Logo" />
            <p>Instagram</p>
          </a>
        </div>
        <div>
          <a
            className="social-links"
            href="https://www.facebook.com/groups/homeedventurerscommunity?locale=en_GB"
          >
            <img src={facebook} alt="Facebook Logo" />
            <p>Facebook</p>
          </a>
        </div>
        <div>
          <a
            className="social-links"
            href="https://www.tiktok.com/@homeedventurers"
          >
            <img src={tiktok} alt="Tiktok Logo" />
            <p>Tiktok</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
