import React from 'react';
import "./Eightball.css";

const Eightball = ({answer}) => {
    
    return (
        <div className="Eightball" style={{backgroundColor:answer.color}}>
            <h2 className='Eightball-msg'>
                {answer.msg}
            </h2>
        </div>
    )
}

export default Eightball;