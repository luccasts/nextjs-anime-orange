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
    <ul className={styles.container_carousel}>
      {data.map((p) => (
        <li className={styles.carousel_item}  key={p.id}>
          <img
            className={`${styles.container_carousel_image}${styles.carousel_showScreen}`}
            src={p.url}
            alt="imagem banner"
          />
        </li>
      ))}
      
    </ul>
  );
}