import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAPIAnimeCarousel } from '../../../interfaces'

export default function handlerAPI(
  _req: NextApiRequest,
  res: NextApiResponse<IAPIAnimeCarousel[] | undefined>
) {
  const animeContext = Api.find((a) => a.animeContext.find((a) => a))
  const anime = animeContext?.animeCarousel
  return res.status(200).json(anime)
}