import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
//import {createLogger} from 'redux-logger';
import counterReducer from '../Screens/Counter/Reducer.js';

//const logger = createLogger();
//const initialState = {};

// const reducers = combineReducers({
//     counterReducer
// });

// export default createStore(
//     counterReducer,
//     initialState,
//     applyMiddleware(logger)
// );
export default createStore(counterReducer);
