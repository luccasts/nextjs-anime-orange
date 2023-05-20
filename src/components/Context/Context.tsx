import Link from "next/link";
import { IContext } from "interfaces";
import { Wrapper } from "components/Wrapper";


interface ContextProps {
    apiAnime: IContext
}

export default function ContextComponent({apiAnime}:ContextProps){
    return (
        <Wrapper>
            <Link href="/person/[id]" as={`/context/${apiAnime?.animeContext}`}>
                {apiAnime.animeContext}
            </Link>
        </Wrapper>
    )
}
