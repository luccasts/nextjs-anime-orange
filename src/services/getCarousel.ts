import useSWR from 'swr'

import {IAPIAnimeCarousel, ResponseError} from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function getCarousel(){
    const {data, error, isLoading} =useSWR<
    IAPIAnimeCarousel, ResponseError>(() => (`http://localhost:3000/api/carousel/`), getFetcher)
    
  
    return ({data, error, isLoading})
  }