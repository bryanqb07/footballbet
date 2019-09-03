import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store';

// WINDOW TESTING
import { postUser, postSession, deleteSession } from './utils/session_api_util';

window.postUser = postUser;
window.postSession = postSession;
window.deleteSession = deleteSession;

window.testUser = {
    username: "boblaw2",
    password: "finger12345",
    email: "bob2@mail.com"
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