require 'byebug'

class Post < ApplicationRecord
    include Votable
    
    belongs_to :user
    belongs_to :sub
    validates :title, :sub_id, presence: true 

    # has_many :post_subs, inverse_of: :post, dependent: :destroy
    # has_many :subs, through: :post_subs, source: :sub

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

    def self.generate_post
        sub_id = Sub.pluck(:id).sample
        user_id = User.pluck(:id).sample
        random_num = rand(1..10)
        title = ""
        case random_num
        when 1
            title = Faker::University.name
        when 2
            title = Faker::Job.title
        when 3
            title = Faker::GreekPhilosophers.name
        when 5
            title = Faker::ProgrammingLanguage.name
        when 6
            title = Faker::Vehicle.manufacture
        when 7
            title = Faker::Nation.language
        when 8
            title = Faker::Nation.nationality
        when 9
            title = Faker::Team.name   
        when 10
            title = Faker::Food.dish
        end    
        content = "A post about " + title
        Post.create(title: title, content: content, user_id: user_id, sub_id: sub_id)
    end

    def self.seed
        50000.times do 
            Post.generate_post
        end
    end

    def seed_votes
        1000.times do
            user_id = User.pluck(:id).sample
            direction = [-1, 1].sample
            self.user_votes.create(user_id: user_id, value: direction)
        end
    end

    # def self.up
    #     ActiveRecord::Base.transaction do
    #         Post.all.each do |post|
    #             post.sub_id = post.subs[0].id
    #             post.save!
    #         end
    #     end
    # end

end