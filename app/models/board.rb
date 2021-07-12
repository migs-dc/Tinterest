class Board < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
  has_many :saves,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :PinBoard

  has_many :pins,
    through: :saves,
    source: :pin

end