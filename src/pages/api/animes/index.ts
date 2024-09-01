import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IApianimeContext } from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IApianimeContext[] | undefined>
) {
  const animeContext = Api.find((a) => a.animeContext.find((a) => a))
  const anime = animeContext?.animeContext
  return res.status(200).json(anime)
}