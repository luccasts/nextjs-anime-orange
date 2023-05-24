import { IApianimeContext, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";

export default function contextsHandler (
    req:NextApiRequest,
    res: NextApiResponse<IApianimeContext | ResponseError>
){
    const {query} = req
    const {id} = query
    const animeC = Api.find((a) => (a.animeContext))
    const anime = animeC?.animeContext.find( (a) => a.id === id)

    return anime 
    ?
        res.status(200).json(anime)
    :
        res.status(500).json({message: `context of this ${id}not found`})

}