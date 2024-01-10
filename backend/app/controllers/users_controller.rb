class UsersController < ApplicationController

    def index
        @users = User.all.order(:id)

        render json: @users
    end

    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user, status: :created, location: @user
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
    
    def user_params
        params.require(:user).permit(:name, :employee_number, :password, :password_confirmation)
    end
end
