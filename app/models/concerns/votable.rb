module Votable
    extend ActiveSupport::Concern

    included do
        has_many :user_votes,
            as: :votable,
            class_name: :UserVote,
            dependent: :destroy
    end

    def votes
        self.user_votes.sum(:value)
    end

    def upvotes
        self.user_votes.where(value: 1).count
    end

    def downvotes
        self.user_votes.where(value: -1).count
    end
end