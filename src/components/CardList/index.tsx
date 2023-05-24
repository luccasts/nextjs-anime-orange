import AnimeContent from "components/ListAnime"
import { Title } from "components/Title"
import { Wrapper } from "components/Wrapper"

export const CardList = () => {
    return (
        <Wrapper>
            <Title title={"LANÇAMENTOS"} />                
            <AnimeContent/>
        </Wrapper>
            
    )
}