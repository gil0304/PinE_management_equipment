class CreateEquipmentReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :equipment_reservations do |t|
      t.references :equipment, null: false, foreign_key: true
      t.references :reservation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
