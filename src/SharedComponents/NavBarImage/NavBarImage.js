import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const appLogo = require('./../../Themes/default/images/appLogo.png');

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

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 26,
        backgroundColor: '#cccccc'
    },
    navBarImage: {
        width: 238,
        height: 25,
        marginBottom: 150
    }
});
