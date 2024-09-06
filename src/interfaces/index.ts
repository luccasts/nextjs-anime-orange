export interface IAnimeCarouselAPI {
        animes: {
                id: string;
                title: string;
                eps: {
                        ep: string;
                        duration: string;
                        url: string;
                        img: string;
                }[];
                carousel: {
                        url: string;
                        img: string;
                };
                details: {
                        description: string;
                        eps: string;
                        category: string[];
                };
        }[];

}
export interface IAnimeAPI {
        id: string; 
        title: string; 
        eps: { ep: string; duration: string; url: string; img: string; }[];
        carousel: { url: string; img: string; };
        details: { description: string; eps: string; category: string[]; };
}

export interface IAnimeSearchAPI{
        animes: {
                id: string;
                title: string;
                eps: {
                    ep: string;
                    duration: string;
                    url: string;
                    img: string;
                }[];
                carousel: {
                    url: string;
                    img: string;
                };
                details: {
                    description: string;
                    eps: string;
                    category: string[];
                };
            }[];
}

export interface ApiProps {
        apiAnime: {
            map: any;
            id:string,
            title:string,
            carousel:{
                url:string,
                img:string,
            },
            details:{
                description:string,
                img:string,
            },
            eps: [
                {id:string, ep:string, duration:string, url:string}
            ],
    
        };
    
}


export interface ResponseError {
        message: string
}

export default interface IChildren {
        children: JSX.Element[] | JSX.Element;
}