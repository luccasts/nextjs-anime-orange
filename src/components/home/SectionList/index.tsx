'use client'; 
import useSWR from 'swr'
import {IApianimeContext} from 'interfaces'
import styles from "./page.module.scss"
import SectionLiDiv from 'components/home/SectionList/ListContent';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function SectionList() {
   const { data, error, isLoading } = useSWR<IApianimeContext[]>('/api/animes', fetcher)

  if (error) return <div>Failed to load1</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <section className={styles.section_container}>
      <ul className={styles.ul}>
        {data.map((p) => (
            <SectionLiDiv key={p.id} apiAnime={p} />
        ))}
      </ul>
    </section>
  )
}