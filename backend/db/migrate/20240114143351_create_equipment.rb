class CreateEquipment < ActiveRecord::Migration[7.1]
  def change
    create_table :equipment do |t|
      t.string :name
      t.string :model_number
      t.string :maker_name
      t.string :description
      t.integer :stock
      t.references :category

      t.timestamps
    end
  end
end
