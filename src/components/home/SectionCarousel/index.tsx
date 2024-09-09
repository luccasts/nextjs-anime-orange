import React from "react"
import styles from "./page.module.scss"
import { WrapperNav } from "../../_ui/Wrapper/wrapperNav"
import Carousel from "components/home/SectionCarousel/Carousel"
export const SectionCarousel = () => {
    return (
        <section>
            <WrapperNav>
                <div className={styles.container}>
                    <div className={styles.container_carousel}>
                        <button className={styles.arrow_left}> &#129082; </button>
                        <button className={styles.arrow_rigth}> &#129080; </button>
                        <Carousel />
                    </div>
                </div>
            </WrapperNav>
        </section>
    )
}