import Link from "next/link";
import { IAnimeAPI } from "interfaces";

import styles from "./page.module.scss"
import { handleDateDiff } from "common/handleDateDiff";



type ApiProps = {
    apiAnime: IAnimeAPI;

}

export default function EpLi({ apiAnime}: ApiProps) {
    // const filter = apiAnime.eps.filter(())
    const img = (apiAnime.eps.map((e: { img:string; }) => e.img))
    const ep = (apiAnime.eps.map((e: { ep: string; }) => e.ep))
    if(img.length > 1) {
        handleDateDiff(apiAnime)
    }
    //arrumar as conts e as img e o ep
    return (
        <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/anime/[id]" as={`/anime/${apiAnime?.id}`}>
                    <img className={`${styles?.img}`} src={img} alt={apiAnime?.title} />
                    <div className={styles.div__title}>
                        <h3 className={`${styles.title}`}>{apiAnime?.title}</h3>
                        <h4 className={`${styles.subtitle}`}> Episódio {ep}</h4>
                    </div>
                </Link>
            </div>
        </li>
    )
    
}
