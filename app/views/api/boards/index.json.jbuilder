@boards.each do |board|
  json.set! board.id do 
      json.extract! board, :id, :title, :user_id
  end
end