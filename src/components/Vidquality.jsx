import videoB from '/assets/apple_camera.mp4'
import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export function Vidquality () { 
    useEffect(() => {
        gsap.set(".video_quality_main_video video" , {
         autoAlpha : 0,
        })
        gsap.to(".video_quality_main_video video", {
         autoAlpha: 1,
         duration : 2,
         scrollTrigger: {
             trigger : ".video_quality",
             start: "top center",
             scrub : true,
             end: "bottom bottom",
             ease: "ease-in-out",
         }
        })
     }, [])
     return (
        <div className="video_quality">
            <div className="video_quality_main">
            <div className="video_quality_main_video">
                <video 
                playsInline
                loop
                autoPlay
                muted
                src={videoB}
                ></video>
             </div>

             <div className="video_quality_main_txt wrapper tablet">
                <p data-animation="para">iPhone 16 Pro adds a second 48MP camera to the Pro camera system. The new 48MP Ultra Wide camera has a more advanced quad-pixel sensor for super-high-resolution 48MP ProRAW and HEIF photos with autofocus.</p>
                <p data-animation="header">So you can <span className='p-white'>capture a mesmerizing new level of detail</span> in macro photos and sweeping, wide-angle shots.</p>
             </div>
            </div>
        </div>
    )
}