import { fork, all } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
import { watchAddMovies } from './movieSagas';
export default function* rootSaga() {
    yield [
        fork(watchFetchMovies),
        fork(watchAddMovies)
    ];    

}