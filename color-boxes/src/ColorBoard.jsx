import React, { useState } from 'react';
import Box from './Box';
import "./ColorBoard.css";

const ColorBoard = ({numBoxes, colors}) => {
  // get color at random for all the boxes
  const getColor = () => {
    let resColor = colors[Math.floor(Math.random() * colors.length)];
    return resColor;
  }

  let colorArr = [];
  for(let i=0; i < numBoxes; i++){
    colorArr.push(getColor());
  }

  // state variables that manage the array of colors
  const [boxColors, setBoxColors] = useState(colorArr);
  
  const colorRandomBox = () => {
    console.log("colorRandomBox");
    let idx = Math.floor(Math.random() * numBoxes);
    console.log(idx);
    
    setBoxColors(boxColors.map((c, i) => i === idx ? getColor() : c));
  }

  return (
    <>
        <h1>ColorBoard</h1>
        <div className='ColorBoard'>
            {boxColors.map((c, i) => <Box key={i} color={c} /> )}
        </div>

        <button onClick={colorRandomBox}>Change</button>
    </>
  )
}

export default ColorBoard