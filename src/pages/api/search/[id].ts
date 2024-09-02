import { IAPIanimeContext, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";

export default function contextshandlerAPI(
    req: NextApiRequest,
    res: NextApiResponse<IAPIanimeContext | ResponseError>
) {
    const { query } = req
    const { id }:any = query
    
    const animeContext = Api.find((a) => (a.animeContext))
    const anime = animeContext?.animeContext.find((a) => a.title.toLocaleLowerCase().indexOf(id.toLocaleLowerCase()) !== -1)

    return anime
        ? 
        res.status(200).json(anime)
        :
        res.status(500).json({ message: `Não foi possível encontrar esse contexto: ${id} ` })

}