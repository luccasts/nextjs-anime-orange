import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAnimeAPI, ResponseError } from '../../../interfaces'

export default function handlerAPICategoryAnime(
    _req: NextApiRequest,
    res: NextApiResponse<IAnimeAPI[] | undefined | ResponseError>
) {
    const category = Api.find((c) => c.category)?.category
    return res.status(200).json(category)

}