import { useRouter } from "next/router"
import Page from "./page"
import handleSearch from "services/handleSearch"
import handleQueryID from "services/handleQueryID"
export default function SearchId ()  {
    const { query } = useRouter()
    const { data, error, isLoading } = handleQueryID(query)
    return (  
          <Page data={data} isLoading={isLoading} error={error}/>   
    )
}