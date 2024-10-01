import useSWR from 'swr'

import { IAnimeSearchAPI, ResponseError } from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function handleCategorySearch(query: any) {
  const { data, error, isLoading } = useSWR<
    IAnimeSearchAPI, ResponseError>(() => (query.id ? `http://localhost:3000/api/category/${query.id}` : null), getFetcher)


  return ({ data, error, isLoading })
}