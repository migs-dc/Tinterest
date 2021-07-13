class PinBoard < ApplicationRecord
  validates :board_id, :pin_id, presence: true
  
  belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board

  belongs_to :pin,
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :Pin

end