import useSWR from 'swr'
import { IApianimeContext } from 'interfaces'
import styles from "./page.module.scss"
import SectionLiDiv from 'components/_ui/SectionList/ListContent';



export default function SectionList({ data, error, isLoading }: any) {
  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null
  console.log(data)
  return (
      <section className={styles.section_container}>
        <ul className={styles.ul}>
          {data.map((p: IApianimeContext) => (
            <SectionLiDiv key={p.id} apiAnime={p} />
          ))}
        </ul>
      </section> 
  )
}