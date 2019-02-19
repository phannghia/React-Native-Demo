import{FETCH_MOVIE,FETCH_FAILED,FETCH_SUCCEEDED,ADD_MOVIE} from './actionsType'

export const fetchMovieAction=(sort)=>{
    return{
        type:FETCH_MOVIE,
        sort
    }
}
export const addMovieAction=(newMovie)=>{
    return{
        
        type:ADD_MOVIE,
        newMovie
    }
}
export const fetchSucceededAction=(receivedMovies)=>{
    return{
        type:FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFaileddAction=(error)=>{
    return{
        type:FETCH_FAILED,
        error
    }
}