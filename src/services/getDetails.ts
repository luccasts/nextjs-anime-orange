import useSWR from 'swr'

import {IAPIAnimeDetais, ResponseError} from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function getDetails(query:any){
    const {data, error, isLoading} =useSWR<
    IAPIAnimeDetais, ResponseError>(() => (`http://localhost:3000/api/details/${query.id}`), getFetcher)
    
  
    return ({data, error, isLoading})
  }