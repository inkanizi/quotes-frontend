import "../../styles.scss";
import navbarlogo from "../../img/icons/nav-logo.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {motion} from "framer-motion"

export const Navbar = () => {
  const [focus, setFocus] = useState(false)

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
          <motion.div
           className="navbar-search"
           initial={{ width: "200px" }}
           transition={{ease: "easeOut", duration: .5}}
           animate={{ width: focus ? "500px" : "200px" }}
           >
            <i>
              <FontAwesomeIcon icon={faSearch} />
            </i>
            <input type="text" onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}/>
          </motion.div>
          <motion.div 
          className="navbar-btn"
          initial={{ display: "flex"}}
          transition={{ease: "easeIn", duration: .1}}
          animate={{ display: focus ? "none" : "flex"}}
          >
            <Link to="/registration">
              <Button text="Sign Up" />
            </Link>
            <Link to="/login">
              <Button text="Sign In" />
            </Link>
          </motion.div>
        </div>
        <ThemeToggler />
      </div>
    </div>
  );
};
