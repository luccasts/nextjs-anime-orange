
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { IAPIanimeContext } from "interfaces"
import Image from "next/image"
import styles from "./page.module.scss"
import Link from "next/link"

type ApiProps = {
    data: IAPIanimeContext  
    // |
}
  

export const CardAnime = ({data}:ApiProps) => {
    const url = data.map((d:string) => d.url)
    const subtitle = data.map((d:string) => d.ep)
    // const url = data.eps.map((d) => d.url)
    // const subtitle = data.eps.map((d) => d.ep)
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