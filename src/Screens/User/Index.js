import React from 'React';
import {StyleSheet, Button, Image, View, Text} from 'react-native';
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
    title: 'User Index',
    animationEnabled: true,
    header: {
        title: "User Index",
        visible: true
    },
    initialTab: {
        screen: Profile,
        path: 'profile/:user'
    },
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

const UserTabNavigator = TabNavigator(Screens, Options);

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'User Index',
        header: {
            right: <Button title="Info" onPress={()=> alert('right button')} />,
        },
    };
    render(){
        return(<UserTabNavigator />);
    }
};
