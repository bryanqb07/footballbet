json.extract! comment, :id, :body, :user_id, :post_id, :parent_comment_id
json.extract! comment.author, :username
json.set! "child_comments", comment.child_comments