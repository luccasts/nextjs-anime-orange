import { IAnimeAPI, IAnimeCarouselAPI, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";
interface IDAnimesI {
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

export default function handleIDAnimeAPI(
  req: NextApiRequest,
  res: NextApiResponse<IDAnimesI | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const animeContext = Api.find((a) => a.animes);
  const anime = animeContext?.animes.find((a) => a.id === id);
  if (anime) {
    return res.status(200).json(anime);
  }

  return res
    .status(500)
    .json({ message: `Não possível encontrar esse contexto: ${id}` });
}
