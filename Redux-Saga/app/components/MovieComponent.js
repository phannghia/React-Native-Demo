import React, { Component } from 'react'
import { View, Button, Text, TextInput, FlatList, Platform } from 'react-native';



export default class MovieComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutotrials
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ movieName: text })}
                        value={this.state.movieName}
                        placeholder="Enter new movie name" />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ releaseYear: text })}
                        value={this.state.releaseYear}
                        placeholder="Release year" />

                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            console.log("Lỗi tại  componnet")
                            this.props.onFetchMovie('asc')
                        }}
                        title="Fetch movies" />
                    <Button />
                    <Button containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {

                        }}
                        title="Add Movie" />
                    <Button />
                </View>
                <FlatList
                    data={this.props.movies}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item, index }) =>
                        <Text style={{
                            padding: 10,
                            fontWeight: 'bold',
                            fontSize: 17,
                            color: 'white',
                            backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                        }}>
                        {`${item.name} ,${item.releaseYear}`}
                        </Text>}
                />
            </View>

        );
    }
}