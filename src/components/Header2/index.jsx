import React from "react";
import { Link } from "react-router-dom";

//import images
import logo from "assets/logo.png";
import instagram from "assets/icon-3.svg";

//import styles
import "./styles.scss";

export const Header2 = () => {
  return (
    <header className="header-2">
      <div>
        <Link to="/">
          <img className="logo-2" src={logo} alt="Oceaning" />
        </Link>
      </div>
      <div className="social-network-2">
        <div id="social-network-text-2">
          <p>COMPARTILHE</p>
          <p>@theoceaning</p>
        </div>
        <img src={instagram} alt="" />
      </div>
    </header>
  );
};
