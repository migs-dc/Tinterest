json.partial! "api/users/user",
user: @user

# json.extract! @user, :id, :username, :email

json.boards do 
  json.array! @user.boards do |board|
    json.extract! board, :id, :title
  end
end

# json.boards do 
#   @user.boards.each do |board|
#     json.set! board.id do
#       json.extract! board, :id, :title
#     end
#   end
# end