import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAnimeAPI, ResponseError } from '../../../interfaces'

export default function handlerAnimeAPI(
  _req: NextApiRequest,
  res: NextApiResponse<IAnimeAPI[] | undefined | ResponseError>
) {
  const animes = Api.find((a) => a.animes.find((a) => a))?.animes
  return res.status(200).json(animes)

}