import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
//import {createLogger} from 'redux-logger';
import CounterReducer from '../Screens/Counter/Reducer.js';

//const logger = createLogger();
//const initialState = {};

const RootReducer = CounterReducer;

// const RootReducer = combineReducers({
//     CounterReducer
// });

// export default createStore(
//     RootReducer,
//     initialState,
//     applyMiddleware(logger)
// );
export default createStore(RootReducer);
