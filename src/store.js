import { createStore, applyMiddleware } from 'redux'
import * as thunk from 'redux-thunk'
import rootReducer from './reducers';

const initialState = {};
// const middlewares = [thunk]

const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(thunk.default)
);
export default store;