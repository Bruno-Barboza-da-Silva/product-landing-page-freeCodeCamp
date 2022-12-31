import logo from "../../images/logo.svg";
import "./header.css";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header id="header">
      <div id="icon-mark">
        <img src={logo} alt="" id="header-img" />
        <p id="header-text"> Investment master</p>
      </div>
      <nav id="nav-bar">
        <ul id="ul-nav">
          <li className="nav-link">
            <Link to="/sign-up">Sign up</Link>
          </li>
          <li className="nav-link">
            <a href="#about-us">About us</a>
          </li>
          <li className="nav-link">
            <a href="#products">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
