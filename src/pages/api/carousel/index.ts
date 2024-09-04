import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IAnimeCarouselAPI } from '../../../interfaces'

export default function handlerCarouselAPI(
  _req: NextApiRequest,
  res: NextApiResponse<IAnimeCarouselAPI[] | undefined>
) {
  // const animeContext = Api.find((a) => a.animeContext.find((a) => a))
  const carousel = Api.filter((a) => a.animes.filter((a) => a.carousel))
  const anime = carousel.filter((a) => a.animes.map((a) => a.carousel ))
  console.log(anime)
  return res.status(200).json(carousel)
}