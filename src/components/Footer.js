import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Pandu Windito</h3>
        <p>
          Made with <span class="heart">&#10084;</span> by Pandu Windito
        </p>
        <ul className="socials">
          <li>
            <a href="https://github.com/just4fun147" target="_blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pandu_windito" target="_blank">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/panduwindito" target="_blank">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy;{" "}
          <a href="https://www.instagram.com/pandu_windito" target="_blank">
            Pandu Windito 2023
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
