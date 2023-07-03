import Link from "next/link";
import { IApianimeContext } from "interfaces";

import styles from "./page.module.scss"
import Image from "next/image"

type ApiProps = {
    apiAnime: IApianimeContext
}

export default function ListContent({apiAnime}:ApiProps){
    return (
        <li className={styles.li}>   
            <div className={styles.div}> 
            <Link href="/anime/[id]" as={`/anime/${apiAnime.id}`}>
               <img className={`${styles.img}`} src={apiAnime.img} alt={apiAnime.title} />
               <div className={styles.div__title}>             
                    <h3 className={`${styles.title}`}>{apiAnime.title}</h3> 
                    <h4> Episódio {apiAnime.subtitle}</h4>
               </div> 
            </Link>
            </div>
        </li>
    )
}
