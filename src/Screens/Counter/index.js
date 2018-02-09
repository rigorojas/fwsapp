// //http://rants.broonix.ca/getting-started-with-react-native-and-redux/
import {connect} from 'react-redux';
import Actions from './Actions.js';
import Counter from './Counter.js';

const mapStateToProps = (state) => ({
    Counter: state
});

export default connect(
    mapStateToProps,
    Actions
)(Counter);
