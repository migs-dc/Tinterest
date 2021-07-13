class Pin < ApplicationRecord 
  validates :title, :image_url, :user_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :saves,  
    primary_key: :id,
    foreign_key: :pin_id,
    class_name: :PinBoard

  has_many :boards,
    through: :saves,
    source: :board
end