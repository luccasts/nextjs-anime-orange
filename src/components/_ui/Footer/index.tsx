import Link from "next/link"
import styles from "./page.module.scss"
import { WrapperFooter } from "../Wrapper/wrapperFooter"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {

    return (
        <WrapperFooter>
            <section className={styles.Footer}>
                <div className={styles.Footer__Div}>
                    <nav>
                        <Link href={"/"}>
                            <h4>

                                Anime Orange

                            </h4>
                        </Link>
                        {/* <ul className={` ${styles.FooterUl} ${styles.FooterUlLeft} ${styles.Footer__Nav__Link}`}>
                                <li>Categorias</li>
                                <li><Link href={"/animes"}>Animes</Link> </li> 
                            </ul> */}
                    </nav>

                    <div className={styles.Footer__Div__SocialMedia}>
                        <h4>Rede Sociais</h4>
                        <nav>
                            <ul className={`${styles.FooterUl} ${styles.FooterLink}`}>
                                <li>
                                    <a target="_blank" href={"https://www.linkedin.com/in/lucastsilva-dev/"}>< FaLinkedinIn /> Linkedin </a>
                                </li>
                                <li>
                                    <a target="_blank" href={"https://github.com/luccasts"}><FaGithub />Github</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className={styles.Footer__Direitos}>
                    ©  Direitos Reservados luccasts
                </div>
            </section>
        </WrapperFooter>
    )
}