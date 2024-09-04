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

export interface IAnimeAPIOLD {
        id: string;
        title: string;
        eps: [{
                img: any;
                ep: any;
                forEach: any;
                map(arg0: (d: any) => any): unknown;
                "1": {
                        duration: string;
                        url: string;
                        img: string;
                };
                "11"?: undefined;
                "3"?: undefined;
                "5"?: undefined;
        }];
        carousel: {
                url: string;
                img: string;
        };
        details: {
                description: string;
                eps: string;
                category: string[];
        };
}



export interface ResponseError {
        message: string
}

export default interface IChildren {
        children: JSX.Element[] | JSX.Element;
}