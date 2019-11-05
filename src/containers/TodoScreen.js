import React, { Component } from 'react';
import {
    View,
    FlatList,
    TouchableOpacity,
    Text,
    ScrollView,
    Image,
    StyleSheet,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import firebase from '../config/config';
import AddModal from '../components/adModal';

class TodoScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            kegiatan: [],
        }

        this._onPressAdd = this._onPressAdd.bind(this);
    }

    componentDidMount() {
        firebase
            .database()
            .ref()
            .child('data')
            .once('value', snapshot => {
                const data = snapshot.val();
                if (data) {
                    const initKegiatan = [];
                    Object
                        .keys(data)
                        .forEach(kegiatan => initKegiatan.push(data[kegiatan]));
                    this.setState({
                        kegiatan: initKegiatan
                    })
                }
            })
    }

    _onPressAdd() {
        this.refs.addModal.showAddModal()
    }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        {/* HEADER */}
        <View style={{backgroundColor: "silver", justifyContent: "center", alignItems: "center", height: 50}}>
            <Text style={{fontWeight: "bold", fontSize: 24, color: "white"}}>TODO APPS</Text>
        </View>
        {/* NAVBAR */}
        <View style={styles.container1}>
            <TouchableOpacity onPress={() => navigate('TodoScreen')} style={styles.btn} >
                <Text style={{marginRight: 10, fontWeight: "bold" }}>TODO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigate('DoneScreen')} style={styles.btn} >
                <Text style={{fontWeight: "bold"}}>DONE</Text>
            </TouchableOpacity>
        </View>
        {/* TODO LIST */}
        <FlatList
            data={this.state.kegiatan}
            renderItem={
                ({item}) =>                 
                <ScrollView style={styles.container2}>
                <TouchableOpacity style={styles.main} onPress={this._onPressAdd}>
                    <View style={styles.txtTodo}>
                        <Text style={{fontSize: 16}}>{item.kegiatan}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={{fontSize: 12}}>{item.kapan}</Text>
                    </View>
                </TouchableOpacity>
                </ScrollView>
            }
         />
        {/* TAB ADD */}
        <View style={{flexDirection: "row-reverse", padding: 10,}}>
            <TouchableOpacity onPress={this._onPressAdd}>
            <Image 
                style={{width: 50, height: 50, }}
                source={require('../icon/plus.png')} 
            />
            </TouchableOpacity>
        </View>
        <AddModal ref={'addModal'} parentFlatList={this} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: "row", 
        padding: 10, 
        paddingBottom: 0,
    },
    btn: {
        backgroundColor: "silver", 
        borderWidth: 3, 
        justifyContent: "center", 
        alignItems: "center", 
        width: 100, 
        height: 35, 
        borderTopRightRadius: 30
    },
    container2: {
        flex: 1, 
        padding: 10, 
        paddingTop: 0, 
        borderWidth: 3, 
        margin: 10
    },
    main: {
        backgroundColor: "red", 
        borderWidth: 3, 
        marginTop: 10, 
    },
    txtTodo: {
        backgroundColor: "yellow", 
        height: 50, 
        padding: 10,
    },
    time: {
        flexDirection: "row-reverse", 
        backgroundColor: "blue", 
        height: 35, 
        padding: 8,
    },
})

export default withNavigation(TodoScreen);