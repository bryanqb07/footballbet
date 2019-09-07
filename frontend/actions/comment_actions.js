// import RECEIVE_SUB from './sub_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

import * as APIUtil from '../utils/api_util';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});


export const createComment = comment => dispatch => APIUtil.postComment(comment)
    .then(comment => dispatch(receiveComment(comment)));