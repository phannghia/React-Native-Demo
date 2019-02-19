import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from '../reducers/Index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducer, {}, compose(
        applyMiddleware(sagaMiddleware))
    );
    //const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return store;
}