import { RECEIVE_SEARCH_SUBS, CLEAR_SEARCH_SUBS } from '../actions/sub_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SEARCH_SUBS:
            return action.subs;
        case CLEAR_SEARCH_SUBS:
            return {};
        default:
            return state;
    }
};