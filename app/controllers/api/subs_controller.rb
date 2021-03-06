class Api::SubsController < ApplicationController
    before_action :moderators_only!, only: [:edit, :update]

    def index
        @subs = !!current_user ? current_user.subscriptions.order(created_at: :desc) : Sub.all.order(created_at: :desc).limit(20)
        render :index
    end

    def create
        @sub = current_user.subs.new(sub_params)

        if @sub.save
            current_user.subscription_ids << @sub.id
            current_user.save
            redirect_to api_sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    # def new
    #     @sub = Sub.new
    #     render :new
    # end

    def show
        @sub = Sub.friendly.find(params[:id])
        @posts = @sub.posts.order(created_at: :desc).includes(:author, { comments: :author })
        render :show
    end

    def edit
        @sub = Sub.find(params[:id])
    end

    def update 
        @sub = Sub.find(params[:id])
        if @sub.update(sub_params)
            redirect_to api_sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :edit
        end
    end

    def destroy 
    end

    def search
        if params[:query].present?
            @subs = Sub.where('title ~ ?', params[:query])
        else
            @subs = Sub.none
        end
        render :index
    end

    protected
    def moderators_only!
        return if current_user.subs.find_by(id: params[:id])
        render json: "Forbidden", status: :forbidden
    end

    def sub_params
        self.params.require(:sub).permit(:title, :description, :moderator)
    end
end

