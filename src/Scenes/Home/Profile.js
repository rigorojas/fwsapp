import React from 'React';
import {StyleSheet, Image} from 'react-native';
import Button from 'react-native-button';
import {Backgrounds, ThemeStyles} from '../../Themes/default/styles/styles.js';

const styles = StyleSheet.create({});

export default class Profile extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <Image
                source={Backgrounds.main}
                style={ThemeStyles.sceneContainer}
            >
                <Button
                    onPress={() => navigation.navigate('about')}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={styles.button}
                >Home</Button>
                <Button
                    onPress={() => navigation.navigate('about')}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={styles.button}
                >Goto to About Tab</Button>
                <Button
                    onPress={() => navigation.goBack()}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={styles.button}
                >Go Back</Button>
                <Button
                    onPress={() => navigate.goBack()}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={styles.button}
                >Remote Images</Button>
                <Button
                    onPress={() => console.log(this.props.navigation)}
                    containerStyle={ThemeStyles.buttonContainer}
                    style={styles.button}
                >Router Name</Button>
            </Image>
        )
    }
};
