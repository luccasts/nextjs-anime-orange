import useSWR from 'swr'

import {IApiAnimeCarousel, ResponseError} from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function getCarousel(){
    const {data, error, isLoading} =useSWR<
    IApiAnimeCarousel, ResponseError>(() => (`http://localhost:3000/api/carousel/`), getFetcher)
    
  
    return ({data, error, isLoading})
  }