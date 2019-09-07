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