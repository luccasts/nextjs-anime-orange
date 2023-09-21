'use client'; 
import useSWR from 'swr'
import {IApiAnimeCarousel} from 'interfaces'
import styles from "./page.module.scss"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import Link from 'next/link';



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
            <Link href={p.url} className={styles.container_link}>
              <img
                className={`${styles.container_carousel_image}${styles.carousel_showScreen}`}
                src={p.img}
                alt="imagem banner"
              />
            </Link>
          </li>
          ))}
      </motion.div>
    </ul>
  );
}