import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageZoomInOut from './components/ImageZoomInOut'

import TEST_IMG  from './images/view-hawaiian-shirt-with-floral-print-sneakers_23-2149366083.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ImageZoomInOut imageUrl={TEST_IMG}/>
      
    </div>
  )
}

export default App
