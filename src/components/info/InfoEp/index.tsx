import { dealReplacement } from "common/dealReplacement";
import Link from "next/link";

interface IEps {
    data: any;
    ep: string;
    url: string;
    img: string;
    id:string
}


export default function InfoEp({data, ep, url, img, id }: IEps) {

    let title:string = data.title.replaceAll(" ", "-").toLocaleLowerCase()
    const replace = dealReplacement(title)

    
    return (
        <li>
            <Link href={`http://localhost:3000/watch/${replace}-episodio-${ep}`}>              
                    <img src={img} />
                    <h3>{data.title} {ep}</h3>
            </Link>
        </li>
    )
}