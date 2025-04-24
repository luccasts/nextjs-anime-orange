import useSWR from "swr";

import { IAnimeAPI, ResponseError } from "../interfaces";

import { getFetcher } from "common/getFetcher";

export default function getAnimes() {
  const { data, error, isLoading } = useSWR<IAnimeAPI, ResponseError>(
    () => `https://animeorange.netlify.app/api/animes`,
    getFetcher
  );
  console.log(data);
  return { data, error, isLoading };
}
