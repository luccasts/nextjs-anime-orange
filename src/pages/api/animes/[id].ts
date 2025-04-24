import { IAnimeAPI, IAnimeCarouselAPI, ResponseError } from "interfaces";
import { NextApiRequest, NextApiResponse } from "next";
import { Api } from "../../../../data";
interface animeI {
  anime:
    | {
        id: string;
        title: string;
        eps: {
          id: string;
          ep: string;
          duration: string;
          url: string;
          img: string;
          date: string;
        }[];
        carousel: { img: string };
        details: {
          description: string;
          eps: string;
          category: { id: string; name: string }[];
        };
      }
    | ResponseError;
}
export default function handleIDAnimeAPI(
  req: NextApiRequest,
  res: NextApiResponse<IAnimeAPI | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const animeContext = Api.find((a) => a.animes);

  const anime: animeI = animeContext?.animes.find((a) => a.id === id);

  return anime
    ? res.status(200).json(anime)
    : res
        .status(500)
        .json({ message: `Não possível encontrar esse contexto: ${id}` });
}
