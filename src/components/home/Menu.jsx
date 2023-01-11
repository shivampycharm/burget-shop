import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  // const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          delay={0.2}
          title="Cheese-Burger"
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={300}
          delay={0.5}
          title="Veg Cheese-Burger"
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={500}
          delay={0.8}
          title="Cheese-Burger with French Fries"
        />
      </div>
    </section>
  );
};

export default Menu;
