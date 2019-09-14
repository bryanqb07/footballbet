import { combineReducers } from 'redux';
import subSearchReducer from './sub_search_reducer';


export default combineReducers({
    subs: subSearchReducer
});


