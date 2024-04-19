import './App.css'
import Dog from './Dog'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DobleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'

function App() {
  return (
    <div>
      <Dog />
      <Greeter person="Sky" from="Vaishnavi" />
      <Die numSides={20} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <Heading text="Welcome!" color="olive" />
      <ColorList colors={["red", "green", "blue"]} />
      <Slots slot1="a" slot2="a" slot3="a"/>
      <Slots slot1="a" slot2="a" slot3="b"/>
    </div>
  )
}

export default App
