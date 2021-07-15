@boards.each do |board|
  json.set! board.id do 
    json.extract! board, :id, :title, :user_id

    json.pins do
      json.array! board.pins do |pin|
        json.extract! pin, :id, :title, :user_id, :description, :image_url
      end
    end
  end
end