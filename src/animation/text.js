import Splitting from 'splitting'
import gsap  from 'gsap'
import { useObserver } from '../Hooks/useObserver'


export function scrollText () {
    const {inView} = useObserver()
    const H = document.querySelectorAll("[data-animation='header']");
    const P = document.querySelectorAll("[data-animation='para']")
    



    H.forEach((item) => {
        Splitting({
            target: item,
            by: "chars",
        });
        gsap.set(item.querySelectorAll(".char"), {
            opacity: 0,
            yPercent: 100,
            transformStyle: "preserve-3d",
        });
        inView(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".char");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                stagger: elem.length > 100 ? 0.013 : 0.02,
                duration: elem.length > 100 ? 0.35: 0.5,
                ease: "easeOut",
            });
        });
    });

    P.forEach((item) => {
      const  lines = Splitting({
            target : item,
            by : "lines"
        })

        lines.forEach((splitResult) => {
             const splitWrap = splitResult.words.map((wrap) =>
                 `
                <span class='word_wrap'>
                ${wrap.outerHTML}
                </span>
               `
            ).join(" ")
            splitResult.el.innerHTML = splitWrap
        })
        gsap.set(item.querySelectorAll(".word"), {
            opacity: 0,
            yPercent: 105,
            rotateX: 50,
            transformStyle: "preserve-3d",
        });
        inView(item, {
            threshold: 1,
        }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
                opacity: 1,
                yPercent: 0,
                rotateX : 0,
                stagger: elem.length > 100 ? 0.02 : 0.025,
                duration: elem.length > 100 ? 0.65 : 0.7,
                ease: "easeOut",
            });
        });
    })

    
}
