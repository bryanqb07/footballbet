json.partial! "sub", sub: @sub
post_ids = []
@sub.posts.includes(:author, :comments).each do |post|
    post_ids << post[:id]
    json.posts do    
        json.set! post[:id] do 
            json.extract! post, :title, :content, :user_id
            parent_comment_ids = []
            post.parent_comments_only.each do |comment|
                parent_comment_ids << comment[:id]
                json.comments do
                    json.set! post[:id], comment, :body, :user_id, :post_id, :parent_comment_id
                end
            end
            json.set! "parent_comment_ids", parent_comment_ids
        end
    end
end
json.set! "post_ids", post_ids
