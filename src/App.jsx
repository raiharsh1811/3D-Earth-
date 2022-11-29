import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Canvas} from "@react-three/fiber"
import Earth from "./components/Earth"
import Topsection from './components/tosection/topsection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      
          <Canvas style={{width:'100%'}}>
            <Suspense fallback={null}>
                <Earth/>
            </Suspense>
          </Canvas>
          
    </>

  )
}

export default App
