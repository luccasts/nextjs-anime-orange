import { IAnimeSearchAPI} from "interfaces";

import useSWR from "swr";
import { getFetcher } from "common/getFetcher"
import { ResponseError } from "../interfaces"

export default function handleIDSearch(query: any) {
    const { data, error, isLoading } = useSWR<
    IAnimeSearchAPI, ResponseError>(() => (query.id ? `http://localhost:3000/api/eps/${query.id}` : null), getFetcher)
    
    return ({ data, error, isLoading })

}

