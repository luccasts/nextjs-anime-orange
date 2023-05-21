'use client'; 
import useSWR from 'swr'
import {IApianimeContext} from 'interfaces'
import AnimeContext from 'components/AnimeContext/AnimeContext'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function AnimePage() {
  const { data, error, isLoading } = useSWR<IApianimeContext[]>('/api/animes', fetcher)

  if (error) return <div>Failed to load1</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (
    <ul>
      {data.map((p) => (
        <AnimeContext key={p.id} apiAnime={p} />
      ))}
    </ul>
  )
}