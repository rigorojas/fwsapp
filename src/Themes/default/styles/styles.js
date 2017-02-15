import React from 'React';
import {StyleSheet} from 'react-native';

const backgrounds = {
    main: require('../images/bg_main.png')
}

const styles = StyleSheet.create({
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

const Theme = {
    backgrounds,
    styles
};

export default Theme;
