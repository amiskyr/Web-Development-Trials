import './App.css'
import Counter from './BasicStatesDemo/Counter'
import EmojiClicker from './IntermediateStatesDemo/EmojiClicker'
import InitializerDemo from './IntermediateStatesDemo/InitializerDemo'
import ScoreCounter from './IntermediateStatesDemo/ScoreCounter'
import ScoreKeeper from './IntermediateStatesDemo/ScoreKeeper'

function App() {

  return (
    <>
      <h1>States Demo</h1>
      {/* <Counter /> */}
      {/* <InitializerDemo /> */}
      {/* <ScoreKeeper /> */}
      {/* <EmojiClicker /> */}
      <ScoreCounter numPlayers={4} winTarget={5} />
    </>
  )
}

export default App
