"use client"
import { useState } from 'react'
import styles from './page.module.scss'
import getCategory from 'services/getCategory'
import Link from 'next/link'
import { Title } from '../Title'

export default function Hamburger() {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        console.log('teste')
        if (open) {
            return setOpen(false)
        }
        return setOpen(true)

    }

    return (
        <div className={open ? `${styles.Hamburger} ${styles.absolute}` : `${styles.Hamburger}`}>
            <div onClick={() => handleOpen()} className={styles.Hamburger__XorH}>
                <div className={open ? ` ${styles.line_hamburger} ${styles.rotate}` : `${styles.line_hamburger} `}>

                </div>
                <div className={open ? `${styles.line_hamburger} ${styles.rotateX}` : `${styles.line_hamburger} `}>

                </div>
                <div style={open ? { display: 'none' } : { display: 'block' }} className={`${styles.line_hamburger}`}>

                </div>

            </div>
            {open ? <nav className={styles.Hamburger__Nav}>
                <Link href={"/"}>
                        <h2 className={`defaultTitle` }>AnimeOrange</h2>
                </Link>
                <h3>Todos os Animes</h3>
                <hr></hr>
                <h3>Categoria</h3>
                <ul>
                    <li>
                        <Link as={'/category/fantasia'} href={'/category/fantasia'}>
                            Fantasia
                        </Link>
                    </li>
                    <li>
                        <Link href={'/category/aventura'}>
                            Aventura
                        </Link>
                    </li>
                    <li>
                        <Link href={'/category/acao'}>
                            Ação
                        </Link>
                    </li>
                    <li>
                        <Link href={'/category/comedia'}>
                            Comédia
                        </Link>

                    </li>
                    <li>
                        <Link href={'/category/romance'}>
                            Romance
                        </Link>
                    </li>
                    <li>
                        <Link href={'/category/sobrenatural'}>
                            Sobrenatural
                        </Link>
                    </li>

                    <li>
                        <Link href={'/category/suspense'}>
                            Suspense
                        </Link>
                    </li>
                    <li>
                        <Link href={'/category/drama'}>
                            Drama
                        </Link>
                    </li>

                    <li> <Link href={'/category/violencia'}>
                        Violência
                    </Link>
                    </li>
                </ul>
            </nav> : null}
        </div>
    )
}
