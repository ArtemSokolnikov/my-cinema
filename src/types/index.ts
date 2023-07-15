export interface Action {
    type: string;
    payload: any;
}

export interface State {
    movies: Array<Movie>;
    genres: Array<Genre>;
    movie?: Movie;
    tickets?: Array<Movie>;
    favourites?:Array<Movie>;
}

export interface PropsDetails {
    movie: Movie;
    genres: Array<Genre>;
}

export interface PropsMovieCard {
    movie: Movie
}

export interface PropsBuyCard {
    ticket: DetailsBuy
}


export interface PropsFavouritesCard {
    favourite: Favourites
}

export interface DetailsMovie {
    title: string|undefined;
    release_date?: string;
    genre_ids?: Array<number>;
    backdrop_path?: string;
    overview?: string;
    id?: number;
}

export interface DetailsFavourites{
    title: string|undefined;
    backdrop_path?: string;
    id?: number;
}

export interface Movie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: Array<number>;
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    likes?: boolean;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Genres {
    genres: Array<Genre>;
}

export interface PropsItem {
    movie: Movie;
    image: string;
    genres: Array<string>;
}

export interface DetailsBuy {
    title?: string;
    date?: string;
    id?: number;
}

export interface Favourites {
    title?: string;
    backdrop_path?: string;
    id?: number;
}





export type Dispatch = (action: Action) => void;