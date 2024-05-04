import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"
import TodoList from './Elements/TodoList'
import Navbar from './Elements/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </>
  )
}

export default App
