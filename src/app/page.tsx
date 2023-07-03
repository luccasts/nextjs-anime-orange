"use client"
import styles from './page.module.scss'
import { Header } from 'components/_ui/Navbar'
import { CardList } from 'components/home/CardList'  
import { CarouselContent } from 'components/home/CarouselContent'

import useSWR from "swr";

const fetcher = (url:string) => fetch(url).then((res) => res.json());



export default function Home() {
  const {error, isLoading } = useSWR(
    "/api/animes",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return (<div className={styles.loading}> <img  src="http://localhost:3000/favicon.ico" alt="" /></div>);
  return (
    <>
      <Header />
      <CarouselContent/>
      <CardList />
    </>
  )
}
