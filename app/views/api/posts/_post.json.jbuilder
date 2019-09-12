json.extract! post, :id, :title, :url, :content, :user_id, :sub_ids, :created_at, :updated_at, :votes
json.extract! post.author, :username
json.set! "comment_ids", post.comment_ids
json.set! "parent_comment_ids", post.parent_comment_ids
