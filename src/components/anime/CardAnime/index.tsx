
import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"
import { IApianimeContext } from "interfaces"
import Image from "next/image"
import styles from "./page.module.scss"

type ApiProps = {
    data: IApianimeContext  
    // |
}
  

export const CardAnime = ({data}:ApiProps) => {
    return (

        <WrapperMain>
            <Image className={''} src={data?.img} alt="aside" width={100} height={100}/> 
            <h1>{data?.title}</h1> 
            <h3>{data?.subtitle}</h3>
        </WrapperMain>
            
    )
}