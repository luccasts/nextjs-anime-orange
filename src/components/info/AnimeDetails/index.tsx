import styles from "./page.module.scss"

interface IAnimeDetails {
    poster: string,
    data: {
        title: string,
        details: {
            description: string,
            eps:string
        }
    }
    category: string[],
    ep: string
}

export default function AnimeDetails({ poster, data, category, ep }: IAnimeDetails) {
    const eps = data.details?.eps
    return (
        <section  className={styles.infoSection}>
            <img src={poster} alt="aside" width={300} height={420}></img>

            <div  className={styles.infoTextDiv}>
                <h1>{data.title}</h1>
                <h4>Total de episódios: {eps}</h4>
                <h4>Catégoria</h4>
                <ul className={styles.categoryLi}>
                    {category.map((c) => <li key={`${data.title}-${c}`}>{c}</li>)}
                </ul>
                <h4>Sinopse</h4>
                <p>{data.details?.description}</p>
            </div>
        </section>
    )
}