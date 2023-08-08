"use client"
import { Footer } from 'components/_ui/Footer'
import styles from './page.module.scss'
import { Header } from 'components/_ui/Navbar'
import { Main} from 'components/home/Main'  
import { SectionCarousel } from 'components/home/SectionCarousel'

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
      <SectionCarousel/>
      <Main />
      <Footer />
    </>
  )
}
