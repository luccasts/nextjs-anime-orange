import { useRouter } from "next/router"
import Page from "./page"
import DashboardLayout from "./layout"
import getAnimes from "services/getFecher"
export default function AnimeId ()  {
    const {query} = useRouter()
    const {data, error, isLoading } = getAnimes(query)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    
    return (  
          <DashboardLayout  children={<Page  data={data}/> } />   
    )
}