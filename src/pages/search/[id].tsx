import { useRouter } from "next/router"
import Page from "./page"

import handleTitleSearch from "services/handleTitleSearch"
export default function SearchId ()  {
    const { query } = useRouter()
    const { data, error, isLoading } = handleTitleSearch(query)
    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    return (  
          <Page data={data} isLoading={isLoading} error={error}/>   
    )
}