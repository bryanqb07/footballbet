json.partial! "sub", sub: @sub
post_ids = []
@posts.each do |post|
    post_ids << post[:id]
    comment_ids = []
    parent_comment_ids = []
    child_comment_hash = post.comments_by_parent
    post.comments.each do |comment|
        comment_ids << comment[:id]
        parent_comment_ids << comment[:id] if comment[:parent_comment_id].nil? 
        json.comments do
            json.set! comment[:id] do 
                json.extract! comment, :id, :body, :user_id, :post_id, :parent_comment_id, :created_at, :updated_at, :votes
                json.extract! comment.author, :username
                json.partial! "api/comments/child_comments", comments: child_comment_hash[comment[:id]], child_comment_hash: child_comment_hash
            end
        end
    end

    json.posts do    
        json.set! post[:id] do 
            json.partial! "api/posts/post", post: post, comment_ids: comment_ids, parent_comment_ids: parent_comment_ids
        end
    end
end

json.set! "post_ids", post_ids
