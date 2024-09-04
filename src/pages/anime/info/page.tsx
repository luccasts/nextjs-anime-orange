import { IAnimeAPI } from 'interfaces'
import { Header } from "components/_ui/Nav"

import { InfoAnime } from 'components/info/InfoAnime';
import { Footer } from 'components/_ui/Footer';
import RootLayout from 'app/layout';


type ApiProps = {
  data: IAnimeAPI
}


export default function AnimePage({data}:ApiProps) {
  return (
    < RootLayout>
      <Header />
        <InfoAnime data={data}/>
      <Footer/>
    </ RootLayout>
  )
}