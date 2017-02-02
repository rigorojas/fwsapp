import React from 'React';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090"
    },
    text: {
        color: "#fff"
    }
})

export default class Notification extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is the Stand alone Notification Scene</Text>
            </View>
        );
    }
}
