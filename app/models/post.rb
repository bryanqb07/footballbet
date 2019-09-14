require 'byebug'

class Post < ApplicationRecord
    include Votable
    
    belongs_to :user
    validates :title, presence: true 
    validates :subs, presence: { message: "Must have at least one sub."}

    has_many :post_subs, inverse_of: :post, dependent: :destroy
    has_many :subs, through: :post_subs, source: :sub

    has_many :comments, inverse_of: :post

    belongs_to :author, 
        class_name: :User,
        foreign_key: :user_id,
        inverse_of: :posts

    # def parent_comments_only
    #     self.comments.where(parent_comment_id: nil)
    # end

    def comment_ids
        self.comments.pluck(:id)
    end

    def parent_comment_ids
        self.comments.where(parent_comment_id: nil).pluck(:id)
    end
    
    def comments_by_parent(include_authors)
        comments_by_parent = Hash.new { |hash, key| hash[key] = []}
        
        # author only needed to be included in the Comment#show model
        # because I pre-included in the Sub#show for the comments index 
        
        comments = include_authors ? self.comments.includes(:author) : self.comments
        comments.each do |comment|
            comments_by_parent[comment.parent_comment_id] << comment
        end
        
        comments_by_parent
    end

end