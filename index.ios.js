import React from 'react';
import {AppRegistry, StyleSheet, Button, Text, View, Image} from 'react-native';
import {TabNavigator, DrawerNavigator} from "react-navigation";
import {Menu} from './src/SharedComponents/SideMenu/Menu.js';
import {NavBarImage} from './src/SharedComponents/NavBarImage/NavBarImage.js';
import Home from "./src/Scenes/Home/Index.js";
import Temperature from "./src/Scenes/Temperature/Temperature.js";

const RightButtonImage = require('./src/Themes/default/images/gear.png');

class TestScreen extends React.Component {
    static navigationOptions = {
        drawer: () => ({label: 'Home'}),
        title: 'Great'
    }

    render() {
        return (
            <View style={{backgroundColor: "pink"}}>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    label="Home"
                />
                <Button
                    title="Open Drawer!"
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    label="OpenDrawer"
                    style={{backgroundColor: "#ff3"}}
                />
            </View>
        );
    }
}

const fwsapp = DrawerNavigator(
    {
        Test: {screen: TestScreen},
        Notifications: {screen: Home}
    },
    {
        contentComponent: Menu
    }
);

AppRegistry.registerComponent('fwsapp', () => fwsapp);
//watchman watch-del-all && rm -rf node_modules && npm install && npm start -- --reset-cache
