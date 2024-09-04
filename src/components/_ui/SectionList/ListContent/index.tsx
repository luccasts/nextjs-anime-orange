import Link from "next/link";
import { IAnimeAPI, IAnimeAPIOLD, IAPIanimeContext } from "interfaces";

import styles from "./page.module.scss"


type ApiProps = {
    apiAnime: IAnimeAPI;

}

export default function SectionLiDiv({ apiAnime}: ApiProps) {
    const img = (apiAnime.eps.map((e: { img:string; }) => e.img))
    const ep = (apiAnime.eps.map((e: { ep: string; }) => e.ep))
    console.log(img, ep)

    return (
        <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/anime/[id]" as={`/anime/${apiAnime?.id}`}>
                    <img className={`${styles?.img}`} src={img} alt={apiAnime?.title} />
                    <div className={styles.div__title}>
                        <h3 className={`${styles.title}`}>{apiAnime?.title}</h3>
                        <h4> Episódio {ep}</h4>
                    </div>
                </Link>
            </div>
        </li>
    )
}
