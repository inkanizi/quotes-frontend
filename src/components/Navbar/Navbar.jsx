import "../../styles.scss";
import React from "react";
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

  const [isHover, toggleHover] = React.useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img src={navbarlogo} alt="logo" width={60}/>
        </Link>
        <div className="navbar-links">
          <Link to="/category">
            <motion.div 
              className="navbar-menu-item"
              onHoverStart={toggleHoverMenu}
              onHoverEnd={toggleHoverMenu}
            >
              <span>Category</span>
              <motion.div
                className="navbar-sub-menu"
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
                <div className="navbar-sub-menu-container">
                  <div className="navbar-sub-menu-item">Submenu Item 1</div>
                  <div className="navbar-sub-menu-item">Submenu Item 2</div>
                  <div className="navbar-sub-menu-item">Submenu Item 3</div>
                  <div className="navbar-sub-menu-item">Submenu Item 4</div>
                  <div className="navbar-sub-menu-item">Submenu Item 5</div>
                </div>
              </motion.div>
            </motion.div>

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
