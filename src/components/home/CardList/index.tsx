import AnimeContent from "components/home/ListAnime"
import { Title } from "components/_ui/Title"
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection"

export const CardList = () => {
    return (
        <> 
        <WrapperMain>
            <WrapperSection>
                <Title title={"LANÇAMENTOS"} /> 
            </WrapperSection>               
            <AnimeContent/>
        </WrapperMain>
        </>
            
    )
}