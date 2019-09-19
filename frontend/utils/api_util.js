//subs
export const getSubs = () => (
    $.ajax({
        method: "GET",
        url: `/api/subs/`,
    })
);

export const getSub = (id) => (
    $.ajax({
        method: "GET", 
        url: `/api/subs/${id}`,
    })
);

export const searchSubs = (query) => (
    $.ajax({
        method: "GET",
        url: `/api/subs/search`,
        data: { query }
    })
)

export const postSub = (sub) => (
    $.ajax({
        method: "POST",
        url: "/api/subs",
        data: { sub }
    })
);
//
//posts

// export const getPost = (id) => (
//     $.ajax({
//         method: "GET",
//         url: `/api/posts/${id}`,
//     })
// );

export const postPost = (post) => (
    $.ajax({
        method: "POST",
        url: "/api/posts",
        data: { post }
    })
);

export const postComment = (comment) => (
    $.ajax({
        method: "POST",
        url: "/api/comments",
        data: { comment }
    })
);

export const downVoteComment = comment_id => (
    $.ajax({
        method: "POST",
        url: `/api/comments/${comment_id}/downvote`,
    })
);

export const upVoteComment = comment_id => (
    $.ajax({
        method: "POST",
        url: `/api/comments/${comment_id}/upvote`,
    })
);

export const downVotePost = post_id => (
    $.ajax({
        method: "POST",
        url: `/api/posts/${post_id}/downvote`,
    })
);

export const upVotePost = post_id => (
    $.ajax({
        method: "POST",
        url: `/api/posts/${post_id}/upvote`,
    })
);

export const postSubscription = (user_id, sub_id) => (
    $.ajax({
        method: "POST",
        url: `/api/users/${user_id}/subscribe`,
        data: { sub_id }
    })
)