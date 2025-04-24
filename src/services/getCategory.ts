import useSWR from "swr";

import { IAnimeAPI, ResponseError } from "../interfaces";

import { getFetcher } from "common/getFetcher";

export default function getCategory() {
  const { data, error, isLoading } = useSWR<IAnimeAPI, ResponseError>(
    () => `https://animeorange.netlify.app/api/category`,
    getFetcher
  );
  return { data, error, isLoading };
}
