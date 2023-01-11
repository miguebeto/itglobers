import React, { useState } from "react";
import "./RandomColor.scss";

const Button = ({ Color, Colors }) => {
  const [color, setColor] = useState(Color);

  const handleButton = (e) => {
    e.preventDefault();
    setColor(Colors[Math.floor(Math.random() * Colors.length)]);
  };

  return (
    <button
      className="--btn --btn:hover"
      onClick={handleButton}
      style={{ background: color, fontSize: "17px" }}
    >
      Click Me!
    </button>
  );
};

export const RandomColor = () => {
  const Colors = ["yellow", "blue", "red", "green"];

  return (
    <div className="random --flex-center">
      <div className="content --card">
        <h2 className="">Button Color Change Loop</h2>
        <p>The solution of Button Color Change Loop In React !</p>
        <div className="buttons">
          {Colors.map((Color, index) => {
            return <Button Color={Color} Colors={Colors} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
