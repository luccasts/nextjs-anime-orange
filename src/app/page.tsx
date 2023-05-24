
"use client"
import styles from './page.module.scss'
import { Header } from 'components/Header'
import { CardList } from 'components/CardList'  
import { CarouselContent } from 'components/CarouselContent'

import useSWR from "swr";

const fetcher = (url:string) => fetch(url).then((res) => res.json());



export default function Home() {
  const { data, error, isLoading } = useSWR(
    "/api/animes",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return (<div className={styles.loading}> <img  src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" /></div>);
  return (
    <>
      <Header />
      <CarouselContent/>
      <CardList />
    </>
  )
}
