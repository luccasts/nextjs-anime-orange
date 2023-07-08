import IChildren from "../../../interfaces"
import styles from  './page.module.scss'


export function WrapperNav ({children}:IChildren ) {
    return (
        <nav className={styles.Wrapper} >
            {children }
        </nav>
    )
}