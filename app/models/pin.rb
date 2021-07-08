class Pin < ApplicationRecord 
  validates :title, :image_url, :user_id, presence: true

  belongs_to :user

  
end