import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
/* import { GoThreeBars } from "react-icons/go"; */
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = (eventObj) => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Cosmetic Store</span>
      </div>

      <div className="right">
        <div className="bars" onClick={toggleMenuHandler}>
          <FaBars />
        </div>

        <div
          className="menu-container"
          style={{ display: showMenu ? "inherit" : "none" }}
        >
          <ul className="menu-lists">
            <li className="menu">Collections</li>
            <li className="menu">Brands</li>
            <li className="menu">New</li>
            <li className="menu">Sales</li>
            <li className="menu">ENG</li>
          </ul>
        </div>
        <input
          type="text"
          name="query"
          id="query"
          className="search"
          placeholder="Search"
        />
        <CgShoppingBag className="cart-icon" />
      </div>
    </div>
  );
};

export default Header;
