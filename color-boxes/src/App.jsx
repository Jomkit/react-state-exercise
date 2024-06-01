import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorBoard from './ColorBoard';

function App() {
  const colorArr = [
    "red", "blue", "yellow", "green", 
    "aliceblue", "blanchedalmond", "chartreuse", "blueviolet"
  ]
  return (
    <>
      <ColorBoard numBoxes={16} colors={colorArr} />
    </>
  )
}

export default App
