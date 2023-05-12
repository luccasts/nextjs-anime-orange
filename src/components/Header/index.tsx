import Link from "next/link"
import styles from "./page.module.scss"
export const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <nav className={styles.nav}>
                <h1>
                    <Link href={"/"}>Anime Brand</Link>
                </h1>
                    <div className={styles.input}>
                        <input placeholder="Pesquisar" type="search" name="" id="" />
                    </div>
                </nav> 
            </div>
        </header>
    )
}