import { useRouter } from "next/router"
import {IContext, ResponseError} from "../../interfaces"
import useSWR from 'swr'
import { Wrapper } from "components/Wrapper"


const fetcher = async (url:string ) => {
    const res = await fetch(url)
    const data = await res.json()
  
    
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function AnimePage () {
    const {query} = useRouter()
    const {data, error, isLoading, isValidating} = useSWR<IContext, ResponseError> (() => query.id ? `api/animes/${query.animeContext}`: null, fetcher)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null

    return (  
        <Wrapper>
            <h1>teste</h1>
        </Wrapper>
    )
}