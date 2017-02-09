import React from 'react';
import {ScrollView, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
const backgroundImage = require('../../Themes/default/images/bg_sideMenuLeft.png');

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  },
  scrollView: {
      flex: 1,
      backgroundColor: "transparent"
  },
  controlText: {
    color: 'white',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
  }
});

export class Menu extends React.Component {
    render() {
        return (
            <Image
                style={styles.container}
                source={backgroundImage}
            >
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.controlText}>this.props.theTitle</Text>
                    <Button
                        onPress={() => navigate('RemoteImages')}
                        title="RemoteImages"
                        label="RemoteImages"
                        containerStyle={styles.buttonContainer}
                        style={styles.button}
                    >
                        Remote Images
                    </Button>
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        label="Open Drawer"
                        containerStyle={styles.buttonContainer}
                        style={styles.button}
                    >
                        Open Drawer
                    </Button>
                </ScrollView>
            </Image>
        );
    }
}
