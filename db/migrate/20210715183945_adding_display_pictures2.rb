class AddingDisplayPictures2 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :display_picture, :string
    add_column :boards, :display_picture, :string
  end
end
