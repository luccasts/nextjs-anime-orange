import { IApianimeContext } from 'interfaces'
import { Header } from "components/_ui/Navbar"

import { InfoAnime } from 'components/info/InfoAnime';
import { Footer } from 'components/_ui/Footer';


type ApiProps = {
  data: IApianimeContext
}


export default function AnimePage({data}:ApiProps) {
  return (
    <>
      <Header />
        <InfoAnime data={data}/>
      <Footer/>
    </>
  )
}