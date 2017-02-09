import React from 'react';
import {ScrollView, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

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
                source={require('../../Themes/default/images/bg_sideMenuLeft.png')}
            >
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.controlText}>
                        Welcome
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setTimeout(
                                () => Actions.Temperature(),
                                0
                            );
                            Actions.refresh({
                                key: 'Drawer',
                                open: false
                            });
                        }}
                        style={styles.button}
                    >
                        <Text>Remote Images</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            Actions.refresh({
                                key: 'Drawer',
                                open: false
                            })
                        }}
                        style={styles.button}
                    >
                        <Text>Close Drawer</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Image>
        );
    }
}
