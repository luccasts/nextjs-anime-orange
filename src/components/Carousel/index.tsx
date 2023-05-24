'use client'; 
import useSWR from 'swr'
import {IApiAnimeCarousel} from 'interfaces'
import styles from "./page.module.scss"

import Image from "next/image"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Carousel() {
  const { data, error, isLoading } = useSWR<IApiAnimeCarousel[]>('/api/carousel', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (              
    <div className={styles.container_carousel_item}>
      {data.map((p) => (
          <Image
            className={`${styles.container_carousel_image}${styles.carousel_showScreen}`}
            src={p.url}
            alt="aside"
            width={230}
            height={230}
            key={p.id}
          />
      ))}
    </div>
  );
}