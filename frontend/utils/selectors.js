export const selectPosts = (state, post_ids) => {
    return post_ids ? post_ids.map(id => state.entities.posts[id]) : [];
};