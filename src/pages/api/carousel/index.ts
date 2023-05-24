import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IApiAnimeCarousel} from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse< IApiAnimeCarousel[] | undefined  >
) {
  const animeContext = Api.find((a) => a.animeContext.find((a) => a))
  const anime = animeContext?.animeCarousel
  return res.status(200).json(anime)
}