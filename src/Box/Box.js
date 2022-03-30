import React, {useState} from 'react';
import './Box.css'

const Box = () => {
    const [color, setColor] = useState("blue");
    const colorArray = ["red", "blue", "purple", "linen", "teal"];
    const handleColor = (e) => {
      console.log("You clicked a box");
      e.preventDefault();
      const random = Math.floor(Math.random() * colorArray.length);
      setColor(colorArray[random]);
      }
    return ( 
        <div className="Box" onClick={handleColor} style={{backgroundColor:`${color}`}}>

        </div>
     );
}
 
export default Box;