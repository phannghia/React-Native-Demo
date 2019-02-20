import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Dimensions } from 'react-native'
import Modal from 'react-native-modalbox';
import Button from 'react-native-button'
import flatListData from '../data/flatListData'

var screen = Dimensions.get('window')
export default class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newFoodDescription: '',
            newFoodName: ''

        }
    }
    showAddModal = () => {
        this.refs.MyModal.open();
    }
    render() {
        return (
            <Modal
                ref='MyModal'
                style={{
                    justifyContent: 'center',
                    showRadius: 10,
                    width: screen.width - 80,
                    height: 280,
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("close")
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 10
                }}> Thêm mới
             </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({
                        newFoodName: text
                    })}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                >

                </TextInput>

                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}
                    keyboardType='default'
                    onChangeText={(text) => this.setState({
                        newFoodDescription: text
                    })}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDescription}
                >

                </TextInput>
                <Button
                    style={{
                        fontSize: 16,
                        color: 'white'
                    }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                >Save</Button>
            </Modal>
        )
    }
}