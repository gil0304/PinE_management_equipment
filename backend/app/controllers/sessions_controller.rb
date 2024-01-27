class SessionsController < ApplicationController
    include CurrentUserConcern

    def create
        user_params = session_params

        user = User.find_by(employee_number: user_params[:employee_number])

        if user && user.authenticate(user_params[:password])
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
            p "できた"
            p session[:user_id]
        else
            render json: { status: 401 }
        end
        Rails.logger.info "セッションID: #{session.id}"
    end

    def current_user
        p session[:user_id]
        if @current_user
            render json: @current_user
        else
            render json: { status: :unauthorized }
        end
        Rails.logger.info "セッションID: #{session.id}"
    end

    private

    def session_params
        params.require(:user).permit(:employee_number, :password)
    end
end
