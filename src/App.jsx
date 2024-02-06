import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // [value, () => {}]

  function add() {
    setCount(count + 1)
  }

  function less() {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  function reset() {
    setCount(0)
  }

  return (
    <div className='container'>
      <h1>Count</h1>

      <span className='count' >{count}</span>

      <div className="buttons">
        <button className='add-button' onClick={less}>Decrementar</button>
        <button className='reset-button' onClick={reset}>Resetar</button>
        <button className='less-button' onClick={add}>Incrementar</button>
      </div>
    </div>
  )
}

export default App
