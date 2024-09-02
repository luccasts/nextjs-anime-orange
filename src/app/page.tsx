import { Footer } from 'components/_ui/Footer'
import { Header } from 'components/_ui/Nav'
import { Main } from 'components/home/Main'
import { SectionCarousel } from 'components/home/SectionCarousel'
import Loading from 'components/_ui/Loading'





export default function Home() {
 
  return (
    <>
      <Loading />
      <Header />
      <SectionCarousel />
      <Main />
      <Footer />
    </>
  )
}
