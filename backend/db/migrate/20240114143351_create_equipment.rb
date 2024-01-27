class CreateEquipment < ActiveRecord::Migration[7.1]
  def change
    create_table :equipment do |t|
      t.references :user
      t.string :name
      t.string :category
      t.string :project_name
      t.string :studio_name
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end
