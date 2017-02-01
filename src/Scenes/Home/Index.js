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
        tabBarOptions: {
            activeTintColor: '#e90000',
            style: {
                backgroundColor: "red"
            }
        }
    },
);

export default Home;
