import Link from "next/link"
import styles from "./page.module.scss"

import { Search } from "./Search";

export const Header = () => {
    
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <nav className={styles.nav}>
                <h1>
                    <Link href={"/"}>Anime Brand</Link>
                </h1>
                    <Search />
                </nav> 
            </div>
        </header>
    )
}