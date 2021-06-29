import React from "react";
import { Link } from "react-router-dom";

//import images
import logo from "assets/logo.png";
import instagram from "assets/icon-3.svg";

//import styles
import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="Oceaning" />
        </Link>
      </div>
      <div className="social-network">
        <div id="social-network-text">
          <p>COMPARTILHE</p>
          <p>@theoceaning</p>
        </div>
        <img src={instagram} alt="" />
      </div>
    </header>
  );
};
