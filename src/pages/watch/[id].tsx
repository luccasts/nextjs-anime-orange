import { useRouter } from "next/router"
import Page from "./page"
import getEp from "services/getEp"

export default function AnimeId ()  {
    const {query} = useRouter()
    const {data, error, isLoading } = getEp(query)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    
    return (  
          <Page  data={data}/>   
    )
}