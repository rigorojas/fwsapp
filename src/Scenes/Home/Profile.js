import React from 'React';
import {StyleSheet, Image, View, Text} from 'react-native';
import Button from 'react-native-button';
const backgroundImage = require('../../Themes/default/images/bg_main.png');

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        paddingTop: 20,
        flex: 1,
        width: null,
        height: null,
        resizeMode: "stretch"
    },
    buttonContainer: {
        padding: 10,
        height: 45,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#aaa',
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        fontSize: 14,
        color: '#fff'
    },
});

export default class Profile extends React.Component {
    render() {
      return (
        <Image
            style={styles.container}
            source={backgroundImage}
        >
            <Button
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
                label="Open Drawer"
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Open Drawer
            </Button>
            <Button
                onPress={() => Actions.Temperature()}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Temperature Page
            </Button>
        </Image>
      )
    }
};
