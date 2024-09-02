export interface IAPIanimeContext {
        id: string;
        title: string;
        subtitle: string;
        duration: string;
        eps: string;
        img: string;
        url: string;


}

export interface IAPIAnimeCarousel {
        "id": string;
        "img": string;
        "url": string;
}[];
export interface IAPIAnimeDetais {
        "id": string;
        "img": string;
        "url": string;
        "description" : string;
        "title": string;
        "eps":string;
}[];



// export interface IAPIanimeContext  {
//     animeContext: { 
//         id: string;
//         title: string;
//         subtitle: string;
//         duration: string;
//         img: string;}[]; 
//     animeList: { "id": string; }[];
//     animeCarousel: { 
//         "id": string; 
//         "url": string; }[]; 
// }

export interface ResponseError {
        message: string
}

export default interface IChildren {
        children: JSX.Element[] | JSX.Element;
}