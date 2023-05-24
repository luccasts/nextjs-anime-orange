import { useRouter } from "next/router"
import useSWR from 'swr'

import {IApianimeContext, ResponseError} from "../../interfaces"
import AnimePage from "./page"
import DashboardLayout from "./layout"




const fetcher = async (url:string ) => {
    const res = await fetch(url)
    const data = await res.json()
  
    
    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function AnimeId ()  {
    const {query} = useRouter()
    const {data, error, isLoading, isValidating} =useSWR<
    IApianimeContext, ResponseError>(() => (query.id ? `http://localhost:3000/api/animes/${query.id}`: null), fetcher)

    if (error) return <div>{error.message}</div>
    if(isLoading) return <div>Loading...</div>
    if (!data) return null
    
    return (  
          <DashboardLayout  children={<AnimePage  data={data}/> } />     
    )
}