import React from 'react';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import Menu from './SharedComponents/Drawer/Menu.js';
import User from "./Screens/User/Index.js";
import Welcome from "./Screens/Welcome/Index.js";
import RemoteImages from "./Screens/RemoteImages/RemoteImages.js";
import ApiConnections from "./Screens/ApiConnections/Index.js";

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
                    ApiConnections: {
                        name: 'ApiConnections',
                        description: 'Api Connections',
                        screen: ApiConnections,
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
