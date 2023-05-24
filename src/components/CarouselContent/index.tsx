import React from "react"
import styles from "./page.module.scss"
    
import {Wrapper} from "../Wrapper"
import { IApiAnimeCarousel } from "interfaces"
import Carousel from "components/Carousel"


interface ICarousel {
    data:IApiAnimeCarousel
}


export const CarouselContent = () => {
    return (
        
        <>
            <Wrapper>
                <div className={styles.container}>
                    <div className={styles.container_carousel}>
                        <button  className={styles.arrow_left}> &#129082; </button>
                        <button  className={styles.arrow_rigth}> &#129080; </button>
                        <Carousel />
                        {/* <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230} priority={true}/>
                        C</div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230} priority={true}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230} priority={true}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230} priority={true}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230} priority={true}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230} priority={true}/>
                        </div> */}
                        
                    </div>
                </div>
                
            </Wrapper> 
        </>
    )
}