class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by

        if user.nil?
            render json: "Credentials were wrong"
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
    end
end
