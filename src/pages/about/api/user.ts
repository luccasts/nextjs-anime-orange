import { NextApiRequest, NextApiResponse } from "next";

import {context} from '../../../../data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        res.status(200).json([
            {}
        ])
            
    }catch (err) {
        res.status(500).json({statusCode:500})
    }

}