import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAnimeAPI, ResponseError } from '../../../interfaces'

export default function handlerAPICategoryAnime(
    req: NextApiRequest,
    res: NextApiResponse<any | undefined | ResponseError>
) {

    const { query } = req
    const { id } = query
    //?.animes.find((a) => a.details.category)
    const animeContext = Api.find((a) => a.animes)?.animes
    const category = animeContext?.filter((a) => a.details.category )
    //const anime = animeContext?.filter((a) => a.details.category.map((a) => a == 'Sexual'))

    return animeContext
        ?
        res.status(200).json(category?.filter((a) => a.details.category.find((a) => a.name == id)))
        :
        res.status(500).json({ message: `Não possível encontrar esse contexto: ${id} ${category}` })

}