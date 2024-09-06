import { useRouter } from "next/router"
import AnimeInfo from "./page"

import handleIDSearch from "services/handleIDSearch"


export default function AnimeId ()  {
    const {query} = useRouter()
    const {data, error, isLoading} = handleIDSearch(query)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null

    return (  
          <AnimeInfo  data={data} />     
    )
}