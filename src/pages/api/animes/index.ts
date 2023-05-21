import { NextApiResponse, NextApiRequest } from 'next'
import { animeContext } from '../../../../data'
import { IApianimeContext} from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IApianimeContext[]>
) {
  return res.status(200).json(animeContext)
}