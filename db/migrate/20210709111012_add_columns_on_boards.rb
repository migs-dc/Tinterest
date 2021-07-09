class AddColumnsOnBoards < ActiveRecord::Migration[5.2]
  def change
    add_column :boards, :description, :string
    add_column :boards, :pin_id, :integer
    add_index :boards, :pin_id
  end
end
