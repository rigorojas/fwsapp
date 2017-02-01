import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import {Router, Scene, Actions, DefaultRenderer, Reducer} from 'react-native-router-flux';
import {Side} from './src/SharedComponents/SideMenu/Side.js';
import {NavBarImage} from './src/SharedComponents/NavBarImage/NavBarImage.js';
import Blank from "./src/Scenes/Blank/Blank.js";
import Temperature from "./src/Scenes/Temperature/Temperature.js";

const RightButtonImage = require('./src/Themes/default/images/gear.png');

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        return defaultReducer(state, action);
    }
};

const styles = StyleSheet.create({
    navigationBarStyle: {
        backgroundColor: "#999999",
    },
    rightButtonIconStyle: {
        width: 20,
        height: 20,
    }
});

class fwsapp extends React.Component {
    state = {};
    render() {
        return (
            <Router createReducer={reducerCreate}>
                <Scene key="Drawer"
                    component={Side}
                    open={false}

                >
                    <Scene
                        title="Home"
                        key="root"
                    >
                        <Scene
                            key="Blank"
                            component={Blank}
                            renderTitle={() => {return <NavBarImage />;}}
                            hideNavBar={false}
                            initial={true}
                            navigationBarStyle={styles.navigationBarStyle}
                        />
                        <Scene
                            key="Temperature"
                            component={Temperature}
                            title="Temperature"
                            hideNavBar={false}
                            rightButtonIconStyle={styles.rightButtonIconStyle}
                            rightButtonImage={RightButtonImage}
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
