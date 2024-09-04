import useSWR from 'swr'

import { IAnimeSearchAPI, ResponseError } from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function handleTitleSearch(query: any) {
  const { data, error, isLoading } = useSWR<
    IAnimeSearchAPI, ResponseError>(() => (query.id ? `http://localhost:3000/api/search/${query.id}` : null), getFetcher)


  return ({ data, error, isLoading })
}