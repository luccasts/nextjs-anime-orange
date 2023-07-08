import IChildren from "../../../interfaces"
import styles from  './page.module.scss'


export function WrapperSection ({children}:IChildren ) {
    return (
        <section className={styles.Wrapper} >
            {children }
        </section>
    )
}