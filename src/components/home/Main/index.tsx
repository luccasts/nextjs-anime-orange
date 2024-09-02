import SectionList from "components/_ui/SectionList"
import { Title } from "components/_ui/Title"
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection"

export const Main= () => {
    return (
        <> 
        <WrapperMain>
            <WrapperSection>
                <Title title={"LANÇAMENTOS"} /> 
            </WrapperSection>               
            <SectionList/>
        </WrapperMain>
        </>       
    )
}