import IChildren from "./type"
import styles from  './page.module.scss'


export function Wrapper ({children}:IChildren ) {
    return (
        <div className={styles.Wrapper} >
            {children}
        </div>
    )
}