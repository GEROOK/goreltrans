import React from "react";
import logo from "../img/logo.png";
import logoR from "../img/headerparv.png";
import "./Header.css";

export const Header = () => {
  return (
      <div className="containerhead">
          <a href="https://electrotrans.spb.ru">
              <img src={logo} alt="" className="img"/>
          </a>
          <div className="text-cont-head">
              <h1>Всем по пути</h1>
          </div>
          <div className="rigth">
              <a href="https://getmuseum.ru">
                  <img src={logoR} alt="" className="img"/>
              </a>
          </div>
          </div>
  );
};
