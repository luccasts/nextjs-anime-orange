import { Header } from "components/_ui/Nav"
import { Footer } from 'components/_ui/Footer';
import { WatchPoster } from 'components/watch/WatchPoster';
import '../../app/globals.css'

export default function WatchPage({ data }: any) {
  const ep: any = data[0]
  const anime: any = data[1]
  return (
    <>
      <Header />
        <WatchPoster ep={ep} data={anime}/>
      <Footer />
    </>
  )
}