class Api::PostsController < ApplicationController
    before_action :authors_only!, only: [:edit, :update]

    def create
        @post = current_user.posts.new(post_params)
        if @post.save
            redirect_to api_post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
        end
    end

    def show 
        @post = Post.find(params[:id])
        render :show 
    end

    def edit 
        @post = current_user.posts.find(params[:id])
    end


    def update  
        @post = current_user.posts.find(params[:id])
        if @post.update(post_params)
            redirect_to api_post_url(@post)
        else
            flash.now[:errors] = @post.errors.full_messages
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

    def post_params
        self.params.require(:post).permit(:title, :url, :content, :user_id, sub_ids: [])
    end

    def authors_only!
        return if current_user.posts.find_by(id: params[:id])
        render json: "Forbidden", status: :forbidden
    end

    def vote(direction)
        @post = Post.find_by(id: params[:id])
        @user_vote = @post.user_votes.find_or_initialize_by(user: current_user) 
        
        unless @user_vote.update(value: direction)
            flash[:errors] = @user_vote.errors.full_messages
        end
        
        redirect_to api_post_url(@post)
    end
end
