import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import styles from "./page.module.scss"

import AnimeDetails from "../AnimeDetails"

import Ep from "components/_ui/Ep"

interface IEps {
    ep: string,
    url: string,
    img: string
}

export const InfoAnime = ({ data }: any) => {
    const poster = data.carousel.img
    const category = data.details.category
    const img: any = data.eps.map((d: { img: any }) => d.img)
    const ep: any = data.eps.map((d: { ep: any }) => d.ep)
    const url: any = data.eps.map((d: { url: any }) => d.url)
    return (
        <WrapperMain>
            <AnimeDetails ep={ep} category={category} data={data} poster={poster} key={`${data.title}-details`} />
            <section className={styles.infoSectionDiv}>
                <ul className={styles.ul}>
                    {data?.eps.length > 1 ? data.eps.map((ep: IEps) =>
                        <Ep page={"info"} key={`${data.title}-${ep.ep}`} data={data} DataEp={ep.ep} DataImg={ep.img} />
                    )
                        :
                        <Ep key={`${data.title}-${ep}`} page="info" data={data} DataEp={ep} DataImg={img} />
                    }

                </ul>
            </section>
        </WrapperMain>
    )
}