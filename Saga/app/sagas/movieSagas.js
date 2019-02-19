import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {        
        console.log(err)
        yield put({ type: FETCH_FAILED, error });
    }
}
function* addMovies(action) {
    console.log(action.newMovie)
    try {
        const result = yield Api.postMoviesFromApi(action.newMovie); 
     if (result)
     {
        yield put({ type: FETCH_SUCCEEDED, sort:'desc' });
     }
       // yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });     
    } catch (error) {        
        console.log(err)
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
   
}
export function* watchAddMovies(){
    yield takeLatest(ADD_MOVIE,addMovies)
}