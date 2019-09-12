import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

// WINDOW TESTING

import { commentUpdate, keySearch } from './utils/search_utils';

window.commentUpdate = commentUpdate;
window.keySearch = keySearch;

import { postUser, postSession, deleteSession } from './utils/session_api_util';
import { upVoteComment, downVoteComment } from './actions/comment_actions';
import { upVotePost, downVotePost } from './actions/post_actions';

window.postUser = postUser;
window.postSession = postSession;
window.deleteSession = deleteSession;
window.upVoteComment = upVoteComment;
window.downVoteComment = downVoteComment;

window.upVotePost = upVotePost;
window.downVotePost = downVotePost;


window.testUser = {
    username: "boblaw2",
    password: "finger12345",
    email: "bob2@mail.com"
}

import { fetchSub, fetchSubs, createSub } from './actions/sub_actions';

// window.getSub = getSub;
// window.getSubs = getSubs;
// window.postSub = postSub;

window.testSub = {
    title: "Football chat",
    description: "For CFB lovers",
    moderator_id: 1
}

window.fetchSub = fetchSub;
window.fetchSubs = fetchSubs;
window.createSub = createSub;

import { selectPosts, selectComments } from './utils/selectors';
window.selectPosts = selectPosts;
window.selectComments = selectComments;

import { postPost, postComment } from './utils/api_util';

window.postPost = postPost;
window.postComment = postComment;

window.testPost = {
    title: "good game",
    content: "sad to lose",
    user_id: 1,
    sub_ids: [2]
}

import { createPost } from './actions/post_actions';
window.createPost = createPost;

window.testComment1 = {
    body: "This is a test comment",
    user_id: 1,
    post_id: 9,
}

window.testComment2 = {
    body: "This is a reply comment",
    user_id: 1,
    post_id: 9,
    parent_comment_id: 1
}


//

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preLoadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    // WINDOW TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // 

    ReactDOM.render(<Root store={store} />, root)
});