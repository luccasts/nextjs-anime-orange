import { IAnimeSearchAPI, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";

export default function contextshandlerAPI(
    req: NextApiRequest,
    res: NextApiResponse<IAnimeSearchAPI[] | ResponseError>
) {
    const { query } = req
    const { id }: any = query
    const anime: any = Api.map((a) => a.animes.filter((a) => a.title.toLocaleLowerCase().indexOf(id.toLocaleLowerCase()) !== -1))

    // const anime = animeContext?.find((a) => a.title.toLocaleLowerCase().indexOf(id.toLocaleLowerCase()) !== -1)

    return anime
        ?
        res.status(200).json(anime)
        :
        res.status(500).json({ message: `Não foi possível encontrar esse contexto: ${id} ` })

}