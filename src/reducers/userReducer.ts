import {
    APPEND_TICKETS,
    CHANGE_MOVIES,
    REMOVE_TICKETS,
    SET_FAVOURITES,
    SET_GENRES,
    SET_MOVIE
} from "../actions/userActions";
import { Action, State } from "../types";


const initialState: State = {
    movies: JSON.parse(localStorage.getItem('movies') as string),
    genres: JSON.parse(localStorage.getItem('genres') as string),
    movie: JSON.parse(localStorage.getItem('movie') as string),
    tickets: JSON.parse(localStorage.getItem('tickets') as string),
    favourites: JSON.parse(localStorage.getItem('favourites') as string)
};

export const userReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case SET_MOVIE:
            return { ...state, movie: action.payload }
        case CHANGE_MOVIES:
            return { ...state, movies: action.payload }
        case SET_GENRES:
            return { ...state, genres: action.payload }
        case APPEND_TICKETS:
            return { ...state, tickets: action.payload }
        case SET_FAVOURITES:
            return { ...state, favourites: action.payload }
        case REMOVE_TICKETS:
            return { ...state, tickets: action.payload }
        default:
            return state;
    }
}