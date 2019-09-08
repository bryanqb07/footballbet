json.extract! post, :id, :title, :url, :content, :user_id, :sub_ids
json.extract! post.author, :username
json.set! "comment_ids", []
json.set! "parent_comment_ids", [] 
