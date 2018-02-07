// //http://rants.broonix.ca/getting-started-with-react-native-and-redux/
import {Component} from 'react';
import {connect} from 'react-redux';
import Actions from './Actions.js';
import Counter from './Counter.js';

const mapStateToProps = (state) => ({
    Counter: state
});

const mapDispatchToProps = Actions;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
