import React from 'react';
import {ScrollView, StyleSheet, Text, ImageBackground} from 'react-native';
import { NavigationActions } from 'react-navigation'
import Button from 'react-native-button';
import Theme from '../../Themes/default/styles/styles.js'

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: "transparent",
    },
});

export default class Menu extends React.Component {
    render(){
        const {navigate} = this.props.navigation;
        const tintColor = "red";
        const navigationOptions = {
            title: 'DrawerMenu',
            drawer: () => (
                {
                    label: 'DrawerMenu',
                    icon: ({ tintColor }) => (
                        <Image source={RightButtonImage} />
                    ),
                }
            ),
        }
        return (
            <ImageBackground
                source={Theme.backgrounds.main}
                style={Theme.styles.sceneContainer}
            >
                <ScrollView style={styles.scrollView}>
                    <Button
                        onPress={() => navigate('User')}
                        title="User"
                        label="User"
                        containerStyle={Theme.styles.buttonContainer}
                        style={Theme.styles.button}
                    >User</Button>
                    <Button
                        onPress={() => navigate('RemoteImages')}
                        title="RemoteImages"
                        label="RemoteImages"
                        containerStyle={Theme.styles.buttonContainer}
                        style={Theme.styles.button}
                    >Remote Images</Button>
                    <Button
                        onPress={() => navigate('DrawerClose')}
                        label="Close Drawer"
                        containerStyle={Theme.styles.buttonContainer}
                        style={Theme.styles.button}
                    >Close Drawer</Button>
                </ScrollView>
            </ImageBackground>
        );
    }
}
