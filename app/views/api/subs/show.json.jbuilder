json.partial! "sub", sub: @sub
@posts.each do |post|
    comment_ids = []
    parent_comment_ids = []
    child_comment_hash = post.comments_by_parent(false)
    post.comments.each do |comment|
        comment_ids << comment[:id]
        parent_comment_ids << comment[:id] if comment[:parent_comment_id].nil? 
        json.comments do
            json.set! comment[:id] do 
                json.partial! "api/comments/comment", comment: comment, child_comment_hash: child_comment_hash 
            end
        end
    end

    json.posts do    
        json.set! post[:id] do 
            json.partial! "api/posts/post", post: post, comment_ids: comment_ids, parent_comment_ids: parent_comment_ids
        end
    end
end

json.set! "post_ids", @posts.pluck(:id)
