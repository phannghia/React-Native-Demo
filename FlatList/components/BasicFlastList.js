import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert, TouchableHighlight } from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout'
import AddModal from './AddModel';
class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: (secId, rowId, dire) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null })
                }
            },
            onOpen: (secId, rowId, dire) => {
                this.setState({ activeRowKey: this.props.item.key })
            }
            ,
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            '',
                        //    'Alert',
                            ' Bạn có muốn xóa bản ghi này không? ',
                            [
                                
                                {
                                    text: 'Yes', onPress: () => {

                                        flatListData.splice(this.props.index, 1);
                                        this.props.abc.refeeshFlastList(deletingRow)
                                    }
                                },
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                            ]
                        )

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSetting}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        // backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen': 'tomato'                
                        backgroundColor: 'mediumseagreen'
                    }}>
                        <Image
                            source={{ uri: this.props.item.imageUrl }}
                            style={{ width: 100, height: 100, margin: 5 }}
                        >

                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 100
                        }}>
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 1,
                        backgroundColor: 'white'
                    }}>

                    </View>
                </View>

            </Swipeout>
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

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null
        })
        this._onPressAdd=this._onPressAdd.bind(this)
    }
    refeeshFlastList = (deletedKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            }
        })
    }

    _onPressAdd() {

        // alert("Hiển thị")
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{ flex: 1, marginTop: 22 }}>

                <View style={{
                    backgroundColor: 'tomato',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: 64
                }}>
                    <TouchableHighlight style={{ marginRight: 10 }}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}>
                        <Image style={{ width: 35, height: 35 }} source={require('../icons/icons-add.png')}></Image>
                    </TouchableHighlight>
                </View>
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
                        return (
                            <FlatListItem item={item} index={index} abc={this}>

                            </FlatListItem>);
                    }}
                >

                </FlatList>
                <AddModal
                ref={'addModal' }
                abc={this}
                 ></AddModal>
            </View>
        );
    }
}