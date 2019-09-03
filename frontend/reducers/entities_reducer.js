import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import subsReducer from './subs_reducer';
export default combineReducers({
    users: usersReducer,
    subs: subsReducer
});


