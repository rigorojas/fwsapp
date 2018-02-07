import {Component} from 'react';
import {connect} from 'react-redux';
import Menu from './Menu.js';

const mapDispatchToProps = (dispatch) => ({
    reset: () => {
        dispatch({type: "RESET"});
    }
});

const mapStateToProps = (state) => ({
    Counter: state
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
