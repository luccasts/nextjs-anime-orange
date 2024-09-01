import { Footer } from "components/_ui/Footer";
import { Header } from "components/_ui/Nav";
import { Title } from "components/_ui/Title";
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain";
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection";
import SectionList from "components/_ui/SectionList";



//{data}:ApiProps
export default function Page({data,error, isLoading}:any) {
  return (
    <>
      <Header />
      <WrapperMain>
        <WrapperSection>
          <Title title={"PESQUISA"} />
        </WrapperSection>
        <SectionList data={data} error={error} isLoading={isLoading}/>
      </WrapperMain>
      <Footer />
    </>
  )
}