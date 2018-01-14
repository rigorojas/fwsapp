import {
    combineReducers,
    createStore
} from 'redux';
import counterReducer from '../Screens/Counter/Reducer.js';


// const reducers = combineReducers({
//     counterReducer,
//     dummyReducer,
// });

export default createStore(counterReducer);
