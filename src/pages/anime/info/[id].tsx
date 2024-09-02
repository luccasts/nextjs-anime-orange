import { useRouter } from "next/router"
import useSWR from 'swr'


import AnimeInfo from "./page"
import DashboardLayout from "./layout"

import getDetails from "services/getDetails"

export default function AnimeId ()  {
    const {query} = useRouter()
    const {data, error, isLoading} = getDetails(query)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    
    return (  
          <DashboardLayout  children={<AnimeInfo  data={data}/> } />     
    )
}