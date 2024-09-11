import Link from "next/link";
import { IAnimeAPI } from "interfaces";

import styles from "./page.module.scss"
import { handleLink } from "common/handleLink";

type ApiProps = {
    data: IAnimeAPI;
    page: string,
    DataEp?: string,
    DataImg?: string,

}

export default function EpLi({ data, page = "home", DataEp, DataImg, }: ApiProps) {
    let img: any = (data.eps.map((e: { img: string; }) => e.img))
    let ep: any = (data.eps.map((e: { ep: string; }) => e.ep)) 
    const eps = (data.eps)
    if (page === "home") {

        if (img.length > 1) {
            let last
            for (let i = 0; i < img.length; i++) {
                last = eps[i]
            }
            img = last?.img
            ep = last?.ep

        }
    }
    const link = handleLink(data.title, ep)
    if (page === "info") {
        const link = handleLink(data.title, DataEp)
        return <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/watch/[title]" as={link}>
                    <img className={`${styles?.img}`} src={DataImg} alt={data?.title} />
                    <div className={styles.div_title}>
                        <h3 className={`${styles.title}`}>{data?.title}</h3>
                        <h4 className={`${styles.subtitle}`}>Episódio {DataEp}</h4>
                    </div>
                </Link>
            </div>
        </li>
    }


    return (
        <li className={styles.li}>
            <div className={styles.div}>
                <Link href="/watch/[title]" as={link}>
                    <img className={`${styles?.img}`} src={img} alt={data?.title} />
                    <div className={styles.div_title}>
                        <h3 className={`${styles.title}`}>{data?.title}</h3>
                        <h4 className={`${styles.subtitle}`}>Episódio {ep}</h4>
                    </div>
                </Link>
            </div>
        </li>
    )

}
