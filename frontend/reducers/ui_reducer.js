import { combineReducers } from 'redux';
import subSearchReducer from './sub_search_reducer';
import modalReducer from './modal_reducer';

export default combineReducers({
    subs: subSearchReducer,
    modal: modalReducer
});


