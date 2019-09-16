json.extract! post, :id, :title, :url, :content, :user_id, :sub_id, :created_at, :updated_at, :votes
json.extract! post.author, :username
json.set! "comment_ids", comment_ids
json.set! "parent_comment_ids", parent_comment_ids
