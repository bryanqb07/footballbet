json.set! "child_comments" do
    json.array! comments do |comment|
        json.extract! comment, :id, :body, :user_id, :post_id, :parent_comment_id, :created_at
        json.extract! comment.author, :username
        children = child_comment_hash[comment[:id]]
        children.empty? ? [] : (json.partial! "api/comments/child_comments", 
        comments: children, child_comment_hash: child_comment_hash) 
    end
end