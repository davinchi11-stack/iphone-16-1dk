import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export function Gaming () {
    useEffect(()=> {
        gsap.set(".gaming_pic img", {
            autoAlpha: 0,
        });
        gsap.to(".gaming_pic img", {
            autoAlpha: 1,
            duration: 2,
            scrollTrigger: {
                trigger: ".gaming",
                start: "top center",
                end: "bottom bottom",
                ease: "ease-out",
            },
        });
    }, [])
    return (
        <div className="gaming">
            <div className="gaming_main">
                 <div className="gaming_main_top">
                    <h1 data-animation='header'>
                      Gaming.  In a whole.
                     <br />
                     new light.
                     
                     </h1>
                     
                    </div>
                <div className="gaming_main_img">
                <p>DEATH STRANDING DIRECTOR'S CUT</p>
                <picture className="gaming_pic">
                <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/gaming/gaming__efzeg2xv1ka6_xlarge_2x.jpg" 
                    media="(min-width: 1066px)" 
                />
                   <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/gaming/gaming__efzeg2xv1ka6_medium.jpg" 
                    media="(min-width: 743px)" 
                 />

                  <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/gaming/gaming__efzeg2xv1ka6_small.jpg" 
                    media="(max-width: 743px)" 
                 />
                <img src="https://www.apple.com/v/iphone-16-pro/a/images/overview/gaming/gaming__efzeg2xv1ka6_xlarge_2x.jpg" alt="iphone16" />
                </picture>
                </div>
                
                <div className="gaming_main_flex wrapper phone">
                    <div className="gaming_main_flex_middle">
                        <p data-animation='header'>
                        With up to two times faster hardware-accelerated <span className="p-white">ray tracing, A18 Pro makes</span> games
                         look and feel beautifully lifelike — with more fluid graphics and realistic lighting.
                        </p>
                        <p data-animation='para'> 
                        And with Game Mode in iOS 18, you'll get better sustained frame rates for continuous play and improved responsiveness 
                        if you're using wireless controllers and AirPods.
                        </p>
                    </div>
                    <div className="gaming_main_flex_bottom">
                        <h1 data-animation="header">
                        Up to 2x faster hardware-accelerated ray tracing <span className="p-white">than A17 Pro</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}