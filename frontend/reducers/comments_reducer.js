import merge from 'lodash.merge';
import { commentUpdate } from '../utils/search_utils';
import { RECEIVE_SUB } from '../actions/sub_actions';
import { RECEIVE_COMMENT, UPDATE_COMMENT } from '../actions/comment_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COMMENT:
            const newState = merge({}, state, { [action.comment.id]: action.comment })
            if (action.comment.parent_comment_id){
                commentUpdate(newState, action.comment)
 //               newState[action.comment.parent_comment_id].child_comments.push(action.comment)
            }
            return newState;
        case UPDATE_COMMENT:
            // debugger
            const updatedState = merge({}, state);
            delete updatedState[action.comment.id]
            updatedState[action.comment.id] = action.comment
            if(action.comment.parent_comment_id){
                commentUpdate(updatedState, action.comment)
            }
            return updatedState;
        case RECEIVE_SUB:
            return (action.sub.comments ? action.sub.comments : state);
        default:
            return state;
    }
};
