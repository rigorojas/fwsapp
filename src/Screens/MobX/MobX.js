import React, { Component } from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {autorun, observable} from 'mobx';

export default class MobX extends Component {
//    @observable todos = ["buy milk, buy eggs"];
//    @observable filter = "";

    render(){
        return (
            <View>
                <Image
                    style={{width: 300, height: 400}}
                    source={{uri: 'http://www.techno4.us/custom/plugin/page/content/main/img/bg_bodyDesktop4.jpg'}}
                />
            </View>
        );
    }
}
