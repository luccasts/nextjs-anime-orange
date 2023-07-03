import AnimeContent from "components/home/ListAnime"
import { Title } from "components/_ui/Title"
import { Wrapper } from "components/_ui/Wrapper"

export const CardList = () => {
    return (
        <Wrapper>
            <Title title={"LANÇAMENTOS"} />                
            <AnimeContent/>
        </Wrapper>
            
    )
}