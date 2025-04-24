import { NextApiResponse, NextApiRequest } from "next";
import { Api } from "../../../../data";
import { IAnimeAPI, ResponseError } from "../../../interfaces";
interface AnimesI {
  id: string;
  title: string;
  eps: {
    id: string;
    ep: string;
    duration: string;
    url: string;
    img: string;
  }[];
  carousel: { img: string };
  details: {
    description: string;
    eps: string;
    category: { id: string; name: string }[];
  };
}
export default function handlerAnimeAPI(
  _req: NextApiRequest,
  res: NextApiResponse<AnimesI[] | undefined | ResponseError>
) {
  const animes = Api.find((a) => a.animes.find((a) => a))?.animes;
  return res.status(200).json(animes);
}
