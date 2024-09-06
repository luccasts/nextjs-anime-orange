import { IAnimeAPI, IAnimeSearchAPI } from 'interfaces'
import { Header } from "components/_ui/Nav"

import { InfoAnime } from 'components/info/InfoMain';
import { Footer } from 'components/_ui/Footer';
import RootLayout from 'app/layout';


type ApiProps = {
  data: IAnimeSearchAPI 
}


export default function AnimePage({ data }: ApiProps) {
  return (
    <>
      <Header />
      <InfoAnime data={data} />
      <Footer />
    </>
  )
}