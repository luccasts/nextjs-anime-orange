'use client';
import styles from "./page.module.scss"
import { motion } from 'framer-motion';
import React from 'react';
import getAnimes from 'services/getAnimes';
import CarouselLi from "./CarouselLi";



export default function Carousel() {
  const { data }: any = getAnimes()
  const carousel = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <motion.div ref={carousel} className={styles.container_carousel} dragConstraints={{ right: 0, left: -700 }} drag="x">
      <ul className={styles.container_carousel}>

        {data?.map((p: any) => (
          <CarouselLi key={p.id} data={p} />
        ))}

      </ul>
    </motion.div>
  );
}