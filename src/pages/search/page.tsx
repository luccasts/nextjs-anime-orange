import '../../app/globals.css'
import { Footer } from "components/_ui/Footer";
import { Header } from "components/_ui/Nav";
import { Title } from "components/_ui/Title";
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain";
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection";
import PosterAnime from 'components/_ui/PosterAnime';
import styles from './page.module.scss'


export default function SearchPage({ data, error, isLoading }: any) {
  return (
    <>
      <Header />
      <WrapperMain>
        <WrapperSection>
          <Title>
          <h1>Resultado da pesquisa</h1>
          </Title>
          <ul className={styles.list}>
            {data.map((d: any[]) => d.map((d) => <PosterAnime key={d.id} apiAnime={d} />))}
          </ul>
        </WrapperSection>
      </WrapperMain>
      <Footer />
    </>
  )
}