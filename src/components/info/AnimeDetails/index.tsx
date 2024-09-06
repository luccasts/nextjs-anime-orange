import styles from "./page.module.scss"

interface IAnimeDetails {
    poster:string,
    data:{
        title:string,
        details:{
            description:string,
        }
    }
    category:string[],
    ep:string
}

export default function AnimeDetails({poster, data, category, ep}:IAnimeDetails) {
    return (
        <section key={`${data.title}-details-${ep}`} className={styles.InfoSection}>
                <img src={poster} alt="aside" width={300} height={220}></img>

                <div key={`${data.title}-details-${ep}`} className={styles.InfoSectionDiv}>
                    <h1>{data.title}</h1>
                    <h4>Episódios: {ep}</h4>
                    <h4>Catégoria</h4>
                    {category.map((c) => <p key={`${data.title}-${c}`}>{c}</p>)}
                    <h4>Sinopse</h4>
                    <p>{data.details?.description}</p>
                </div>
        </section>
    )
}