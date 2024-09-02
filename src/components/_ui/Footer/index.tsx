import Link from "next/link"
import styles from "./page.module.scss"
import { WrapperFooter } from "../Wrapper/wrapperFooter"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    
    return (
        <WrapperFooter>
            <div className={styles.FooterBackground}>

                                
                    


                <section className={styles.FooterSection}>
                    <nav className={styles.FooterNav}>
                        <div className={styles.FooterLink}>
                            <h4>
                                <Link href={"/"}>
                                    Anime Brand
                                </Link>
                            </h4> 
                        </div>
                        <ul className={` ${styles.FooterUl} ${styles.FooterUlLeft} ${styles.FooterLink}`}>
                            <li>

                            </li>
                            <li>
                                <Link href={"/animes"}>Animes</Link>
                            </li>

                            
                        </ul>
                    </nav> 
                </section>

                <section className={styles.FooterSection}>
                    <h4>Rede Sociais</h4>
                    <nav>
                        <ul className={` ${styles.FooterUl} ${styles.FooterLink}`}>
                            <li>
                                <a target="_blank" href={"https://www.linkedin.com/in/lucastsilva-dev/"}>< FaLinkedinIn/> Linkedin </a>
                            </li>
                            <li>
                                <a target="_blank" href={"https://github.com/luccasts"}><FaGithub />Github</a>
                            </li>
                        </ul>
                    </nav>
                </section>
            </div>
        </WrapperFooter>
    )
}