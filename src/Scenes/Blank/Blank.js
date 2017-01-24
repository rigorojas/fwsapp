import React from 'React';
import {StyleSheet, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from "./styles";
import Button from 'react-native-button';

export default class Blank extends React.Component {
    render() {
      return (
        <View style={{margin: 128}}>
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
                Go To Drawer 1
            </Button>
            <Button
                onPress={() => Actions.Temperature()}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Temperature Page
            </Button>
        </View>
      )
    }
};
