class Equipment < ApplicationRecord
  has_many :equipment_reservations
  has_many :reservations, through: :equipment_reservations
end
