import merge from 'lodash.merge';

import { RECEIVE_SUB, RECEIVE_SUBS } from '../actions/sub_actions';
import { RECEIVE_POST } from '../actions/post_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SUB:
            return merge({}, state, { [action.sub.id]: action.sub });
        case RECEIVE_SUBS:
            return action.subs;
        case RECEIVE_POST:
            const newState = merge(state, {});
            newState[action.post.sub_ids[0]].post_ids.push(action.post.id)
            return newState;
        default:
            return state;
    }
};
