import { useState, useRef } from 'react'
import './App.css'

function App() {
  const ref = useRef(0);
  const [state, setState] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1
  }

  function setNewState () {
    setState(ref.current);
  }

  return (
    <>
   <button onClick={handleClick}>Click me!</button>
   <button onClick={setNewState}>Set New State</button>
   <h1>Your state is: {state}</h1>
   <h1>Your Ref is: {ref.current}</h1>
    </>
  )
}

export default App
