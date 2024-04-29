import { useState } from 'react'
import './App.css'
import Die from './Elements/Die'
import Dice from './Elements/Dice'
import LuckyN from './Elements/LuckyN'
import { sum } from "./Utility/utils"

function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);  // This checks whether all elements in dice are equal to dice[0] or not
}

function App() {
  return (
    <>
      {/* <h1>Lucky N</h1> */}
      {/* <Die val={2} /> */}
      {/* <Die val={2} /> */}
      {/* <Dice dice={[1, 2, 3]} color="pink" /> */}
      <LuckyN winCheck={lessThan4} /> {/* passing the callback instead of calling */}
      <LuckyN title="Roll the same number" winCheck={allSameValue} />
    </>
  )
}

export default App
