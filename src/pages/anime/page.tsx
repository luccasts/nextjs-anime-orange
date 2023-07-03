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
    <CardAnime data={data}/>
    <h1>{data?.title}</h1> 
    <h3>{data?.subtitle}</h3>
    <h4></h4>
    </>
  )
}