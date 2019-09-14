//import { getSubs, postSub, getSub } from '../utils/session_api_util';

export const RECEIVE_SUB = "RECEIVE_SUB";
export const RECEIVE_SUBS = "RECEIVE_SUBS";
export const RECEIVE_SEARCH_SUBS = "RECEIVE_SEARCH_SUBS";
export const CLEAR_SEARCH_SUBS = "CLEAR_SEARCH_SUBS";


import * as APIUtil from '../utils/api_util'; 

export const receiveSub = sub => ({
    type: RECEIVE_SUB,
    sub
});


export const receiveSubs = subs => ({
    type: RECEIVE_SUBS,
    subs
});

export const receiveSearchSubs = subs => ({
    type: RECEIVE_SEARCH_SUBS,
    subs
});

export const clearSearchSubs = () => ({
    type: CLEAR_SEARCH_SUBS
});

export const fetchSub = subID => dispatch => APIUtil.getSub(subID)
    .then(sub => dispatch(receiveSub(sub)));

export const fetchSubs = () => dispatch => APIUtil.getSubs()
    .then(subs => dispatch(receiveSubs(subs)));

export const createSub = sub => dispatch => APIUtil.postSub(sub)
    .then(sub => dispatch(receiveSub(sub)));

export const searchSubs = query => dispatch => APIUtil.searchSubs(query)
    .then(subs => dispatch(receiveSearchSubs(subs)));


