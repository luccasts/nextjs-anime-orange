import { IAnimeAPI } from 'interfaces'
import styles from "./page.module.scss"

import { Title } from '../Title';
import Ep from '../Ep';

export default function EpsList({ data }: any) {

  return (
    <section className={styles.section_container}>
      <Title>
        <h2>Lançados recentemente</h2>
      </Title>
      <ul className={styles.ul}>
        {data != undefined ? data.map((p: IAnimeAPI) => (
          <Ep page='home' key={p.id} data={p} />
        )) : null}
      </ul>
    </section>

  )
}


