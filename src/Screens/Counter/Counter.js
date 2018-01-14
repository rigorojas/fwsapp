// //http://rants.broonix.ca/getting-started-with-react-native-and-redux/
import {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import Layout from './Layout.js';

const mapStateToProps = (state) => ({
    countInt: state
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch({
            type: "INCREMENT",
            payload: 1,
        })
    },
    decrement: () => {
        dispatch({
            type: "DECREMENT",
            payload: 1,
        })
    },
    reset: () => {
        dispatch({
            type: "RESET",
        })
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
