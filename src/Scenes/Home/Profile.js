import React from 'React';
import {StyleSheet, View, Text} from 'react-native';

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
                <Text style={styles.text}>This is the Stand alone Profile Scene</Text>
            </View>
        );
    }

};
