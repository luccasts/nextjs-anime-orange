import { fetcher } from "components/home/Main";
import { IApianimeContext } from "interfaces";
import { ParsedUrlQuery } from "querystring";
import useSWR from "swr";
import { getFetcher } from "common/getFetcher"
import { ResponseError } from "../interfaces"

export default function handleSearch(query: any) {
    const { data, error, isLoading } = useSWR<
        IApianimeContext, ResponseError>(() => (query.id ? `http://localhost:3000/api/search/${query.id}` : null), getFetcher)
    
    return ({ data, error, isLoading })

}

