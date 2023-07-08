import React from "react"
import styles from "./page.module.scss"
    
import {WrapperNav} from "../../_ui/Wrapper/wrapperNav"
import { IApiAnimeCarousel } from "interfaces"
import Carousel from "components/home/Carousel"


interface ICarousel {
    data:IApiAnimeCarousel
}


export const CarouselContent = () => {
    return (
        <section>
            <WrapperNav>
                <div className={styles.container}>
                    <div className={styles.container_carousel}>
                        <button  className={styles.arrow_left}> &#129082; </button>
                        <button  className={styles.arrow_rigth}> &#129080; </button>
                        <Carousel />                        
                    </div>
                </div>  
            </WrapperNav> 
        </section>
    )
}