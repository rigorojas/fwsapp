import React from 'React';
import {StyleSheet, Image, View, Text} from 'react-native';
import Button from 'react-native-button';
const backgroundImage = require('../../Themes/default/images/bg_main.png');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
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
        const {navigation} = this.props;
        return (
            <Image
                style={styles.container}
                source={backgroundImage}
            >
                <Button
                    onPress={() => navigation.avigate('about')}
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                >Home</Button>
                <Button
                    onPress={() => navigate('about')}
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                >Goto to About Tab</Button>
                <Button
                    onPress={() => navigation.goBack()}
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                >Go Back</Button>
                <Button
                    onPress={() => navigate.goBack()}
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                >Remote Images</Button>

                <Button
                    onPress={() => console.log(this.props.navigation)}
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                >Router Name</Button>

            </Image>
        )
    }
};
