import { useEffect } from "react"
import {drawImage} from '../animation/drawImage'

export function IntroduceIp () {
    useEffect(() => {
        const canvasA = document.querySelector(".canvasA") 
        const currentFrame = (index) => `assets/touch/touch_${index.toString().padStart(5,"0")}.png`;
        drawImage(canvasA , currentFrame , 56)
    }, [])

    return (
        <div className="intro_ip_wrapper">
         <div className="intro_ip">
         <canvas className="canvasA" width={window.innerWidth} height={window.innerHeight}></canvas>
                <div className="intro_ip_txt">
                    <h1 data-animation='para-color'>
                        The first iPhone built for Apple Intelligence.
                    </h1>
                </div>
          </div>
        </div>
   

    )
}