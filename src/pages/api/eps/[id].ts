import { IAnimeAPI, IAnimeCarouselAPI, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";

export default function handleIDAnimeAPI(
    req: NextApiRequest,
    res: NextApiResponse<  IAnimeAPI | ResponseError>
) {
    const { query } = req
    const { id } = query
    const animeContext = Api.find((a) => (a.animes))
    const anime = animeContext?.animes.find((a) => a.eps.find((e) => e.id === id ))
    

    return anime?.eps.filter((e) => e.id === id)
        ?
        res.status(200).json(anime?.eps.filter((e) => e.id === id))
        :
        res.status(500).json({ message: `Não possível encontrar esse contexto: ${id}` })

}