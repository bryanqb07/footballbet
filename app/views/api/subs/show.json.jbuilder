json.partial! "sub", sub: @sub
post_ids = []
@sub.posts.each do |post|
    post_ids << post[:id]
    json.posts do 
        json.set! post[:id], post, :title, :content, :user_id
    end
end
json.set! "post_ids", post_ids
