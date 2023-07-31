'use client'; 
import useSWR from 'swr'
import {IApiAnimeCarousel} from 'interfaces'
import styles from "./page.module.scss"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import React from 'react';



const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Carousel() {
  const { data, error, isLoading } = useSWR<IApiAnimeCarousel[]>('/api/carousel', fetcher)
  const carousel = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (              
    <ul className={styles.container_carousel}>
      <motion.div ref={carousel} className={styles.container_carousel} dragConstraints={{ right: 0, left: -1500 }} drag="x">
      {data.map((p) => (
        <li className={styles.carousel_item}  key={p.id}>
          <img
            className={`${styles.container_carousel_image}${styles.carousel_showScreen}`}
            src={p.url}
            alt="imagem banner"
          />
        </li>
      ))}
      </motion.div>
    </ul>
  );
}