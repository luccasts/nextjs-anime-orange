"use client"
import Link from "next/link"
import styles from "./page.module.scss"

import { Search } from "./Search";
import Hamburger from "../Hamburger";
import { useState } from "react";

export const Header = () => {
    const [isInput, setIsInput] = useState<Boolean>()
    return (
        
        <header className={styles.container}>
            <div className={styles.header}>
                <nav className={isInput ?` ${styles.nav} ${styles.none}` : `${styles.nav}`}>
                   
                        <Hamburger />

                        <Link href={"/"}>
                            <h1>
                                AnimeOrange
                            </h1>
                        </Link>
                    
                    <Search input={isInput} setInput={setIsInput} />
                </nav>
            </div>
        </header>
    )
}