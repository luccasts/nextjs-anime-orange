import { useRouter } from "next/router"
import Page from "./page"
import handleIDSearch from "services/handleIDSearch"
import handleTitleSearch from "services/handleTitleSearch"
export default function SearchId ()  {
    const { query } = useRouter()
    const { data, error, isLoading } = handleTitleSearch(query)
    console.log(data)
    return (  
          <Page data={data} isLoading={isLoading} error={error}/>   
    )
}