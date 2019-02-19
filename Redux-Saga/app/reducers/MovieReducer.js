import { ADD_MOVIE, FETCH_FAILED, FETCH_SUCCEEDED, FETCH_MOVIE } from "../actions/actionsType";

export const movieState  = (movie = [], action) => {
    switch (action.type) {
        case FETCH_SUCCEEDED:
            return action.receivedMovies;
        case FETCH_FAILED:
            return [];
        case ADD_MOVIE:
            return [
                ...movie,
                action.movie
            ]
        default:
            return movies;
    }
}
