import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Router, Scene, Actions, DefaultRenderer, Reducer} from 'react-native-router-flux';
import {Side} from './src/SharedComponents/SideMenu/Side.js';
import Blank from "./src/Scenes/Blank/Blank.js";
import Temperature from "./src/Scenes/Temperature/Temperature.js";

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};

const AppLogo = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 26 }}>
            <Image
                source={require('./appLogo.png')}
                style={{
                    width: 238,
                    height: 25,
                    marginBottom: 150
                }}
	    />
        </View>
    );
};

class fwsapp extends React.Component {
    state = {};
    render() {
        return (
            <Router createReducer={reducerCreate}>
                <Scene key="Drawer" component={Side} open={false}>
                    <Scene title="Home" key="root">
                        <Scene
                            key="Blank"
                            component={Blank}
                            renderTitle={() => {return <AppLogo />;}}
                            hideNavBar={false}
                            initial={true}
                        />
                        <Scene
                            key="Temperature"
                            component={Temperature}
                            title="Temperature"
                            hideNavBar={false}
                            rightButtonIconStyle={{
                                width: 20,
                                height: 20,
                            }}
                            rightButtonImage={require('./gear.png')}
                            onRight={() => {alert('right button'); }}
                        />
                    </Scene>
                </Scene>
            </Router>
        );
    };
}

AppRegistry.registerComponent('fwsapp', () => fwsapp);
//watchman watch-del-all && rm -rf node_modules && npm install && npm start -- --reset-cache
