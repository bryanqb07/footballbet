import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import subsReducer from './subs_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';

export default combineReducers({
    users: usersReducer,
    subs: subsReducer,
    posts: postsReducer,
    comments: commentsReducer
});


