import { createStore, combineReducers } from 'redux';

import studentReducer from './state';

const reducer = combineReducers({
    student: studentReducer
});

const store = createStore(reducer);

export default store;