json.partial! "sub", sub: @sub
post_ids = []
@sub.posts.includes(:author, :comments).each do |post|
    post_ids << post[:id]
    comment_ids = []
    parent_comment_ids = []
    post.comments.includes(:author).each do |comment|
        comment_ids << comment[:id]
        parent_comment_ids << comment[:id] if comment[:parent_comment_id].nil? 
        json.comments do
            json.set! comment[:id] do 
                json.extract! comment, :id, :body, :user_id, :post_id, :parent_comment_id
                json.extract! comment.author, :username
                json.partial! "api/comments/child_comments", comments: comment.child_comments
            end
        end
    end

    json.posts do    
        json.set! post[:id] do 
            json.extract! post, :id, :title, :content, :user_id
            json.extract! post.author, :username
            json.set! "comment_ids", comment_ids
            json.set! "parent_comment_ids", parent_comment_ids
        end
    end
end
json.set! "post_ids", post_ids
