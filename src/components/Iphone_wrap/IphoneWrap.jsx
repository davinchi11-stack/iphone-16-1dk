import {ReactLenis} from 'lenis/react'
import { Header } from '../Header'
import { IntroduceIp } from '../IntroduceIp'
import { LargeIp } from '../LargeIp'
import { StickyTwo } from '../StickyTwo'
import { Vidquality } from '../Vidquality'
import { LevelUp } from '../LevelUp'
import { Gaming } from '../Gaming'


export default function IphoneWrap () {
    return(
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