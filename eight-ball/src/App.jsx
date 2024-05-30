import { useState } from 'react'
import './App.css'
import Eightball from './Eightball';
import fortunes from './fortunes';
import CountColor from './CountColor';

function App() {
  const defEightBall = {msg: "Think of a Question", color: "black"};
  const [state, setState] = useState(defEightBall);
  const allColorCount = [
    {color: "red", count: 0},
    {color: "goldenrod", count: 0},
    {color: "green", count: 0}
  ];

  const [trackColor, setTrackColor] = useState(allColorCount);

  const getFortune = () => {
    let idx = Math.floor(Math.random() * fortunes.length);
    let fortune = fortunes[idx];
    console.log(fortune.color);
    trackColor.map(c => c.color == fortune.color ? c.count = c.count + 1 : c);
    setTrackColor(trackColor);
    console.log(trackColor);
    setState(fortune);
  }
  const reset = () => {
    setState(defEightBall);
    setTrackColor(allColorCount);
  }
  

  return (
    <>
      <h1>Magic Eight Ball</h1>
      <div onClick={getFortune}>
      <Eightball answer={state} />
      </div>
      <div>
        <CountColor colors={trackColor} />
      </div>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
