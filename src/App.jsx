import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Button from './comp/Button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        <h1>Twitter Card</h1>
        <Button text="Holaa"></Button>
        <Button text="Holab"></Button>
        <Button text="Holac"></Button>
    </>
  )
}

export default App
