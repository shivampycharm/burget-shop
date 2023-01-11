import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/me.jpeg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="founder">
        <motion.div {...options}>
          <img src={me} alt="Founder" height={250} width={250} />
          <h3>Shivam Dubey</h3>
          <p>
            Namaste Dosto! I am Shivam Dubey and the founder of Burger-Shop.
            <br />
            We promise that we make the Burgers that won’t break your heart.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Founder;
