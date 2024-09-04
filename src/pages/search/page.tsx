import '../../app/globals.css'
import { Footer } from "components/_ui/Footer";
import { Header } from "components/_ui/Nav";
import { Title } from "components/_ui/Title";
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain";
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection";
import EpLi from "components/_ui/EpsList/EpLi";


export default function SearchPage({ data, error, isLoading }: any) {
  
  return (
    <>
      <Header />
      <WrapperMain>
        <WrapperSection>
          <Title title={"PESQUISA"} />
          { data ? <EpLi apiAnime={data} />  : <h1>Nome informado não encontrado!</h1>
          }
        </WrapperSection>
      </WrapperMain>
      <Footer />
    </>
  )
}