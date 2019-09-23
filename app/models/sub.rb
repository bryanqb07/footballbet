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

end