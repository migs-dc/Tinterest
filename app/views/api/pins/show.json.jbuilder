json.extract! @pin, :id, :title, :user_id, :image_url, :description
json.author do
  json.extract! @pin.user, :id, :email, :username
end