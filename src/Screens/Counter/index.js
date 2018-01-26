// //http://rants.broonix.ca/getting-started-with-react-native-and-redux/
import {Component} from 'react';
import {connect} from 'react-redux';
import Actions from './Actions.js';
import Counter from './Counter.js';

const mapStateToProps = (state) => ({
    countInt: state
});

export default connect(
    mapStateToProps,
    Actions
)(Counter);
