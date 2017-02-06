import React from 'React';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TabNavigator} from "react-navigation";
import Notification from "./Notification.js";
import Profile from "./Profile.js";
import About from "./About.js";

const navigationOptions = {
  title: 'Home Index',
};

const HomeTabNavigator = TabNavigator(
    {
        Profile: {screen: Profile},
        Notification: {screen: Notification},
        About: {screen: About},
    },
    {
        title: 'Home Index',
        animationEnabled: true,
        header: {
            title: "Home Index",
            visible: true
        },
        initialTab: {screen: About},
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#666',
            style: {
                backgroundColor: "#900"
            },
        },
        tabBarPosition: 'bottom'
    },
);

export default class Home extends React.Component {
    render(){
        return(
            <HomeTabNavigator />
        );
    }
};
