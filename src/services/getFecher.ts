import useSWR from 'swr'

import { IApianimeContext, ResponseError } from "../interfaces"

import { getFetcher } from "common/getFetcher"

export default function getAnimes(query: any) {
  const { data, error, isLoading } = useSWR<
    IApianimeContext, ResponseError>(() => (query.id ? `http://localhost:3000/api/animes/${query.id}` : null), getFetcher)

  return ({ data, error, isLoading })

}

