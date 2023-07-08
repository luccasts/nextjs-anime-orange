import Link from "next/link"
import styles from "./page.module.scss"
import { WrapperFooter } from "../Wrapper/wrapperFooter"

export const Footer = () => {
    
    return (
        <WrapperFooter>
            <h1>LOGO L</h1>
            <section className={styles.header}>
                <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={"/"}>Anime Brand</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Sobre</Link>
                    </li>

                    <li>
                        <Link href={"/"}>+Filmes</Link>
                    </li>
                </ul>
                </nav> 
            </section>

            <section>
                <h4>RedeSociais</h4>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/"}>Linkedin</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Github</Link>
                        </li>
                    </ul>
                </nav>
            </section>
        </WrapperFooter>
    )
}