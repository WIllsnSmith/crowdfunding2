import React from "react";
import "../css/mainPage.css";
import Card from "./Cards";
import Mentors from "./Mentors";

const MainPage = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <span>краудфандинговая платформа "пирамида"</span>{" "}
      </div>
      <div className="content">
        <ul className="menu">
          <li>Все</li>
          <li>IT</li>
          <li>Здоровье</li>
          <li>Права</li>
        </ul>
        <Card />
        <Mentors />
      </div>
      <div className="footer">
        <span>&copy; Все права защищены</span>
      </div>
    </div>
  );
};

export default MainPage;
