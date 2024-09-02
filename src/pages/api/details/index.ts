import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAPIAnimeDetais } from '../../../interfaces'

export default function handlerAPIApi(
  _req: NextApiRequest,
  res: NextApiResponse<IAPIAnimeDetais[] | undefined>
) {
  const animeContext = Api.find((a) => a.animeContext.find((a) => a))
  const anime = animeContext?.animeDetails
  return res.status(200).json(anime)
}