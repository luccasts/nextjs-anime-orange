
import styles from './page.module.scss'
import { Header } from 'components/Header'
import {Banner } from 'components/Carousel'
import { Card } from 'components/Card'



export default function Home() {
  return (
    <>
      <Header />
      <Banner/>
      <Card />
      

    </>
  )
}
