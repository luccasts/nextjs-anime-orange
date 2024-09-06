import Link from "next/link";
import { ApiProps} from "interfaces";

import styles from "./page.module.scss"




export default function PosterAnime({ apiAnime}:ApiProps){
    const poster = apiAnime.map((api:any) => api.carousel)
    const img = poster.map((api:any) => api.img)
    const id = apiAnime.map((api:any) => api.id)

    return (
        <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/info/[id]" as={`/info/${id}`}>
                    <img className={`${styles?.img}`} src={img} alt={apiAnime?.title} />
                    <div className={styles.div__title}>
                        <h3 className={`${styles.title}`}>{apiAnime?.title}</h3>
                    </div>
                </Link>
            </div>
        </li>
    )
    


}