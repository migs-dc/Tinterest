class Api::PinsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]

  def index
    @pins = Pin.all 
    render :index
    # render 'api/pins/index'
 end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def create
    @bench = Pin.create!(pin_params)
    render :show
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :image_url, :user_id, :description)
  end
end