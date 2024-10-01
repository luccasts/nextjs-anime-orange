import { handleCategoryName } from "common/handleCategoryName"
import styles from "./page.module.scss"
import Link from "next/link"

interface IAnimeDetails {
    poster: string,
    data: {
        title: string,
        details: {
            description: string,
            eps: string
        }
    }
    category: {
        map(arg0: (a: any, i: any) => any): any
        id: string,
        name: any
    },
    ep: string
}

export default function AnimeDetails({ poster, data, category, ep }: IAnimeDetails) {
    const eps = data.details?.eps
    const categoryName = category?.map((c => handleCategoryName(c.id, c.name)))

    return (
        <section className={styles.infoSection}>
            <img src={poster} alt="aside" width={300} height={420}></img>

            <div className={styles.infoTextDiv}>
                <h1>{data.title}</h1>
                <h4>Total de episódios: {eps}</h4>
                <h4>Catégoria</h4>
                <ul className={styles.categoryLi}>
                    {
                        category?.map((c, i: any) =>
                            <li key={`${data.title}-${c.name}`}>
                                <Link href={`/category/${c.name}`}>
                                    {categoryName[i]}
                                </Link>

                            </li>
                        )
                    }
                </ul>
                <h4>Sinopse</h4>
                <p>{data.details?.description}</p>
            </div>
        </section>
    )
}