import React from 'react';
import {AppRegistry, StyleSheet, Button, Text, View, Image} from 'react-native';
import {TabNavigator, DrawerNavigator} from "react-navigation";
import {Side} from './src/SharedComponents/SideMenu/Side.js';
import {NavBarImage} from './src/SharedComponents/NavBarImage/NavBarImage.js';
import Home from "./src/Scenes/Home/Index.js";
import Temperature from "./src/Scenes/Temperature/Temperature.js";

const RightButtonImage = require('./src/Themes/default/images/gear.png');

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};

class PreviousHomeScreen extends React.Component {
    static navigationOptions = {
        drawer: () => ({label: 'Home x123'})
    }

    render() {
        return (
            <View style={{backgroundColor: "orange"}}>
                <Button
                    title="Go to notifications!"
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    label="Go to notifications"
                    style={{backgroundColor: "#ff9"}}
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

class HomeScreen extends React.Component {
    static navigationOptions = {
        drawer: () => ({lable: 'Home Screen'})
    }

    render(){
        return(
            <Home />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawer: () => ({label: 'Notifications'})
    }

    render() {
        return (
            <Button
                title="Go back home!"
                onPress={() => this.props.navigation.goBack()}
                label="Go back home"
            />
        );
    }
}

const MyApp = DrawerNavigator({
    Home: {screen: HomeScreen},
    Notifications: {screen: MyNotificationsScreen}
});

class fwsapp extends React.Component {
    state = {};
    render() {
        return (<MainScreenNavigator />);
    };
}

AppRegistry.registerComponent('fwsapp', () => MyApp);
//watchman watch-del-all && rm -rf node_modules && npm install && npm start -- --reset-cache
