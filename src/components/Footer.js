import "./Footer.css";
import { FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
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
            <a href="#">
              <FaGoogle size={30} color="#DB4437" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={30} color="#C13584" />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={30} color="#0077B5" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#">Pandu Windito</a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
