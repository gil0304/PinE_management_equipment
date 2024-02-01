class ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  def index
    @reservations = Reservation.all
    render json: @Reservations
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :equipment_id, :description, :project_name, :studio_name, :start_time, :end_time)
  end
end
