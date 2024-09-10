import { handleLink } from "common/handleLink";
import Link from "next/link";
import styles from './page.module.scss'
interface IEps {
    data: any;
    ep: string;
    url: string;
    img: string;
    id:string
}


export default function InfoEp({data, ep, url, img, id }: IEps) {
    const link = handleLink(data.title, ep)
    
    return (
        <li className={styles.li}>
            <Link href={link}>              
                    <img src={img} />
                    <h3>{data.title} {ep}</h3>
            </Link>
        </li>
    )
}