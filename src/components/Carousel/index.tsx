import React from "react"
import styles from "./page.module.scss"
import Image from "next/image"
import {Wrapper} from "../Wrapper"

export const Banner = () => {
    return (
        <>
            <Wrapper>
                <div className={styles.container}>
                    <div className={styles.container_carousel}>
                        <button  className={styles.arrow_left}> &#129082; </button>
                        <button  className={styles.arrow_rigth}> &#129080; </button>
                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230}/>
                        </div>

                        <div className={styles.container_carousel_item}>
                            <Image className={`${styles.container_carousel_image }${styles.carousel_showScreen}`} src="/images/aside3.png" alt="aside" width={230} height={230}/>
                        </div>
                        
                    </div>
                </div>
                
            </Wrapper> 
        </>
    )
}