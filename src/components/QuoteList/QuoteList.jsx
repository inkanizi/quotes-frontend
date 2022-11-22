import React from "react";
import Quote from "../Quote/Quote";

import { motion, AnimateSharedLayout } from "framer-motion";

const QuoteList = () => {
  const tabs = ["New quote", "Editor's Choice", "Most Popular"];
  const quotes = [1, 2, 3, 4, 5, 6, 7];
  const [activeIndex, setActive] = React.useState(0);

  return (
    <div className="quotelist">
      <h1>New Quotes</h1>
      <div className="quotelist-menu">
        <AnimateSharedLayout>
          {tabs.map((item, index) => (
            <MenuItem
              key={item}
              item={item}
              isSelected={activeIndex === index}
              handleClick={() => setActive(index)}
            />
          ))}
        </AnimateSharedLayout>
      </div>
      <div className="quotelist-content">
        {quotes.map((obj, i) => {
          return <Quote key={i} />;
        })}
      </div>
    </div>
  );
};

export default QuoteList;

//Тут спорно и я хз, можно ли так делать но вроде выглядит зашибись

const MenuItem = ({ item, isSelected, handleClick }) => {
  return (
    <motion.div
      onClick={handleClick}
      className="quotelist-menu-item"
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
    <motion.div className="active-item" layoutId="activeItem">

    </motion.div>
  );
};