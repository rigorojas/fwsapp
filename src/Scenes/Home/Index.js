import React from 'React';
import {StyleSheet, Button, Image, View, Text} from 'react-native';
// import Button from 'react-native-button';
import {TabNavigator} from "react-navigation";
import Notification from "./Notification.js";
import Profile from "./Profile.js";
import About from "./About.js";

const Screens = {
    Profile: {screen: Profile},
    Notification: {screen: Notification},
    About: {screen: About},
}

const Options = {
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
}

const HomeTabNavigator = TabNavigator(Screens, Options);

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Home Index',
        header: {
            right: <Button title="Info" onPress={()=> alert('right button')} />,
        },
    };

    render(){
        return(<HomeTabNavigator />);
    }
};
