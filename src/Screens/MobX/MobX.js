import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ActivityIndicator} from 'react-native-button';

import CounterStore from './Store';
import CounterUi from './CounterUi';

export default class extends Component {

    render() {
        return (
            <CounterUi store={CounterStore} />
        );
    }

}
