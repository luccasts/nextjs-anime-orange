import { IAnimeAPI } from 'interfaces'
import styles from "./page.module.scss"
import EpLi from 'components/_ui/EpsList/EpLi';
import { Title } from '../Title';

export default function EpsList({data}:any) {

  return (
      <section className={styles.section_container}>
        <Title title={"Lançados recentemente"} /> 
        <ul className={styles.ul}>
          {data != undefined ? data.map((p: IAnimeAPI) => (
            <EpLi key={p.id} apiAnime={p} />
          )): null}
        </ul>
      </section> 

  )
}


