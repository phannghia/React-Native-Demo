import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './MovieSaga';

function* rootSaga() {
    //console.log("đã call")
    yield all([watchFetchMovies()]);
}

export default rootSaga;