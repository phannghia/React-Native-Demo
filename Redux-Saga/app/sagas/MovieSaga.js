import {FETCH_SUCCEEDED,FETCH_FAILED,FETCH_MOVIE} from '../actions/actionsType'
import{put,takeLatest} from 'redux-saga/effects'
import {Api} from './Api'

function* fetchMovie(){
    console.log("Lỗi tại  container")
    try{
        const receovedMovies=yield Api.getMoviesFromApi();
        yield put({type:FETCH_SUCCEEDED,receovedMovies:receovedMovies});

    } catch(error)
    {
        console.log("Lỗi tại  saga")
        yield put({type:FETCH_FAILED,error});

    };
    
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}