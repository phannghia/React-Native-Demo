import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './app/reducers/index'
import MovieContainer from './app/containers/MovieContainer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './app/sagas/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// const App = () => (
//     <Provider store={store}>
//         <MovieContainer />
//     </Provider>
// );
sagaMiddleware.run(rootSaga);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MovieContainer />
    </Provider>
    );
  }
}


