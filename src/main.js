import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from 'react-native-button';
import {StackNavigator, TabNavigator, DrawerNavigator} from "react-navigation";
import Menu from './SharedComponents/Drawer/Menu.js';
import User from "./Screens/User/Index.js";
import Welcome from "./Screens/Welcome/Index.js";
import Theme from "./Themes/default/styles/styles.js";
import RemoteImages from "./Screens/RemoteImages/RemoteImages.js";

const RightButtonImage = require('./Themes/default/images/gear.png');

class DrawerMenuScreen extends React.Component {
    render(){
        return(
            <Menu
                theTitle="My New Title Prop"
                {...this.props}
            />
        );
    }
}

const Main = DrawerNavigator(
    {
        AppNavigator: {
            screen: StackNavigator(
                {
                    Welcome:{
                        name: 'Welcome',
                        description: 'Just The Welcome Screen',
                        screen: Welcome,
                    },
                    User: {
                        name: 'User',
                        description: 'User Tabs',
                        screen: User,
                    },
                    RemoteImages: {
                        name: 'RemoteImages',
                        description: 'Remote Images',
                        screen: RemoteImages,
                     },
                },
                {
                    initialRouteName: 'Welcome',
                    headerMode: 'float',
                },
            )
        },
    },
    {
        contentComponent: DrawerMenuScreen,
        drawerWidth: 300,
        style: {},
    }
);

export default Main;
