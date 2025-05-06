import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador]=useState(0);
  const [contador2, setContador2]=useState<Number>(0);
  const [contador3, setContador3]=useState<list<Number>>(0);

  
  return (

    <>
      Valor del Contador : {contador}
      <button onClick={}>Sumar 1 unidad</button>
    </>
  )
}

export default App
