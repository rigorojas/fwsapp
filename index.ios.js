import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import Button from 'react-native-button';
import {StackNavigator, TabNavigator, DrawerNavigator} from "react-navigation";
import {Menu} from './src/SharedComponents/Drawer/Menu.js';
import {NavBarImage} from './src/SharedComponents/NavBarImage/NavBarImage.js';
import Home from "./src/Scenes/Home/Index.js";
import {Backgrounds, ThemeStyles} from "./src/Themes/default/styles/styles.js";
import RemoteImages from "./src/Scenes/RemoteImages/RemoteImages.js";


const RightButtonImage = require('./src/Themes/default/images/gear.png');

class TestScreen extends React.Component {
    static tintColor = "red";
    static navigationOptions = {
        title: 'Welcome',
        drawer: () => (
            {
                label: 'Test',
                icon: ({ tintColor }) => (
                    <Image source={RightButtonImage} />
                ),
            }
        ),
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Image
                source={Backgrounds.main}
                style={ThemeStyles.sceneContainer}
            >
                <Button
                    onPress={() => navigate('Home')}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={ThemeStyles.button}
                >Home</Button>
                <Button
                    onPress={() => navigate('RemoteImages')}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={ThemeStyles.button}
                >Remove Images</Button>
                <Button
                    onPress={() => navigate('DrawerOpen')}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={ThemeStyles.button}
                >Open Drawer</Button>
                <Button
                    onPress={() => {alert("Told you.");}}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={ThemeStyles.button}
                >Alert</Button>
            </Image>
        );
    }
}

class MenuScreen extends React.Component {
    render(){
        return(
            <Menu theTitle="My New Title Prop" />
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
        contentComponent: MenuScreen,
        drawerWidth: 300,
        style: {},
    }
);

AppRegistry.registerComponent('fwsapp', () => fwsapp);
