import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import GeographigPosition from '../public/components/GeographigPosition'
import Card from '../public/components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <GeographigPosition />
        </div>
      </div>
    
   
  )
}

export default App
