import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../Header/Header.scss";
import Logo from "../../assets/images/svg/logo.svg";
import Hamburger from "../../assets/images/svg/hamburger.svg";
import Account from "../../assets/images/svg/account.svg";
import Search from "../../assets/images/svg/search.svg";
import Cart from "../../assets/images/svg/cart.svg";

function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="header">
      <div className="header__logo-area">
        <Link to="/" className="header__logo-link">
          <img src={Logo} alt="Adidas" className="header__logo-img" />
        </Link>
      </div>
      <nav className="header__nav">
        <div className="header__nav-burger-area">
          <img
            src={Hamburger}
            alt="Navigation menu"
            className="header__nav-burger-img"
            onClick={() => toggleMenu()}
          />
          {menuVisible && <div className="header__nav-burger-menu">Test</div>}
        </div>
        <div className="header__nav-icon-area">
          <NavLink to="/account" className="header__nav-icon-link">
            <img
              src={Account}
              alt="Account"
              className="header__nav-icon-img"
            />
          </NavLink>
          <NavLink to="/search" className="header__nav-icon-link">
            <img
              src={Search}
              alt="Search"
              className="header__nav-icon-img"
            />
          </NavLink>
          <NavLink to="/cart" className="header__nav-icon-link">
            <img
              src={Cart}
              alt="Cart"
              className="header__nav-icon-img"
            />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
