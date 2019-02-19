import React, { Component } from 'react';
import { AppRegistry,FlatList, StyleSheet, Text, View } from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem  extends Component {
    render() {  console.log(this.props.item)
        return (
        //  
        <View><Text>âsassasa</Text></View>
            // <View >
                 
                // <View style={{
                //     flex: 1,
                //    // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato',
                // }}>
                // <Text>dsadsa</Text>
                //     <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                //     <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                // </View>
            //     { /* <View
            //         style={{ height: 1, backgroundColor: 'white' }}>
            //     </View>
            // </View> */}
        );
    }
}
const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
    }
});
export default class BasicFlastList extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: 22 }}>
            <Text>aa</Text>
                <FlatList
                    data={flatListData}
                    renderItem={(flatListData) => {
                      
                        // return (
                        //     <View>
                        //     <Text style={styles.flatListItem}>{item.name}</Text>
                        //          <Text style={styles.flatListItem}>{item.foodDescription}</Text></View>
                        //          );
                        // <FlatListItem  item={item} index={index}></FlatListItem >);
                        return (<Text>A</Text>);
                    }}>
                </FlatList>
            </View>
        );
    }
}

