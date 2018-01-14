import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import Button from 'react-native-button';
import Theme from '../../Themes/default/styles/styles.js'
import Styles from './Styles.js'

export default class extends Component {
    render() {
        return (
            <View>
                <Button
                    onPress={this.props.increment}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >
                    Up
                </Button>
                <Text
                    style={Styles.counter}
                    onPress={this.props.reset}
                >
                    {this.props.countInt}
                </Text>
                <Button
                    onPress={this.props.decrement}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >
                    Down
                </Button>
            </View>
        );
    }
}
