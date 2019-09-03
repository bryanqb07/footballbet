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
