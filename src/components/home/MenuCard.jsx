import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>₹{price}</h5>

        <p>{title}</p>

        <Link to="/Cart">
          <button>Buy Now</button>
        </Link>
      </main>
    </motion.div>
  );
};

export default MenuCard;
