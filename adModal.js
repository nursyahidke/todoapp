import React, { Component } from 'react';
import {
    Text,
    Dimensions,
    TextInput,
    View,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import firebase from './config';

const screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kegiatan: '',
            kapan: '',
            status: ''
        }
        this.closeModal = this.closeModal.bind(this);
        this.addActivity = this.addActivity.bind(this);
    }

    showAddModal() {
        this.refs.myModal.open()
    }

    closeModal() {
        this.refs.myModal.close()
    }

    addActivity() {
        if (!this.state.kegiatan) return

        const newActivity = firebase.database().ref()
                                .child('data')
                                .push()
        newActivity.set(
            {
                kegiatan: this.state.kegiatan,
                kapan: this.state.kapan, 
                status: this.state.status
            }, () => this.setState({kegiatan: ''}))
        this.closeModal();
        
    }

    getData() {
        firebase
            .database()
            .ref()
            .child('data')
            .on("child_added", snapshot => {
                const data = snapshot.val();
                if (data) {
                    this.setState(prevState => ({
                        kegiatan: [data, ...prevState.kegiatan]
                    }))
                }
            })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <Modal
            ref={'myModal'}
             style={{
                justifyContent: "center",
                shadowRadius: 10,
                width: screen.width - 80,
                height: 450
            }}
            position="center"
            backdrop={true}  
            >
                <Text style={{fontSize: 16, 
                    fontWeight: "bold",
                    textAlign: "left",
                    marginTop: 30,
                    marginLeft: 30 }}>Kegiatan Anda</Text>
                <TextInput 
                    style={{
                        height: 40,
                        borderColor: "gray",
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 15,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderRadius: 4,
                    }}
                    value={this.state.kegiatan}
                    placeholder="Ex. Meeting with xxx"
                    onChangeText={(text) => this.setState({kegiatan: text})}
                />
                <Text style={{fontSize: 16, 
                    fontWeight: "bold",
                    textAlign: "left",
                    marginTop: 30,
                    marginLeft: 30 }}>Kapan</Text>
                <TextInput 
                    style={{
                        height: 40,
                        borderColor: "gray",
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 15,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderRadius: 4,
                    }}
                    placeholder="Date"
                    onChangeText={(text) => this.setState({kapan: text})}
                />
                <Text style={{fontSize: 16, 
                    fontWeight: "bold",
                    textAlign: "left",
                    marginTop: 30,
                    marginLeft: 30 }}>Status</Text>
                <TextInput 
                    style={{
                        height: 40,
                        borderColor: "gray",
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 15,
                        marginBottom: 10,
                        borderWidth: 1,
                        borderRadius: 4,
                    }}
                    placeholder="ComboBox"
                    onChangeText={(text) => this.setState({status: text})}
                />
                <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
                    <Button 
                    onPress={this.closeModal}
                    style={{fontSize: 18, color: "#000" }}
                    containerStyle={{
                        padding: 8,
                        borderWidth: 1,
                        height: 40,
                        borderRadius: 6, 
                    }}>
                        CANCEL
                    </Button>
                    <Button 
                    onPress={this.addActivity}
                    style={{fontSize: 18, color: "#000" }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 80, 
                        borderWidth: 1,
                        height: 40,
                        borderRadius: 6, 
                    }}>
                        SUBMIT
                    </Button>
                </View>
            </Modal>
        )
    }
}