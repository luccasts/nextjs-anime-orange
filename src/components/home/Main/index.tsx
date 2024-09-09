import EpsList from "components/_ui/EpsList"
import { Title } from "components/_ui/Title"
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection"
import RecentlyReleased from "../RecentlyReleased"

export const Main= () => {
    return (
        <WrapperMain>
            <RecentlyReleased />                            
        </WrapperMain>     
    )
}