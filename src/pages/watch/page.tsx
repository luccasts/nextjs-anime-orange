import { IAnimeSearchAPI } from 'interfaces'
import { Header } from "components/_ui/Nav"


import { Footer } from 'components/_ui/Footer';
import { WatchPoster } from 'components/watch/WatchPoster';



type ApiProps = {
  data: IAnimeSearchAPI
}



export default function Page({data}:ApiProps) {
  return (
    <>
    <Header />
      <WatchPoster  data={data}/>
    <Footer/>
    </>
  )
}