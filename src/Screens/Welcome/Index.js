import React from 'React';
import {Image} from 'react-native';
import Button from 'react-native-button';
import Theme from "../../Themes/default/styles/styles.js";

export default class Welcome extends React.Component {
    static tintColor = "red";

    static navigationOptions = {
        title: 'Welcome',
        drawer: () => (
            {
                label: 'Welcome',
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
                source={Theme.backgrounds.main}
                style={Theme.styles.sceneContainer}
            >
                <Button
                    onPress={() => navigate('User')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >User</Button>
                <Button
                    onPress={() => navigate('RemoteImages')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >Remote Images</Button>
                <Button
                    onPress={() => navigate('ApiConnections')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >Api Connections</Button>
                <Button
                    onPress={() => navigate('DrawerOpen')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >Open Drawer</Button>
                <Button
                    onPress={() => {alert("Told you.");}}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >Alert</Button>
                <Button
                    onPress={() => navigate('MobX')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={Theme.styles.button}
                >MobX</Button>
            </Image>
        );
    }
}
