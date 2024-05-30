import React from 'react'
import "./CountColor.css";

const CountColor = ({colors}) => {

  return (
    <div className='CountColor'>
        {colors.map(c => <p>Count {c.color}: {c.count}</p>)}
        
    </div>
  )
}

export default CountColor