class EquipmentReservation < ApplicationRecord
  belongs_to :equipment
  belongs_to :reservation
end
