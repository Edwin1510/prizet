import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from "./Prizecard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Cards></Cards>
    </>
  )
}

export default App
