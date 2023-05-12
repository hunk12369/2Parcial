import { useState } from 'react'
import Nombre from './components/Nombre'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nombre/>
    </div>
  )
}

export default App
