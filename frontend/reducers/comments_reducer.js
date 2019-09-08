import merge from 'lodash.merge';

import { RECEIVE_SUB } from '../actions/sub_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            const newState = merge({}, state, { [action.comment.id]: action.comment })
            if (action.comment.parent_comment_id){
                newState[action.comment.parent_comment_id].child_comments.push(action.comment)
            }
            return newState;
        case RECEIVE_SUB:
            return (action.sub.comments ? action.sub.comments : state);
        default:
            return state;
    }
};
