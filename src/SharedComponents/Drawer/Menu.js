import React from 'react';
import {ScrollView, StyleSheet, Text, Image} from 'react-native';
import Button from 'react-native-button';
import Theme from '../../Themes/default/styles/styles.js'

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "transparent",
    },
});

export default class Menu extends React.Component {
    render() {
        return (
            <Image
                source={Theme.backgrounds.main}
                style={Theme.styles.sceneContainer}
            >
                <ScrollView style={styles.scrollView}>
                    <Button
                        onPress={() => navigate('RemoteImages')}
                        title="RemoteImages"
                        label="RemoteImages"
                        containerStyle={Theme.styles.buttonContainer}
                        style={Theme.styles.button}
                    >Remote Images</Button>
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        label="Open Drawer"
                        containerStyle={Theme.styles.buttonContainer}
                        style={Theme.styles.button}
                    >Open Drawer</Button>
                </ScrollView>
            </Image>
        );
    }
}
