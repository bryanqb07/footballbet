import merge from 'lodash/merge';

import { RECEIVE_SUB } from '../actions/sub_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            return merge({}, state, { [action.comment.id]: action.comment });
        case RECEIVE_SUB:
            return (action.sub.comments ? action.sub.comments : state);
        default:
            return state;
    }
};
