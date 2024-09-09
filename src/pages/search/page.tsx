import '../../app/globals.css'
import { Footer } from "components/_ui/Footer";
import { Header } from "components/_ui/Nav";
import { Title } from "components/_ui/Title";
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain";
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection";
import PosterAnime from 'components/_ui/PosterAnime';



export default function SearchPage({ data, error, isLoading }: any) {
  return (
    <>
      <Header />
      <WrapperMain>
        <WrapperSection>
          <Title title={"Resultado da pesquisa"} />
          {data.map((d: any[]) => d.map((d) => <PosterAnime key={d.id} apiAnime={d} />))} 
          
        </WrapperSection>
      </WrapperMain>
      <Footer />
    </>
  )
}