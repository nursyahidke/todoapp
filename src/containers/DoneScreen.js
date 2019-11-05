import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { withNavigation } from 'react-navigation';

class DoneScreen extends Component {
    constructor(props){
        super(props);

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
            <ScrollView style={styles.container2}>
            <TouchableOpacity style={styles.main}>
                <View style={styles.txtTodo}>
                <Text style={{fontSize: 16}}>Meetup with react native</Text>
                </View>
                <View style={styles.time}>
                <Text style={{fontSize: 12}}>2 days 10 hours</Text>
                </View>
            </TouchableOpacity>
            </ScrollView>
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

export default withNavigation(DoneScreen);