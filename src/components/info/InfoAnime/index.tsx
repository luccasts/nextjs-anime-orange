import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import {IAnimeAPI, IAPIAnimeDetais} from "../../../interfaces"
import styles from "./page.module.scss"
import Image from "next/image"

interface ApiProps {
    data:IAnimeAPI
}

export const InfoAnime = ({data}:ApiProps) => {
    const img:any= data.eps.map((d: { img: any }) => d.img)
    const ep:any = data.eps.map((d: { ep: any } ) => d.ep)
    console.log(img)
    return (
        <WrapperMain>
            <section className={styles.InfoSection}>
                <img src={img} alt="aside" width={300} height={220}></img>
               
                <div className={styles.InfoSectionDiv}>
                    <h1>{data.title}</h1> 
                    <h4>Episódios: {ep}</h4>
                    <h4>Catégoria</h4>   
                    <p>{data.details.description}</p>
                </div>
            </section>
            
        </WrapperMain>
    )
}