import IChildren from "../../../interfaces"
import styles from  './page.module.scss'


export function WrapperDiv ({children}:IChildren ) {
    return (
        <div className={styles.Wrapper} >
            {children }
        </div>
    )
}