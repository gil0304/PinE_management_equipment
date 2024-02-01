class CreateReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :reservations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :equipment, null: false, foreign_key: true
      t.string :description
      t.string :project_name
      t.string :studio_name
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end
