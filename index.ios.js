import React from 'react';
import {AppRegistry, StyleSheet, Button, Text, View, Image} from 'react-native';
import {StackNavigator, TabNavigator, DrawerNavigator} from "react-navigation";
import {Menu} from './src/SharedComponents/Drawer/Menu.js';
import {NavBarImage} from './src/SharedComponents/NavBarImage/NavBarImage.js';
import Home from "./src/Scenes/Home/Index.js";
import RemoteImages from "./src/Scenes/RemoteImages/RemoteImages.js";

const RightButtonImage = require('./src/Themes/default/images/gear.png');

class TestScreen extends React.Component {
    static navigationOptions = {
        title: 'Test 1',
        drawer: () => ({label: 'Test'}),
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1, backgroundColor: "#9999cc"}}>
                <Button
                    title="Home"
                    onPress={() => navigate('Home')}
                    label="Home"
                />
                <Button
                    title="RemoteImages"
                    onPress={() => navigate('RemoteImages')}
                    label="RemoteImages"
                />
                <Button
                    title="Open Drawer!"
                    onPress={() => navigate('DrawerOpen')}
                    label="OpenDrawer"
                    style={{backgroundColor: "#ff3"}}
                />
                <Button
                    title="Alert"
                    onPress={() => {alert("Told you.");}} />
            </View>
        );
    }
}

const fwsapp = DrawerNavigator(
    {
        AppNavigator: {
            screen: StackNavigator(
                {
                    Test:{
                        name: 'Test',
                        description: 'Just A Test Screen',
                        screen: TestScreen,
                    },
                    Home: {
                        name: 'Home',
                        description: 'Home Tabs',
                        screen: Home,
                    },
                    RemoteImages: {
                        name: 'RemoteImages',
                        description: 'Remote Images',
                        screen: RemoteImages,
                     },
                },
                {
                    initialRouteName: 'Test',
                    headerMode: 'float',
                },
            )
        },
    },
    {
        contentComponent: Menu
    }
);

AppRegistry.registerComponent('fwsapp', () => fwsapp);
