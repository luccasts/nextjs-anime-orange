import Image from 'next/image'
import styles from './page.module.scss'
import { Header } from 'components/Header'
import {Banner } from 'components/Carousel'

export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
    </>
  )
}
