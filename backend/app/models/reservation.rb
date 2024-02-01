class Reservation < ApplicationRecord
  belongs_to :user
  has_many :equipment_reservations
  has_many :equipments, through: :equipment_reservations
end
