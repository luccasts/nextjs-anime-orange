import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { IAnimeAPI } from "../../../interfaces"
import styles from "./page.module.scss"
import Image from "next/image"
import EpsList from "components/_ui/EpsList"
import Teste from "../teste"

interface ApiProps {
    data: IAnimeAPI
}

export const InfoAnime = ({ data }: ApiProps) => {
    const img: any = data.eps.map((d: { img: any }) => d.img)
    const ep: any = data.eps.map((d: { ep: any }) => d.ep)
    const url: any = data.eps.map((d: { url: any }) => d.url)
    
    return (
        <WrapperMain>
            <section className={styles.InfoSection}>
                <img src={img} alt="aside" width={300} height={220}></img>

                <div className={styles.InfoSectionDiv}>
                    <h1>{data.title}</h1>
                    <h4>Episódios: {ep}</h4>
                    <h4>Catégoria</h4>
                    <p>{data.details?.description}</p>
                </div>
            </section>
            <section>
                <Teste url={url} ep={ep} img={img} id={data.id}/>
            </section>

        </WrapperMain>
    )
}