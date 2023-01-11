import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/me.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>Burger-Shop</h4>
          <p>
            This is your Burger-Shop. The place for most tasty burgers on the
            enitre earth.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Shivam Dubey</h3>
            </div>

            <p>
              I am Shivam Dubey, the founder of Burger-Shop. Affiliated to Good
              Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
