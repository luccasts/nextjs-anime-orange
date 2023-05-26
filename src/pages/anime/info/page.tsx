import { IApianimeContext } from 'interfaces'
import { Header } from "components/Header"

import { InfoAnime } from 'components/InfoAnime';


type ApiProps = {
  data: IApianimeContext
}


export default function AnimePage({data}:ApiProps) {
  return (
    <>
    <Header />
    <InfoAnime data={data}/>
    </>
  )
}