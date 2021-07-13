json.extract! @board, :id, :title, :user_id
json.extract! @board.user, :id, :email, :username

# json.pins do
#   @board.pins.each do |pin|
#     json.set! pin.id do 
#       json.extract! pin, :id, :title, :user_id, :description, :image_url
#     end
#   end
# end

json.pins do
  json.array! @board.pins do |pin|
    json.extract! pin, :id, :title, :user_id, :description, :image_url
  end
end