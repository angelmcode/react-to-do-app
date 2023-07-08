// import { useState } from 'react'
import React from 'react'
import './App.css'
import Todoapp from './components/todoapp.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>ToDoApp</h1>
      <Todoapp />
    </div>
  )
}

export default App
