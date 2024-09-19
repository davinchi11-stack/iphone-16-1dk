import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export function LevelUp () {
    
    useEffect(() => {
        gsap.set(".picture_red img" , {
         autoAlpha : 0,
         yPercent: 20
        })
        gsap.to(".picture_red img", {
         autoAlpha: 1,
         yPercent: 0,
         duration : 2,
         scrollTrigger: {
             trigger : ".level-up",
             start: "top center",
             scrub : true,
             end: "bottom bottom",
             ease: "ease-in-out",
         }
        })
     }, [])

    return (
        <div className="level-up">
              
            <div className="level-up_txt">
            <h1 data-animation='header'>
                     Customize. Stylize.
                     <br />
                     Mesmerize.
                     </h1>
                </div>

                <div className="level-up_img">
                <picture className="picture_red">
                <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/ios-18/hero_ios18__gf6c1cf1m1yu_xlarge.jpg" 
                    media="(min-width: 1066px)" 
                />
                   <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/ios-18/hero_ios18__gf6c1cf1m1yu_medium.jpg" 
                    media="(min-width: 743px)" 
                 />

                  <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/ios-18/hero_ios18__gf6c1cf1m1yu_xsmall.jpg" 
                    media="(max-width: 743px)" 
                 />
                <img src="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/ios-18/hero_ios18__gf6c1cf1m1yu_xlarge.jpg" alt="iphone16" />
                </picture>
                </div>
            </div>
    )
}