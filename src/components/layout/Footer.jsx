import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Your Burger-Shop</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All rights are reserved @burger-shop</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>

        <a href="https://www.linkedin.com/in/shivam-dubey-1652511a9/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/shivampycharm">
          <AiFillGithub />
        </a>
        <a href="https://auth.geeksforgeeks.org/user/shivamdubeyagra8/practice">
          <SiGeeksforgeeks />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
