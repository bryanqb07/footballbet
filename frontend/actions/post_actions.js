import RECEIVE_SUB from './sub_actions';
export const RECEIVE_POST = "RECEIVE_POST";


import * as APIUtil from '../utils/api_util';

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});


export const createPost = post => dispatch => APIUtil.postPost(post)
    .then(post => dispatch(receivePost(post)));

// export const receivePosts = sub => ({
//     type: RECEIVE_SUB,
//     posts: sub.posts
// });

// export const fetchSub = subID => dispatch => APIUtil.getSub(subID)
//     .then(sub => dispatch(receiveSub(sub)));


// export const fetchSubs = subID => dispatch => APIUtil.getSubs(subID)
//     .then(subs => dispatch(receiveSubs(subs)));



