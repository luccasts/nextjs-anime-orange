import '../../app/globals.css'
import { Footer } from "components/_ui/Footer";
import { Header } from "components/_ui/Nav";
import { Title } from "components/_ui/Title";
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain";
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection";
import PosterAnime from 'components/_ui/PosterAnime';
import styles from './page.module.scss'
import { useRouter } from 'next/router';
import { handleCategoryName } from 'common/handleCategoryName';

export default function CategoryPage({ data, error, isLoading }: any) {
  const { query } = useRouter()
  const routerID = query.id

  const categoryID = data.map((d: any) => d.details.category.map((c: any) => {
    if (c.name == routerID) {
      return c.id
    }
  }))

  const withoutUndefined = categoryID.find((c: string) => c !== undefined).filter((c: string) => c !== undefined)
  const categoryName = handleCategoryName(withoutUndefined[0])
  return (
    <>
      <Header />
      <WrapperMain>
        <WrapperSection>
          <Title >
            <h2>{`Categoria - ${categoryName}`} </h2>
          </Title>
          <ul className={styles.list}>
            {data.map((d: any) => <PosterAnime key={d.id} apiAnime={d} />)}
          </ul>
        </WrapperSection>
      </WrapperMain>
      <Footer />
    </>
  )
}