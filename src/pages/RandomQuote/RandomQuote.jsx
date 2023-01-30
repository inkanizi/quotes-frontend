import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const RandomQuote = () => {
  return (
    <div className="random_quote container">
      <Navbar />
      <div className="random_quote__content">
        <FontAwesomeIcon
          className="random_quote__content__btn"
          icon={faArrowsRotate}
          size="6x"
          color="#0010ED"
        />
        <Quote />
      </div>
    </div>
  );
};

export default RandomQuote;
