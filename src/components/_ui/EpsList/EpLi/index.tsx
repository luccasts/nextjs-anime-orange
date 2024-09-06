import Link from "next/link";
import { IAnimeAPI } from "interfaces";

import styles from "./page.module.scss"
import { handleLink } from "common/handleLink";




type ApiProps = {
    apiAnime: IAnimeAPI;

}

export default function EpLi({ apiAnime}: ApiProps) {    

    let img:any = (apiAnime.eps.map((e: { img:string; }) => e.img))
    let ep:any = (apiAnime.eps.map((e: { ep: string; }) => e.ep))
    const eps = (apiAnime.eps)
    if(img.length > 1) {
        let last
        for(let i =0; i < img.length; i++){
            last = eps[i]
        }
        img = last?.img
        ep  = last?.ep
        
    }
    const link = handleLink(apiAnime.title, ep)

    return (
        <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/watch/[title]" as={link}>
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
