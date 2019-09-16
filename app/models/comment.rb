class Comment < ApplicationRecord
    include Votable

    validates :body, presence: true

    belongs_to :post, inverse_of: :comments

    belongs_to :author, 
        class_name: :User,
        foreign_key: :user_id,
        inverse_of: :comments

    has_many :child_comments,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id

    belongs_to :parent_comment,
        class_name: :Comment,
        foreign_key: :parent_comment_id,
        primary_key: :id,
        optional: true

    def self.seed
        post_id = Sub.find_by(id: 1).posts.pluck(:id).sample
        user_id = User.pluck(:id).sample
        parent_comment_id = Post.find_by(id: post_id).comments.pluck(:id)
        random_num = rand(1..10)
        body = ""
        case random_num
        when 1
            body = Faker::University.name
        when 2
            body = Faker::Job.title
        when 3
            body = Faker::GreekPhilosophers.name
        when 4
            body = Faker::Name.name
        when 5
            body = Faker::ProgrammingLanguage.name
        when 6
            body = Faker::Vehicle.manufacture
        when 7
            body = Faker::Nation.language
        when 8
            body = Faker::Nation.nationality
        when 9
            body = Faker::Team.name   
        when 10
            body = Faker::Food.dish
        end 

        body = "a comment about " + body 
        
        10000.times do
            Comment.create(body: body, user_id: user_id, 
                parent_comment_id: parent_comment_id, post_id: post_id)
            
        end
    end
    
    def seed_votes
        1000.times do
            user_id = User.pluck(:id).sample
            direction = [-1, 1].sample
            self.user_votes.create(user_id: user_id, value: direction)
        end
    end
end