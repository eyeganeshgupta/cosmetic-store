import React from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import HeroImg from "../../assets/hero.png";
import "./hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  const transitionObj = { duration: 3, type: "spring" };

  return (
    <div className="hero-container">
      {/* Left Side */}
      <div className="hero-sides">
        <span className="text1">Skin Protection Cream</span>
        <div className="text2">
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>

      {/* Middle Side */}
      <div className="hero-wrapper">
        {/* Blue Circle */}
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transitionObj}
          className="blue-circle"
        ></motion.div>

        {/* Hero Image */}
        <motion.img
          transition={transitionObj}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt="hero-img"
        />

        {/* Card Container */}
        <motion.div
          transition={transitionObj}
          initial={{ right: "4%" }}
          whileInView={{ right: "2%" }}
          className="cart-container"
        >
          <RiShoppingBagFill />
          <div className="sign-up">
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className="hero-sides right-side">
        <div className="traffic">
          <span>1.2m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className="customers">
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
