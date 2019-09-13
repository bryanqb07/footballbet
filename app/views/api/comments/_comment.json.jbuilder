json.extract! comment, :id, :body, :user_id, :post_id, :parent_comment_id, :created_at, :updated_at, :votes
json.extract! comment.author, :username
json.partial! "child_comments", comments: @child_comments, child_comment_hash: @child_comment_hash