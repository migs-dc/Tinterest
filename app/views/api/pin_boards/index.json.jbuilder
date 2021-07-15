@pin_boards.each do |pin_board|
  json.set! pin_board.id do
    json.extract pin_board, :id, :board_id, :pin_id
  end
end