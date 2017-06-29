import React from 'React';
import {StyleSheet, Text, View, Image} from 'react-native';
import Theme from "../../Themes/default/styles/styles.js";

export default class ApiConnections extends React.Component {
    static navigationOptions = {
      title: 'Api Connections',
    };

    render() {
        return(
                <Image
                    source={Theme.backgrounds.main}
                    style={Theme.styles.sceneContainer}
                >
                    <Text>This is the API scene</Text>
                </Image>
        );
    }
}
