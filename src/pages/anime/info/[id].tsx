import { useRouter } from "next/router"
import useSWR from 'swr'


import AnimeInfo from "./page"
import DashboardLayout from "./layout"
import handleQueryID from "services/handleQueryID"

export default function AnimeId ()  {
    const {query} = useRouter()
    const {data, error, isLoading} = handleQueryID(query)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    console.log(data)
    return (  
          <DashboardLayout  children={<AnimeInfo  data={data}/> } />     
    )
}