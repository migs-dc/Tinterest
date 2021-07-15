class Api::PinBoardsController < ApplicationController
  before_action :require_logged_in, only: [:create, :delete]

  def index
    @pin_boards = PinBoard.all
    render :index
  end

  def create 
    @pin_board = PinBoard.new(pin_board_params)

    if @pin_board.save
      index
    else
      render json: @pin_board.errors.full_messages, status: 422
    end
  end

  def destroy
    @pin_board = PinBoard.find(params[:id])

    if @pin_board.def destroy
      index
    else
      render json: @pin_board.errors.full_messages, status: 422
    end
  end
  
  private
  def pin_board_params
    params.require(:pin_board).permit(:board_id, :pin_id)
  end
end