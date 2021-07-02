class CreateSaves < ActiveRecord::Migration[5.2]
  def change
    create_table :saves do |t|
      t.integer :pin_id, null: false
      t.integer :user_id, null: false
    end
    add_index :saves, :pin_id
    add_index :saves, :user_id
  end
end
