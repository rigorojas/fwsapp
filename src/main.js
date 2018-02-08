import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Store from './Store/Index.js';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import Menu from './SharedComponents/Drawer/Index.js';
import User from "./Screens/User/Index.js";
import Welcome from "./Screens/Welcome/Index.js";
import RemoteImages from "./Screens/RemoteImages/RemoteImages.js";
import MobX from "./Screens/MobX/MobX.js";
import Counter from "./Screens/Counter/Index.js";
import ApiConnections from "./Screens/ApiConnections/Index.js";
import TheWeb from "./Screens/TheWeb/Index.js";

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
                    MobX: {
                        name: 'MobX',
                        description: 'Mob X',
                        screen: MobX,
                    },
                    Counter: {
                        name: 'Counter',
                        description: 'Counter',
                        screen: Counter,
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
                    TheWeb: {
                        name: 'The Web',
                        description: 'The Web',
                        screen: TheWeb,
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
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        style: {},
    }
);

export default class ReduxWrapper extends Component {
  render() {
    return (
      <Provider store={Store}>
          <Main />
      </Provider>
    );
  }
}
