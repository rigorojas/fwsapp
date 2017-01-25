import React from 'react';
import {ScrollView, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
// source={{uri: 'https://scontent.xx.fbcdn.net/v/t1.0-9/15894732_10154307555562984_5798618726443862802_n.jpg?oh=3abf9d3825c0f561099ebd2be0c8ac23&oe=58DBE644'}}
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
                        <Text>Temperature</Text>
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

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  },
  scrollView: {
      flex: 1,
      padding: 20,
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
