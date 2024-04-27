import { useState } from 'react'
import './App.css'
import Die from './Elements/Die'
import Dice from './Elements/Dice'

function App() {
  return (
    <>
      <h1>Lucky N</h1>
      {/* <Die val={2} /> */}
      {/* <Die val={2} /> */}
      <Dice dice={[1, 2, 3]} color="pink" />
    </>
  )
}

export default App
