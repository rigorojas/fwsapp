import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';

export default class extends Component {
    static navigationOptions = {
        title: 'Remote Images'
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
                    source={{uri: 'https://cdn.nba.net/nba-drupal-prod/styles/landscape_1045w/s3/2017-11/GettyImages-630741536.jpg'}}
                />
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'http://www.techno4.us/custom/plugin/page/content/main/img/bg_bodyDesktop4.jpg'}}
                />
            </View>
        );
    }
}
