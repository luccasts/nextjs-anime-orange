import Link from "next/link";

interface IEps {
    ep: string;
    url: string;
    img: string;
    id:string
}


export default function Teste({ ep, url, img, id }: IEps) {

    return (
        <li>
            <Link href={`http://localhost:3000/anime/${id}`}>
                <div>
                    <h3>{ep}</h3>
                    <p>{url}</p>
                    <img src={img} />
                </div>
            </Link>

        </li>
    )
}