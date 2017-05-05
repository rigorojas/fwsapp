import React from 'React';
import {StyleSheet, View, Text} from 'react-native';
import { NavigationActions } from 'react-navigation'

const backAction = NavigationActions.back({
  key: 'Profile'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#099"
    },
    text: {
        color: "#fff"
    }
});

export default class Profile extends React.Component {
    static navigationOptions = {
        title: 'Profile title',
        tabBar: {
            label: 'Profile',
        },
     }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is the Home > Profile Scene</Text>
            </View>
        );
    }

};
