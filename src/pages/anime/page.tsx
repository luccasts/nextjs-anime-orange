import { IAnimeSearchAPI } from 'interfaces'
import { Header } from "components/_ui/Nav"

import { CardAnime } from "components/anime/CardAnime";
import { Footer } from 'components/_ui/Footer';



type ApiProps = {
  data: IAnimeSearchAPI
}



export default function Page({data}:ApiProps) {
  return (
    <>
    <Header />
      <CardAnime  data={data}/>
    <Footer/>
    </>
  )
}