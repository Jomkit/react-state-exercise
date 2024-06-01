import React from 'react'
import "./Box.css";

const Box = ({color}) => {
  return (
    <div className='Box' style={{backgroundColor: color}}>
      <p>{color}</p>
      </div>
  )
}

export default Box