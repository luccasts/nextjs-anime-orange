import IChildren from "../../../interfaces"
import styles from  './page.module.scss'


export function WrapperMain ({children}:IChildren ) {
    return (
        <main className={`${styles.Wrapper} ${styles.WrapperMain}`} >
            {children }
        </main>
    )
}