import React from 'React';
import {StyleSheet, Image} from 'react-native';
import Button from 'react-native-button';
import Theme from '../../Themes/default/styles/styles.js';

const styles = StyleSheet.create({});

export default class Profile extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <Image
                source={Theme.backgrounds.main}
                style={Theme.styles.sceneContainer}
            >
                <Button
                    onPress={() => navigation.navigate('about')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={styles.button}
                >Home</Button>
                <Button
                    onPress={() => navigation.navigate('about')}
                    containerStyle={Theme.styles.buttonContainer}
                    style={styles.button}
                >Goto to About Tab</Button>
                <Button
                    onPress={() => navigation.goBack()}
                    containerStyle={Theme.styles.buttonContainer}
                    style={styles.button}
                >Go Back</Button>
                <Button
                    onPress={() => navigate.goBack()}
                    containerStyle={Theme.styles.buttonContainer}
                    style={styles.button}
                >Remote Images</Button>
                <Button
                    onPress={() => console.log(this.props.navigation)}
                    containerStyle={Theme.styles.buttonContainer}
                    style={styles.button}
                >Router Name</Button>
            </Image>
        )
    }
};
