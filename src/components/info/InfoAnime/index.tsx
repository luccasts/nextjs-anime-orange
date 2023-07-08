import { Wrapper } from "components/_ui/Wrapper/wrapperDiv"
import {IApianimeContext} from "../../../interfaces"

import Image from "next/image"

interface ApiProps {
    data:IApianimeContext
}

export const InfoAnime = ({data}:ApiProps) => {
    return (
        <Wrapper>
            <Image className={''} src={data.img} alt="aside" width={100} height={100}/> 
            <h1>{data.title}</h1> 
            <h3>{data.subtitle}</h3>
            <h4>Conteúdo</h4>
        </Wrapper>
    )
}