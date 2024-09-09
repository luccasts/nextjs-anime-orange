import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import styles from "./page.module.scss"
import Link from "next/link"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/router";
import BackorNextEp from "common/BackorNextEp";



export const WatchPoster = ({ ep, data }: any) => {

    const url = ep.map((d: any) => d.url);
    const subtitle = ep.map((d: any) => d.ep);
    const id = data.id;
    const {query} = useRouter()
    return (
        <WrapperMain>

            <section className={`${styles.SectionIframe}`}>
                <iframe width={`100%-12%`} height={`100%-12%`} src={url} title={data.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <div className={`${styles.div_title}`}>

                    <div className={`${styles.title}`}>
                        <h2>
                            <Link href={`http://localhost:3000/info/${id}`}>{data.title}</Link>

                        </h2>
                        
                        <div className={`${styles.div_buttons}`}>
                            <button className={styles.arrow_left} onClick={() => BackorNextEp('back',data, query.id)}><AiOutlineArrowLeft /></button>
                                <h3>Episódio {subtitle}</h3>
                            <button className={styles.arrow_right} onClick={() => BackorNextEp('next',data, query.id)}><AiOutlineArrowRight /></button>
                        </div>
                    </div>

                </div>


            </section>
        </WrapperMain>
    )
}