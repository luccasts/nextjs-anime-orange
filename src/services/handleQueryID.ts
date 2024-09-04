import useSWR from 'swr'

import {IAPIAnimeDetais, ResponseError} from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function handleQueryID(query:any){
    const {data, error, isLoading} =useSWR<
    IAPIAnimeDetais, ResponseError>(() => (query.id ? `http://localhost:3000/api/animes/${query.id}`: null), getFetcher)
    
  
    return ({data, error, isLoading})
  }