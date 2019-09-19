class Api::UsersController < ApplicationController
    before_action :require_current_user!, except: [:create]
    before_action :no_peeking!, only: [:show]

    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            redirect_to "/api/users/show"
        else
            render json: @user.errors.full_messages
        end
    end

    def show
        if current_user.nil? || params[:id].to_i != current_user[:id]
          redirect_to api_new_session_url
          return
        end

        @user = User.find(params[:id])
        render :show
    end

    def subscribe
        current_user.subscription_ids.push(params[:sub_id]) unless current_user.subscription_ids.include?(params[:sub_id])
        if current_user.save
            redirect_to "/api/users/show"
        else
            render json: @user.errors.full_messages
        end
    end

    protected
    
    def no_peeking!
        redirect_to api_user_url(current_user) if params[:id].to_i != current_user.id
    end

    def user_params
        self.params.require(:user).permit(:username, :password, :email, :sub_id)
    end
end
