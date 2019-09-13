import merge from 'lodash.merge';

import { RECEIVE_POST, UPDATE_POST } from '../actions/post_actions';
import { RECEIVE_SUB } from '../actions/sub_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_POST:
            return merge({}, state, { [action.post.id]: action.post });
        case UPDATE_POST:
            // debugger
            const updatedState = merge({}, state);
            delete updatedState[action.post.id]
            updatedState[action.post.id] = action.post
            return updatedState;
        case RECEIVE_SUB:
            return (action.sub.posts ? action.sub.posts : state);
        case RECEIVE_COMMENT:
            const comment = action.comment
            const newState = merge(state, {});
            newState[comment.post_id].comment_ids.push(comment.id);
            if (comment.parent_comment_id == null){
                newState[comment.post_id].parent_comment_ids.push(comment.id);
            }
            return newState;
        default:
            return state;
    }
};
