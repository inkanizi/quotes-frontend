import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Login from "../../components/Login/Login";

import { motion, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faVk } from "@fortawesome/free-brands-svg-icons";
import Registration from "../../components/Registration/Registration";

const Auth = () => {
  const [activeIndex, setActive] = React.useState(0);
  const tabs = ["Login", "Registartion"];

  return (
    <div className="auth container">
      <Navbar />
      <div className="auth-content">
        <div className="auth-menu">
          <AnimateSharedLayout>
            {tabs.map((item, index) => (
              <MenuItem
                key={item}
                item={item}
                isSelected={activeIndex === index}
                handleClick={() => {
                  setActive(index);
                  console.log(Boolean(activeIndex));
                }}
              />
            ))}
          </AnimateSharedLayout>
        </div>

        {!Boolean(activeIndex) ? <Login /> : <Registration />}

        <div className="auth-or">
          <div className="auth-or-line"></div>
          <span>or</span>
          <div className="auth-or-line"></div>
        </div>

        <div className="auth-others">
          <FontAwesomeIcon size={"2x"} icon={faGoogle} />
          <FontAwesomeIcon size={"2x"} icon={faFacebook} />
          <FontAwesomeIcon size={"2x"} icon={faVk} />
        </div>
      </div>
    </div>
  );
};

export default Auth;

const MenuItem = ({ item, isSelected, handleClick }) => {
  return (
    <motion.div
      onClick={handleClick}
      className="auth-menu-item"
      initial={{ color: "#000" }}
      animate={{ color: isSelected ? "#fff" : "#000" }}
    >
      {isSelected && <ActiveItem />}
      <span>{item}</span>
    </motion.div>
  );
};

const ActiveItem = () => {
  return (
    <motion.div className="active-item" layoutId="activeItem"></motion.div>
  );
};
