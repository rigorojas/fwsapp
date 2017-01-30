import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from "./styles";
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