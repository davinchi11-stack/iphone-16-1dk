import {ReactLenis} from 'lenis/react'
import { Header } from './components/Header'
import { IntroduceIp } from './components/IntroduceIp'
import { useEffect } from 'react'
import { LargeIp } from './components/LargeIp'
import { StickyTwo } from './components/StickyTwo'
import { Vidquality } from './components/Vidquality'
import { LevelUp } from './components/LevelUp'
import { Gaming } from './components/Gaming'
import { scrollText } from './animation/text'


function App() {
 useEffect(() => {
  scrollText()
 })

  return (
     <ReactLenis root> 
      <div className="iphone_wrap">
        <Header/>
        <IntroduceIp/>
        <LargeIp/>
        <StickyTwo/> 
        <Vidquality/>
        <LevelUp/>
        <Gaming/>
      </div>
      </ReactLenis>
  )
}

export default App
