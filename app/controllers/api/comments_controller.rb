class Api::CommentsController < ApplicationController
        before_action :authors_only!, only: [:edit, :update]

    def create
        @comment = current_user.comments.new(comment_params)
        @child_comments = []
        @child_comment_hash = []
        if @comment.save
            redirect_to api_comment_url(@comment)
        else
            flash.now[:errors] = @comment.errors.full_messages
        end
    end

    def show 
        @comment = Comment.find(params[:id])
        @child_comments = @comment.child_comments.includes(:author)
        @child_comment_hash = @comment.post.comments_by_parent(true)
        render :show 
    end

    def edit 
        @comment = current_user.comments.find(params[:id])
    end


    def update  
        @post = current_user.comments.find(params[:id])
        if @comment.update(comment_params)
            redirect_to api_comment_url(@comment)
        else
            flash.now[:errors] = @comment.errors.full_messages
            render :edit
        end
    end

    def upvote
        vote(1)
    end

    def downvote
        vote(-1)
    end


    protected 

    def comment_params
        self.params.require(:comment).permit(:parent_comment_id, :body, :post_id, :user_id)
    end

    def authors_only!
        return if current_user.comments.find_by(id: params[:id])
        render json: "Forbidden", status: :forbidden
    end

    def vote(direction)
        @comment = Comment.find_by(id: params[:id])
        @user_vote = @comment.user_votes.find_or_initialize_by(user: current_user)         

        unless @user_vote.update(value: direction)
            flash[:errors] = @user_vote.errors.full_messages
        end
        
        redirect_to api_comment_url(@comment)
    end
end
