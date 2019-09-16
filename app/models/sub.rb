class Sub < ApplicationRecord
    validates :description, :title, presence: true
    validates :title, uniqueness: true 

    extend FriendlyId
    friendly_id :title, use: :slugged

    has_many :posts, dependent: :destroy

    belongs_to :moderator,
        class_name: :User,
        foreign_key: :moderator_id,
        primary_key: :id,
        inverse_of: :subs 

    def self.seed
        10000.times do
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

            description = "A forum about " + title
            moderator_id = User.pluck(:id).sample
            new_user = Sub.create(title: title, description: description, moderator_id: moderator_id)
        end
    end
end