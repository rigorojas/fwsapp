import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const appLogo = require('./../../Themes/default/images/appLogo.png');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 26,
        backgroundColor: '#cccc00'
    },
    navBarImage: {
        width: 238,
        height: 25,
        marginBottom: 150
    }
});

export class NavBarImage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={appLogo}
                    style={styles.navBarImage}
    	        />
            </View>
        );
    };
};
