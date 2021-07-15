class Api::BoardsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update]
  
  def index
    @boards = Board.all
    render :index
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def create
    @board = Board.new(board_params)
    @board.user = current_user

    if @board.save
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = Board.find(params[:id])
    render :show

    if @board.update(board_params)
      render :show
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])

    if @board.destroy
      index
    else
      render json: @board.errors.full_messages, status: 422
    end

  end

  private
  def board_params
    params.require(:board).permit(:title, :user_id, :display_picture)
  end
end