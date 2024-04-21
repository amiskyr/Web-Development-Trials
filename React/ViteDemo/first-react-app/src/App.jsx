import './App.css'
import Dog from './Dog'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'
import DoubleDice from './DobleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './Slots'
import ShoppingList from './ShoppingListDemo/ShoppingList'
import PropertyList from './PropertyListDemo/PropertyList'

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "chicken breasts", quantity: 4, completed: false },
  { id: 4, item: "carrots", quantity: 6, completed: true },
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129032, name: "Lone Mountain Cabin", rating: 4.3, price: 200 },
  { id: 129033, name: "Cactus Retreat", rating: 4.0, price: 250 },
  { id: 129034, name: "Redwood Treehouse Escape", rating: 4.5, price: 300 },
  { id: 129035, name: "Oceanview Condo", rating: 4.1, price: 350 },
  { id: 129036, name: "Gold Miner Campground", rating: 4.7, price: 400 },
]

function App() {
  return (
    <div>
      {/* <Dog /> */}
      {/* <Greeter person="Sky" from="Vaishnavi" /> */}
      {/* <Die numSides={20} /> */}
      {/* <ListPicker values={[1, 2, 3]} /> */}
      {/* <ListPicker values={["a", "b", "c"]} /> */}
      {/* <DoubleDice /> */}
      {/* <DoubleDice /> */}
      {/* <DoubleDice /> */}
      {/* <Heading text="Welcome!" color="olive" /> */}
      {/* <ColorList colors={["red", "green", "blue"]} /> */}
      {/* <Slots slot1="a" slot2="a" slot3="a" /> */}
      {/* <Slots slot1="a" slot2="a" slot3="b" /> */}

      <ShoppingList items={data} />
      <PropertyList properties={properties} />
    </div>
  )
}

export default App
