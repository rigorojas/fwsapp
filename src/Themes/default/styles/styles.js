import React from 'React';
import {StyleSheet} from 'react-native';

export const Backgrounds = {
    main: require('../images/bg_main.png')
}

export const ThemeStyles = StyleSheet.create({
    sceneContainer: {
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
    }
});
