import React from 'React';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TabNavigator} from "react-navigation";
import Button from 'react-native-button';
const backgroundImage = require('../../Themes/default/images/bg_main.png');

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        paddingTop: 20,
        flex: 1,
        width: null,
        height: null,
        resizeMode: "stretch"
    },
    buttonContainer: {
        padding: 10,
        height: 45,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#aaa',
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    button: {
        fontSize: 14,
        color: '#fff'
    },
});

class NotificationsScreen extends React.Component{
    render() {
        return (
            <View>
                <Text>This is the Notification Scene</Text>
            </View>
        );
    }
}

class HomeScreen extends React.Component {
    render() {
      return (
        <Image
            style={styles.container}
            source={backgroundImage}
        >
            <Button
                onPress={() => {
                    Actions.refresh({
                        key: 'Drawer',
                        open: value => !value
                    })
                }}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Go To Drawer
            </Button>
            <Button
                onPress={() => Actions.Temperature()}
                containerStyle={styles.buttonContainer}
                style={styles.button}
            >
                Temperature Page
            </Button>
        </Image>
      )
    }
};

const Home = TabNavigator(
    {
        Home: {screen: HomeScreen},
        Notifications: {screen: NotificationsScreen}
    },
    {
        tabBarOptions: {activeTintColor: '#e91e63'}
    }
);

export default Home;
