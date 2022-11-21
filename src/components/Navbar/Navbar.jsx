import "../../styles.scss";
import navbarlogo from "../../img/icons/nav-logo.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={navbarlogo} alt="logo" width={50} />
        </Link>
        <div className="navbar-links">
          <Link to="/category">
            <span>Category</span>
          </Link>
          <Link to="/random">
            <span>Random quote</span>
          </Link>
          <Link to="/popular">
            <span>Popular</span>
          </Link>
        </div>
        <div className="navbar-btn-container">
          <div className="navbar-search">
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
            <input type="text" />
          </div>
          <div className="navbar-btn">
            <Link to="/registration">
              <Button text="Sign Up" />
            </Link>
            <Link to="/login">
              <Button text="Sign In" />
            </Link>
          </div>
        </div>
        <ThemeToggler />
      </div>
    </div>
  );
};
