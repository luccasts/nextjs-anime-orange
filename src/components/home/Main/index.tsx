import SectionList from "components/_ui/SectionList"
import { Title } from "components/_ui/Title"
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { WrapperSection } from "components/_ui/Wrapper/wrapperSection"
import { IApianimeContext } from "interfaces"
import useSWR from "swr"
export const fetcher = (url: string) => fetch(url).then((res) => res.json())
export const Main= () => {
    const { data, error, isLoading } = useSWR<IApianimeContext[]>('/api/animes', fetcher)
    return (
        <> 
        <WrapperMain>
            <WrapperSection>
                <Title title={"LANÇAMENTOS"} /> 
            </WrapperSection>               
            <SectionList data={data} error={error} isLoading={isLoading} />
        </WrapperMain>
        </>
            
    )
}