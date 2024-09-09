import Link from "next/link";
import styles from "./page.module.scss";
import { handleLinkCarousel } from "common/handleLink";

export default function CarouselLi({ data }:any) {
    const poster = data.carousel.img
    const id = data.id
    const link = handleLinkCarousel(id)
    return (
        <li className={styles.carousel_item} key={id}>
            <Link href={link} className={styles.container_link}>
                <img
                    className={`${styles.container_carousel_image}${styles.carousel_showScreen}`}
                    src={poster}
                    alt="imagem banner"
                />
            </Link>
        </li>

    )
}