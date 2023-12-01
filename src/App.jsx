import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeDateFormat from './Component/ChangeDateFormat'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChangeDateFormat/>
    </>
  )
}

export default App
