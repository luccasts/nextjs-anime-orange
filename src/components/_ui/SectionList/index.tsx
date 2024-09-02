"use client"
import { IAPIanimeContext } from 'interfaces'
import styles from "./page.module.scss"
import SectionLiDiv from 'components/_ui/SectionList/ListContent';
import handleSWR from 'services/handleSWR';



export default function SectionList() {
  const {data, error, isLoading} = handleSWR()
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null
  console.log(data)
  return (
      <section className={styles.section_container}>
        <ul className={styles.ul}>
          {data.map((p: IAPIanimeContext) => (
            <SectionLiDiv key={p.id} apiAnime={p} />
          ))}
        </ul>
      </section> 

  )
}