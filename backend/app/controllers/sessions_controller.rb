class SessionsController < ApplicationController
    include CurrentUserConcern

    def create
        user = User
                .find_by(employee_number: params[:employee_number])
                .try(:authenticate, params[:password])

        if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else
            render json: { status: 401 }
        end
    end
end
