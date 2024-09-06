import { WrapperMain } from "components/_ui/Wrapper/wrapperMain"


import InfoEp from "../InfoEp"
import AnimeDetails from "../AnimeDetails"

interface IEps{
    ep:string,
    url:string,
    img:string
}

export const InfoAnime = ({ data }: any) => {
    console.log(data)
    const poster = data.carousel.img
    const category = data.details.category
    const img: any = data.eps.map((d: { img: any }) => d.img)
    const ep: any = data.eps.map((d: { ep: any }) => d.ep)
    const url: any = data.eps.map((d: { url: any }) => d.url)
    return (
        <WrapperMain>
                <AnimeDetails ep={ep} category={category} data={data} poster={poster} key={`${data.title}-details`} />
            <section>
                <ul>
                    {data?.eps.length > 1 ? data.eps.map((ep:IEps) =>
                        <InfoEp key={`${data.title}-${ep.ep}`} data={data} url={ep.url} ep={ep.ep} img={ep.img} id={data.id} />
                    )
                        :
                        <InfoEp key={`${data.title}-${ep}`} data={data} url={url} ep={ep} img={img} id={data.id} />
                    }
                </ul>
            </section>
        </WrapperMain>
    )
}