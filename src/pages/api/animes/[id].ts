import { IContext, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api} from "../../../../data";

export default function contextsHandler (
    req:NextApiRequest,
    res: NextApiResponse
){
    const {query} = req
    const {id} = query
    const apiAnimeContext = Api.find((c) => c?.animeContext)
    const animeContext = apiAnimeContext?.animeContext.find((c) => c.id === id)

    return animeContext 
    ?
        res.status(200).json(animeContext)
    :
        res.status(500).json({message: `context of this ${id}not found`})

}