import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from 'react-native-button';
import Theme from '../../Themes/default/styles/styles.js'

export default class extends Component {
  render() {
    return (
      <View>
        <Button
          onPress={this.props.increment}
          containerStyle={Theme.styles.buttonContainer}
          style={Theme.styles.button}
        >Up</Button>
        <Text
          style={styles.counter}
          onPress={this.props.reset}>
          {this.props.countInt}
        </Text>
        <Button
          onPress={this.props.decrement}
          containerStyle={Theme.styles.buttonContainer}
          style={Theme.styles.button}
        >Down</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 60,
  },
});
