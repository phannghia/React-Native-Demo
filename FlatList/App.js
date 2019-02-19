import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BasicFlastList from './components/BasicFlastList'
export default class App extends React.Component {
  render() {
    return (
      <View >
        <BasicFlastList/>
      </View>
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
