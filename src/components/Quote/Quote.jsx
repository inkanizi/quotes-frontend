import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Quote = () => {
  return (
    <div className="quote">
      <div className="quote-content">
        <span className="quote-content__text">
          Хорошее воспитание — это умение скрывать, как много мы думаем о себе и
          как мало о других.
        </span>
        <div className="quote-content__source">
          <span>Марк Твен</span>
        </div>
        <div className="quote-content__actions">
          <div className="quote-content__actions-tags">
            <span>жизненные цитаты</span>
            <span>воспитание</span>
          </div>
          <FontAwesomeIcon
            icon={faHeart}
            size={"2x"}
            color={"#2f3bdf"}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};

export default Quote;
