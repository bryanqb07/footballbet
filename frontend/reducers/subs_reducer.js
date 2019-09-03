import merge from 'lodash/merge';

import { RECEIVE_SUB, RECEIVE_SUBS } from '../actions/sub_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SUB:
            return merge({}, state, { [action.sub.id]: action.sub });
        case RECEIVE_SUBS:
            return action.subs
        default:
            return state;
    }
};
