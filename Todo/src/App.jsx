import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-4xl text-gray-600 bg-red-500 py-5 '>Todo App</h1>
    </>
  )
}

export default App
