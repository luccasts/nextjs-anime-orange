import useSWR from "swr";

export default function handleSWR() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { error, isLoading } = useSWR(
        "/api/animes",
        fetcher
      );
    
}