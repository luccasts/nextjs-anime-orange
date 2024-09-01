import { IApianimeContext, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";

export default function contextsHandler(
    req: NextApiRequest,
    res: NextApiResponse<IApianimeContext | ResponseError>
) {
    const { query } = req
    const { id }:any = query
    
    const animeContext = Api.find((a) => (a.animeContext))
    const anime = animeContext?.animeContext.find((a) => a.title.toLocaleLowerCase().indexOf(id.toLocaleLowerCase()) !== -1)

    return anime
        ? 
        res.status(200).json(anime)
        :
        res.status(500).json({ message: `context of this ${id} not found` })

}