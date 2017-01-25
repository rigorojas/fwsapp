import React from 'React';
import {StyleSheet, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from "./styles";
import Button from 'react-native-button';
const backgroundImage = require('../../Themes/default/images/bg_main.png');

export default class Blank extends React.Component {
    render() {
      return (
        <Image
            style={styles.container}
            source={backgroundImage}
        >
            <Button
                onPress={() => {
                    Actions.refresh({
                        key: 'Drawer',
                        open: value => !value
                    })
                }}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Go To Drawer
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
