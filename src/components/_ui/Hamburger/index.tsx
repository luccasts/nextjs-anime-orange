"use client"
import { useState } from 'react'
import styles from './page.module.scss'

export default function Hamburger() {

    const [none, setNone] = useState(true)


    return (
        <div className={styles.Hamburger}>
            <div className={`${styles.line_hamburger} ${styles.rotate}`}>

            </div>
            <div className={`${styles.line_hamburger} ${styles.rotateX}`}>

            </div>
            <div style={ none ? {display:'none'}:  {display:'block'}} className={`${styles.line_hamburger} ${styles.none}` }>

            </div>
        </div>

    )
}
