import React, { useState } from "react";
import "./Box.css";

const Box = () => {
  const [color, setColor] = useState("aliceblue");
  const colorArray = [
    "red",
    "blue",
    "purple",
    "linen",
    "teal",
    "yellow",
    "black",
    "gray",
    "crimson",
    "cyan",
    "cornsilk",
    "cadetblue",
    "goldenrod",
    "honeydew",
    "indigo",
    "magneta",
  ];
  const handleColor = (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * colorArray.length);
    setColor(colorArray[random]);
  };
  return (
    <div
      className="Box"
      onClick={handleColor}
      style={{ backgroundColor: `${color}` }}
    ></div>
  );
};

export default Box;
