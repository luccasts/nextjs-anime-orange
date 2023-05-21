import Link from "next/link";
import { IApianimeContext } from "interfaces";
import { Wrapper } from "components/Wrapper";



type ApiProps = {
    apiAnime: IApianimeContext
}

export default function AnimeContext({apiAnime}:ApiProps){

    return (
        <Wrapper>
            <Link href="/anime/[id]" as={`/anime/${apiAnime.id}`}>
               {apiAnime.title}
            </Link>
        </Wrapper>
    )
}
