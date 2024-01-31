import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);


  const addValue =()=>{
    if(counter<20){
    console.log("Value Added",Math.random());
    setCounter(counter=>counter+1);
  }
}

  const removeValue=()=>{
    if(counter>0){
    console.log("value decreased: ",counter);
    setCounter(counter=>counter-1);
  }
}
  return (
    
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value</button> <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
