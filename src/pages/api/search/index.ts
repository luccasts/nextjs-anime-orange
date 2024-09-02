import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAPIanimeContext } from '../../../interfaces'

export default function handlerAPI(
    _req: NextApiRequest,
    res: NextApiResponse<IAPIanimeContext[] | undefined>
) {
    const animeContext = Api.find((a) => a.animeContext.find((a) => a))
    const anime = animeContext?.animeContext
    return res.status(200).json(anime)
}