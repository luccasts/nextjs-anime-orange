"use client"
import { IAnimeAPI } from 'interfaces'
import styles from "./page.module.scss"
import SectionLiDiv from 'components/_ui/SectionList/ListContent';
import getAnimes from 'services/getAnimes';



export default function SectionList() {
  const {data, error, isLoading} = getAnimes()
  
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null
  

  return (
      <section className={styles.section_container}>
        <ul className={styles.ul}>
          {data.map((p: IAnimeAPI) => (
            <SectionLiDiv key={p.id} apiAnime={p} />
          ))}
        </ul>
      </section> 

  )
}