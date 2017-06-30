import React from 'React';
import {StyleSheet, Text, View, Image} from 'react-native';
import OpenWeatherMapApi from "../../Components/OpenWeatherMap/Api.js";
import MapView from 'react-native-maps';
import Theme from "../../Themes/default/styles/styles.js";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    textWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        padding: 10,
        fontSize: 20,
        color: "#cecece",
        backgroundColor: 'transparent',
        fontWeight: "bold"
    }
});

const region = {
    name: "London",
    latitude: 51.51,
    longitude: -0.13
};

export default class ApiConnections extends React.Component {
    state = {
        city: '',
        temperature: '',
        description: '',
     };

    static navigationOptions = {
        title: 'Api Connections',
    };

    componentDidMount(){
        this.onRegionChangeComplete(region);
    }

    onRegionChangeComplete = (region) => {
        OpenWeatherMapApi(
            region.latitude,
            region.longitude
        )
        .then((data) => {
            this.setState(data);
        });
    };

    render() {
        return(
            <Image
                source={Theme.backgrounds.main}
                style={Theme.styles.sceneContainer}
            >
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>{this.state.city}</Text>
                    <Text style={styles.text}>{this.state.temperature}</Text>
                    <Text style={styles.text} >{this.state.description}</Text>
                </View>
            </Image>
        );
    }
}
