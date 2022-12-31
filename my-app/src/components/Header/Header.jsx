import logo from "../../images/logo.svg";
import "./header.css";

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
            <a href="#sign-up">Sign up</a>{" "}
          </li>
          <li className="nav-link">
            <a href="#about-us">About us</a>
          </li>
          <li className="nav-link">
            <a href="#dot3">Products</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
