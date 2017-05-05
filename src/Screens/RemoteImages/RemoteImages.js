import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView from 'react-native-maps';
import Api from "../../Components/OpenWeatherMap/Api";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 2,
        marginTop: 30,
    },
    textWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
});

export default class Temperature extends Component {
    static navigationOptions = {
      title: 'Remote Images',
    };

    render(){
        return (
            <View>
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/be/49/a1/be49a191673133be45616b24ccd23403.jpg'}}
                />
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/14433017_873234042807316_5561943368635280822_n.jpg?oh=4e97a4de5071670836bee24b168ffd9f&oe=5989450D'}}
                />
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'http://www.techno4.us/custom/plugin/page/content/main/img/bg_bodyDesktop4.jpg'}}
                />
            </View>
        );
    }
}
