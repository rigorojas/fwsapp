import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class TheWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://facebook.github.io/react-native/docs/webview.html'}}
        style={{marginTop: 20}}
      />
    );
  }
}
