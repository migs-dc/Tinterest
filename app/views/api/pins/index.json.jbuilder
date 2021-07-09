@pins.each do |pin|
    json.set! pin.id do 
        json.extract! pin, :id, :title, :user_id, :image_url, :description
    end
end