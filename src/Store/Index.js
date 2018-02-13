import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
//import {createLogger} from 'redux-logger';
import counterReducer from '../Screens/Counter/Reducer.js';

//const logger = createLogger();
//const initialState = {};

const RootReducer = counterReducer;

// const RootReducer = combineReducers({
//     counterReducer
// });

// export default createStore(
//     RootReducer,
//     initialState,
//     applyMiddleware(logger)
// );
export default createStore(RootReducer);
