import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import styles from "./page.module.scss"
import Link from "next/link"


export const WatchPoster = ({data}:any) => {
    const url = data.map((d:any) => d.url);
    const subtitle = data.map((d:any) => d.ep);
    return (
        <WrapperMain>
            <section className={`${styles.SectionIframe}`}>
                <iframe width={`100%-12%`} height={`100%-12%`} src={url} title={data?.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                <Link href={`http://localhost:3000/anime/info/${data?.id}`}>
                    <h1>{data?.title}</h1>
                </Link>
                
                <h3>{subtitle}</h3>
            </section>
           
        </WrapperMain>
    )
}