import { useState } from 'react'
import Nombre from './components/Nombre'
import Precio from './components/Precio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nombre/>
      <Precio/>
    </div>
  )
}

export default App
