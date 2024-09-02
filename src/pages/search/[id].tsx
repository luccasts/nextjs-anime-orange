import { useRouter } from "next/router"
import Page from "./page"
import handleSearch from "services/handleSearch"
export default function SearchId ()  {
    const { query } = useRouter()
    const { data, error, isLoading } = handleSearch(query)
    return (  
          <Page data={data} isLoading={isLoading} error={error}/>   
    )
}