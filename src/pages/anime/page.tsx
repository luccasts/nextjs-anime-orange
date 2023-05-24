import { IApianimeContext } from 'interfaces'
import { Header } from "components/Header"

import { CardAnime } from "components/CardAnime";


type ApiProps = {
  data: IApianimeContext
}


export default function AnimePage({data}:ApiProps) {
  return (
    <>
    <Header />
    <CardAnime data={data}/>
    </>
  )
}