import { NextApiResponse, NextApiRequest } from 'next'
import { Api } from '../../../../data'
import { IContext } from '../../../interfaces'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<IContext[]>
) {
  return res.status(200).json(Api)
}