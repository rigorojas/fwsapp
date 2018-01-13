import {
    combineReducers,
    createStore
} from 'redux';
import counterReducer from '../Screens/Counter/Reducer.js';

// const reducers = combineReducers({
//     counter: counterReducer,
// });

const store = createStore(counterReducer);

export default store;
