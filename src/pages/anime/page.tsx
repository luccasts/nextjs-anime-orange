import { IApianimeContext } from 'interfaces'
import { Header } from "components/_ui/Navbar"

import { CardAnime } from "components/anime/CardAnime";



type ApiProps = {
  data: IApianimeContext
}



export default function Page({data}:ApiProps) {
  return (
    <>
    <Header />
    <CardAnime  data={data}/>
    </>
  )
}