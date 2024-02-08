import { useState } from 'react'

import './App.css'
import Cat from './components/Cat'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Cat></Cat>
    </div>
  )
}

export default App
