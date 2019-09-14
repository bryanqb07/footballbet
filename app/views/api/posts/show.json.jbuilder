( json.partial! "post", post: @post, 
    comment_ids: @post.comment_ids, 
    parent_comment_ids: @post.parent_comment_ids )