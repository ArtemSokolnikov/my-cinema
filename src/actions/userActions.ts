import { Action, DetailsBuy, DetailsMovie, Dispatch, Genre, Movie } from "../types";
import { api_key3, base_url } from '../utils/constants';

export const SET_MOVIE = 'SET_MOVIE';
export const CHANGE_MOVIES = 'CHANGE_MOVIES';
export const SET_GENRES = 'SET_GENRES';
export const APPEND_TICKETS = 'APPEND_TICKETS';
export const SET_FAVOURITES = 'SET_FAVOURITES';
export const REMOVE_TICKETS = 'REMOVE_TICKETS';


export const changeMovies = (movies: Array<Movie>): Action => ({
    type: CHANGE_MOVIES,
    payload: movies
})

export const appendTickets = (tickets: Array<Movie>): Action => ({
    type: APPEND_TICKETS,
    payload: tickets
})

export const setFavourites = (movies: Array<Movie>): Action => ({
    type: SET_FAVOURITES,
    payload: movies
})

export const setGenres = (genres: Array<Genre>): Action => ({
    type: SET_GENRES,
    payload: genres
})

export const setMovie = (movie: Movie): Action => ({
    type: SET_MOVIE,
    payload: movie
})

export const removeTickets = (): Action => ({
    type: REMOVE_TICKETS,
    payload: []
})

export const changeMovie = (movie: Movie) => {
    return (dispatch: Dispatch) => {
        dispatch(setMovie(movie));
        localStorage.setItem('movie', JSON.stringify(movie));
    }
}


export const fetchMovies = () => {
    return (dispatch: Dispatch) => {
        fetch(`${base_url}movie/top_rated?api_key=${api_key3}&language=en-US&page=1`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Unknown error");
            })
            .then(data => {
                dispatch(changeMovies(data.results));
                localStorage.setItem('movies', JSON.stringify(data.results));
            })
            .catch(e => console.log(e));
    }
}

export const fetchGenre = () => {
    return (dispatch: Dispatch) => {
        fetch(`${base_url}genre/movie/list?api_key=${api_key3}&language=en-US`)
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Unknown error");
            })
            .then(data => {
                dispatch(setGenres(data.genres));
                localStorage.setItem('genres', JSON.stringify(data.genres));
            })
            .catch(e => console.log(e));
    }
}

const checkId = (arrMovies: Array<Movie>, id: number): boolean => {
    const flag = false;
    for (let i = 0; i < arrMovies.length; i++) {
        if (arrMovies[i].id === id) {
            return !flag;
        }
    }
    return flag;
}

// export const appendMovie = (movie: DetailsMovie) => {
//     return (dispatch: Dispatch) => {
//         const movies = JSON.parse(localStorage.getItem('movies') as string);
//         // generating a random id
//         const random = () => Math.floor(Math.random() * 10000);
//         let id = random();
//         while (checkId(movies, id)) {
//             id = random();
//         }
//         // generating a random id
//         movie.id = id;
//         movies.push(movie);
//         dispatch(changeMovies(movies));
//         localStorage.setItem('movies', JSON.stringify(movies));
//     }
// }

export const buyTickets = (movie: DetailsBuy) => {
    return (dispatch: Dispatch) => {
        const tickets = JSON.parse(localStorage.getItem('tickets') as string);
        const random = () => Math.floor(Math.random() * 10000);
        let id = random();
        while (checkId(tickets, id)) {
            id = random();
        }
        movie.id = id;
        tickets.push(movie);
        dispatch(appendTickets(tickets));
        localStorage.setItem('tickets', JSON.stringify(tickets));
    }
}

export const addFavourites = (movie: Movie) => {
    return (dispatch: Dispatch) => {
        const favourites = JSON.parse(localStorage.getItem('favourites') as string);
        const random = () => Math.floor(Math.random() * 10000);
        let id = random();
        while (checkId(favourites, id)) {
            id = random();
        }
        movie.id = id;
        if (favourites.length !== 0) {
            for (let i = 0; i < favourites.length; i++) {
                if (favourites[i].title !== movie.title && i === favourites.length - 1) {
                    favourites.push(movie);
                }
            }
        } else {
            favourites.push(movie);
        }
        dispatch(setFavourites(favourites));
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }
}

export const removeFavourites = (movie: Movie) => { 
    return (dispatch: Dispatch) => {
        const favourites = JSON.parse(localStorage.getItem('favourites') as string);
        if (favourites.length !== 0) {
            for (let i = 0; i < favourites.length; i++) {
                if (favourites[i].title === movie.title) {
                    let myIndex = favourites.indexOf(favourites[i]);                    
                    if (myIndex !== -1) {
                        favourites.splice(myIndex, 1);
                    }
                }
            }
        }
        dispatch(setFavourites(favourites));
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }
}
export const cleanAllTickets = () => {
    return (dispatch: Dispatch) => {
        dispatch(removeTickets());
    }
}

export const setLike = (title: string, value: boolean) => {
    return (dispatch: Dispatch) => {
        const movies = JSON.parse(localStorage.getItem('movies') as string);
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].title === title) {
                movies[i].likes = value;
            }
        }
        dispatch(changeMovies(movies));
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

