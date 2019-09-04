import merge from 'lodash/merge';

import { RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_SUB } from '../actions/sub_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST:
            return merge({}, state, { [action.post.id]: action.post });
        case RECEIVE_SUB:
            return (action.sub.posts ? action.sub.posts : state);
        default:
            return state;
    }
};
