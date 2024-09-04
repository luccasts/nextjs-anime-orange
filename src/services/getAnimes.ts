import useSWR from 'swr'

import {IAPIAnimeCarousel, ResponseError} from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function getAnimes( ){    
      const {data, error, isLoading} =useSWR<
      IAPIAnimeCarousel, ResponseError>(() => (`http://localhost:3000/api/animes`), getFetcher)
      return ({data, error, isLoading})       

    }