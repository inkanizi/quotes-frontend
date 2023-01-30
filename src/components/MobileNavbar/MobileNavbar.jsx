import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const MobileNavbar = () => {
  const [active, setActive] = React.useState(false);

  const clickHandler = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <div className="mobile-navbar">
      <h1>Logo</h1>
      <FontAwesomeIcon
        icon={faBars}
        size={"2x"}
        onClick={clickHandler}
        color="#000"
      />
      {active ? <Menu /> : <></>}
    </div>
  );
};

export default MobileNavbar;

const Menu = () => {
  return <div className="menu"></div>;
};
