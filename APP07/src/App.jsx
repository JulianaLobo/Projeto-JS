import { useState } from 'react'
import Whatsapp from './componentes/Whatsapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Whatsapp/>
    </>
  )
}

export default App
