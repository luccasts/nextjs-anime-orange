'use client'; 

import {IAnimeAPI} from 'interfaces'
import styles from "./page.module.scss"
import { motion } from 'framer-motion';
import React from 'react';
import Link from 'next/link';
import getAnimes from 'services/getAnimes';


export default function Carousel() {
  const { data, error, isLoading } = getAnimes()
  const carousel = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading...</div>
  if (!data) return null

  return (              
    <ul className={styles.container_carousel}>
      <motion.div ref={carousel} className={styles.container_carousel} dragConstraints={{ right: 0, left: -1500 }} drag="x">
        {data.map((p) => (
          <li className={styles.carousel_item}  key={p.id}>
            <Link href={p.carousel.url} className={styles.container_link}>
              <img
                className={`${styles.container_carousel_image}${styles.carousel_showScreen}`}
                src={p.carousel.img}
                alt="imagem banner"
              />
            </Link>
          </li>
          ))}
      </motion.div>
    </ul>
  );
}