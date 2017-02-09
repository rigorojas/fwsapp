import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MapView from 'react-native-maps';
import Api from "../../Components/OpenWeatherMap/Api";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    map: {
        flex: 2,
        marginTop: 30,
    },
    textWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    }
});

export default class RemoteImages extends Component {
//     state = {
//         pin: {
//           latitude: 0,
//           longitude: 0,
//         },
//         city: '',
//         temperature: '',
//         description: '',
//      };
//
//     render() {
//         const {openDrawerMenu} = this.props;
//         return (
//             <View style={styles.container}>
//                 <MapView
//                     annotations={[this.state.pin]}
//                     onRegionChangeComplete={this.onRegionChangeComplete}
//                     style={styles.map}
//                 >
//                 </MapView>
//                 <View style={styles.textWrapper}>
//                     <Text style={styles.text}>{this.state.city}</Text>
//                     <Text style={styles.text}>{this.state.temperature}</Text>
//                     <Text style={styles.text} >{this.state.description}</Text>
//                 </View>
//             </View>
//         );
//     }
//
//     onRegionChangeComplete = (region) => {
//         this.setState({
//             pin: {
//                 latitude: region.latitude,
//                 longitude: region.longitude,
//             }
//         });
//         Api(region.latitude, region.longitude)
//         .then((data) => {
//             this.setState(data);
//         });
//     };
    static navigationOptions = {
      title: 'Remote Images',
    };

    render(){
        return (
            <View>
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'https://s-media-cache-ak0.pinimg.com/564x/be/49/a1/be49a191673133be45616b24ccd23403.jpg'}}
                />
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/15894732_10154307555562984_5798618726443862802_n.jpg?oh=3abf9d3825c0f561099ebd2be0c8ac23&oe=58DBE644'}}
                />
                <Image
                    style={{width: 300, height: 300}}
                    source={{uri: 'http://www.techno4.us/custom/plugin/page/content/main/img/bg_bodyDesktop4.jpg'}}
                />
            </View>
        );
    }
}
