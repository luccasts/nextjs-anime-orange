import { useRouter } from "next/router"
import Page from "./page"
import handleCategorySearch from "services/handleCategorySearch"
export default function CategoryName ()  {
    const { query } = useRouter()
    const { data, error, isLoading } = handleCategorySearch(query)
    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    return (  
          <Page data={data} isLoading={isLoading} error={error}/>   
    )
}