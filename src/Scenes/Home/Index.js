import React from 'React';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TabNavigator} from "react-navigation";
import Notification from "./Notification.js";
import Profile from "./Profile.js";
import About from "./About.js";

const Home = TabNavigator(
    {
        Home: {screen: Profile},
        Notification: {screen: Notification},
        About: {screen: About},
    },
    {
        animationEnabled: true,
        initialTab: About,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#666',
            style: {
                backgroundColor: "#900"
            },
        },
        tabBarPosition: 'top'
    },
);

export default Home;
