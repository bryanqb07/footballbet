export const selectPosts = (state, post_ids) => {
    return post_ids ? post_ids.map(id => state.entities.posts[id]) : [];
};

export const selectComments = (state, comment_ids) => {
    return comment_ids ? comment_ids.map(id => state.entities.comments[id]) : [];
};