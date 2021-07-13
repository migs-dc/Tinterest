json.extract! @board, :id, :title, :user_id
json.extract! @board.user, :id, :email, :username

@board.pins.each do |pin|
  json.set! pin.id do 
    json.extract! pin, :id, :title, :user_id, :description, :image_url
  end
end