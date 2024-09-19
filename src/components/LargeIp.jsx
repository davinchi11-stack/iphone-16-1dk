import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export function LargeIp () {
    useEffect(() => {
       gsap.set(".picture_large img" , {
        autoAlpha : 0,
        yPercent: 20
       })
       gsap.to(".picture_large img", {
        autoAlpha: 1,
        yPercent: 0,
        duration : 2,
        scrollTrigger: {
            trigger : ".large_ip",
            start: "top center",
            scrub : true,
            end: "bottom bottom",
            ease: "ease-in-out",
        }
       })
    }, [])

    return (
        <div className="large_ip">
            <div className="large_ip_txt">
                <h1 data-animation="header">Strength. Beauty. </h1>
                <h1 data-animation="header">Titanium.</h1>
            </div>
            <div className="large_ip_img">
                <picture className="picture_large">
                <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/design/ANIM/design_hero_endframe__f4saxkdyib2a_xlarge.jpg" 
                    media="(min-width: 1066px)" 
                />
                   <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/design/ANIM/design_hero_endframe__f4saxkdyib2a_medium.jpg" 
                    media="(min-width: 743px)" 
                 />

                  <source 
                    srcSet="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/design/ANIM/design_hero_endframe__f4saxkdyib2a_small.jpg" 
                    media="(max-width: 743px)" 
                 />
                <img src="https://www.apple.com/v/iphone-16-pro/a/images/overview/product-stories/design/ANIM/design_hero_endframe__f4saxkdyib2a_xlarge.jpg" alt="large_ip" />
                </picture>
            </div>
            <div className="large_ip_flex_txt wrapper tablet">
                <p data-animation="header">
                iPhone 16 Pro features a Grade 5 titanium design with a new, refined microblasted finish. Titanium has one of 
                the highest strength-to-weight ratios of any metal, making these models <span className="p-white">incredibly strong and impressively light</span>.
                 iPhone 16 Pro comes in four stunning colors — including new Desert Titanium.
                </p>
                <p data-animation="para">
                Internal design improvements — including a 100 percent recycled aluminum thermal substructure and back
                 glass optimizations that further dissipate heat — enable up to 20 percent <span >better sustained <br /> performance</span> than iPhone 15 Pro. So you can do all the things you love — like high-intensity gaming — for longer.
                </p>
            </div>
             
        </div>
    )
}