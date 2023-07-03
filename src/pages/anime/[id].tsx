import { useRouter } from "next/router"
import useSWR from 'swr'

import {IApianimeContext, ResponseError} from "../../interfaces"
import Page from "./page"
import DashboardLayout from "./layout"
import { getFetcher } from "common/getFetcher"
import getAnimes from "services/getAnime"

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