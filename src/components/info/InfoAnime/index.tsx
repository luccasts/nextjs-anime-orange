import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import {IAPIAnimeDetais} from "../../../interfaces"
import styles from "./page.module.scss"
import Image from "next/image"

interface ApiProps {
    data:IAPIAnimeDetais
}

export const InfoAnime = ({data}:ApiProps) => {
    return (
        <WrapperMain>
            <section className={styles.InfoSection}>
                <Image className={''} src={data.img} alt="aside" width={300} height={220}/> 
                <div className={styles.InfoSectionDiv}>
                    <h1>{data.title}</h1> 
                    <h4>Episódios: {data.eps}</h4>
                    <h4>Catégoria</h4>   
                    <p>{data.description}</p>
                </div>
            </section>
            
        </WrapperMain>
    )
}