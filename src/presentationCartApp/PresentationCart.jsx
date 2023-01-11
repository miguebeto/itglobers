import React from "react";
import imagenAvatar from "../assets/profile.jpg";
import "./PresentationCard.css";

export const PresentacionCard = () => {
  const nombre = "Miguel";
  return (
    <div className="containerApp">
      <div className="presentation-card">
        <img src={imagenAvatar} alt="img no found" />
        <h2>Hola, soy {nombre} y estoy aprendiendo React</h2>
      </div>
    </div>
  );
};
