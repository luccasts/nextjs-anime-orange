import Link from "next/link"
import styles from "./page.module.scss"

import { Search } from "./Search";
import Hamburger from "../Hamburger";

export const Header = () => {
    
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <nav className={styles.nav}>
                   
                <h1>
                    <Link href={"/"}>AnimeOrange</Link>
                </h1>
                    <Search />
                </nav> 
            </div>
        </header>
    )
}