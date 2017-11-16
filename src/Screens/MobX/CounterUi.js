import React, {Component} from 'react';
import {PropTypes, StyleSheet, Text, View } from 'react-native';
import Button from 'react-native-button';
import {observer} from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  }
});

export default observer( class extends Component {

    propTypes: {
        store: PropTypes.object.isRequired
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Mobx Counter</Text>
                <Button onPress={() => this.props.store.increment()}>
                    <Text style={styles.text}>|   +   | </Text>
                </Button>

                <Text style={styles.text}>Clicked: {this.props.store.counter} times</Text>

                <Button onPress={() => this.props.store.decrement()}>
                    <Text style={styles.text}>|   -   | </Text>
                </Button>

                <Button onPress={() => this.props.store.incrementAsync()}>
                    <Text style={styles.text}>|   + Async   | </Text>
                </Button>
            </View>
        );
    }
});
