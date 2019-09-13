export const RECEIVE_POST = "RECEIVE_POST";
export const UPDATE_POST = "UPDATE_POST";

import * as APIUtil from '../utils/api_util';

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const updatePost = post => ({
    type: UPDATE_POST,
    post
});


export const createPost = post => dispatch => APIUtil.postPost(post)
    .then(post => dispatch(receivePost(post)));

export const upVotePost = post_id => dispatch => APIUtil.upVotePost(post_id)
    .then(post => dispatch(updatePost(post)));

export const downVotePost = post_id => dispatch => APIUtil.downVotePost(post_id)
    .then(post => dispatch(updatePost(post)));


// export const receivePosts = sub => ({
//     type: RECEIVE_SUB,
//     posts: sub.posts
// });

// export const fetchSub = subID => dispatch => APIUtil.getSub(subID)
//     .then(sub => dispatch(receiveSub(sub)));


// export const fetchSubs = subID => dispatch => APIUtil.getSubs(subID)
//     .then(subs => dispatch(receiveSubs(subs)));



