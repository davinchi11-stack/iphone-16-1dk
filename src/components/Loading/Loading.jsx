import "./loading.scss"
import { useEffect } from "react"


export default function Loading () {
    useEffect(() => {
        
    })
    return(
        <div className="loading">
          <div className="container">
            <div className="loader">
                <div className="loader__item loader__item-1"></div>
                <div className="loader__item loader__item-2"></div>
                <div className="loader__item loader__item-3"></div>
                <div className="loader__item loader__item-4"></div>
                <div className="loader__item loader__item-5"></div>
                <div className="loader__item loader__item-6"></div>
                <div className="loader__item loader__item-7"></div>
                <div className="loader__item loader__item-8"></div>
                <div className="loader__item loader__item-9"></div>
                <div className="loader__item loader__item-10"></div>
                <div className="loader__item loader__item-11"></div>
                <div className="loader__item loader__item-12"></div>
            </div>
            </div>

        </div>
    )
}