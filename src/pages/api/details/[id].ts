import { IAPIAnimeDetais, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";

export default function contextsHandlerAPI(
    req: NextApiRequest,
    res: NextApiResponse<IAPIAnimeDetais | ResponseError>
) {
    const { query } = req
    const { id } = query
    const animeContext = Api.find((a) => (a.animeContext))
    const anime = animeContext?.animeDetails.find((a) => a.id === id)

    return anime
        ?
        res.status(200).json(anime)
        :
        res.status(500).json({ message: `Não possível encontrar esse contexto: ${id}` })

}