import Link from "next/link";
import { ApiProps} from "interfaces";

import styles from "./page.module.scss"
export default function PosterAnime({ apiAnime}:ApiProps){
    const id = apiAnime.id
    const poster = apiAnime.carousel.img
    return (
        <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/info/[id]" as={`/info/${id}`}>
                    <img className={`${styles?.img}`} src={poster} alt={apiAnime?.title} />
                    <div className={styles.div__title}>
                        <h3 className={`${styles.title}`}>{apiAnime.title}</h3>
                    </div>
                </Link>
            </div>
        </li>
    )
    


}