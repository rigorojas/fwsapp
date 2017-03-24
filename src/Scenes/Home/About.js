import React from 'React';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009"
    },
    text: {
        color: "#fff"
    }
});

export default class About extends React.Component{
    static navigationOptions = {
        title: 'About title',
        tabBar: {
            label: 'About',
        },
     }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>This is the Stand alone About Scene</Text>
            </View>
        );
    }
}
