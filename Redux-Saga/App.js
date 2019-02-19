import React from 'react';
import {View} from 'react-native';
import rootReducer from './app/reducers/Index'
import {Provider} from 'react-redux'
import MovieContainer from './app/containers/MovieContainers'
import {applyMiddleware, compose, createStore} from 'redux'
// redux saga
import createSagaMiddleware from 'redux-saga'
import {index} from "./app/sagas";
import configureStore from "./app/store/ConfigureStore";


const store = configureStore()

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}></View>
            </Provider>
        );
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
