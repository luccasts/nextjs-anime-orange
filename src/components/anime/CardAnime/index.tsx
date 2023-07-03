
import { Wrapper } from "components/_ui/Wrapper"
import { IApianimeContext } from "interfaces"
import Image from "next/image"

type ApiProps = {
    data: IApianimeContext  
    // |
}
  

export const CardAnime = ({data}:ApiProps) => {
    return (

        <Wrapper>
            <Image className={''} src={data?.img} alt="aside" width={100} height={100}/> 
            <h1>{data?.title}</h1> 
            <h3>{data?.subtitle}</h3>
        </Wrapper>
            
    )
}