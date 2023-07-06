import IChildren from "../../../interfaces"
import styles from  './page.module.scss'


export function Wrapper ({children}:IChildren ) {
    return (
        <div className={styles.Wrapper} >
            {children }
        </div>
    )
}