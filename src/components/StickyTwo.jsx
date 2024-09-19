import { useEffect } from "react"
import { drawImage } from "../animation/drawImage"
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


export function StickyTwo () {
   
   useEffect(() => {
    const canvasScroll = document.querySelector(".canvas_scroll")
    const canvasScrollCurrentFrame = (index) => `assets/scroll_gp/scroll_${index.toString().padStart(5,"0")}.png`
    drawImage(canvasScroll , canvasScrollCurrentFrame , 69)


    gsap.set(".sticky_two_txt h1" , {
      yPercent : 50,
      transformStyle : "preserve-3d",
      autoAlpha: 0
  })  
  gsap.to(".sticky_two_txt h1", {
   yPercent : 0,
   autoAlpha: 1,
   duration: 0.7,
   scrollTrigger: {
      trigger : ".sticky_two",
      start : "top center",
      end: '+=300',
      scrub: true,
      once : true,
         ease : "circ.easeOut"
   }

})

   }, [])

    return(
     <div className="sticky_two">
                 <div className="sticky_two_txt">
                 <h1 data-animation='para-color'>
                     Taking. Total.
                     <br />
                     Control.
                     </h1>

                     
                     <p data-animation='header'>  
                         Personalize every style even more with the new control pad,
                          which makes <span className="gray">it easy to adjust tone and color simultaneously</span>. 
                          You can also use the slider to adjust the intensity of the specific colors,
                           instead of applying a one-size-fits-all approach.
                        </p>
                     
                </div>

                <div className="sticky_two_img">
                   <canvas width={window.innerWidth} height={window.innerHeight} className='canvas_scroll'></canvas>

                </div>  
     </div> 
    )
 }