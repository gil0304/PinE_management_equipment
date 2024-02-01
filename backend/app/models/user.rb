class User < ApplicationRecord
    has_secure_password

    has_many :equipments
    validates :name, presence: true, uniqueness: true
end
