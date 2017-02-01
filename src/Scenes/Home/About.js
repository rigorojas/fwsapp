import React from 'React';
import {StyleSheet, Image, View, Text} from 'react-native';

export default class About extends React.Component{
    static navigationOptions = {
        title: 'Welcome',
        tabBar: {
            label: 'Home',
        },
     }

    render() {
        return (
            <View>
                <Text>This is the Stand alone About Scene</Text>
            </View>
        );
    }
}
