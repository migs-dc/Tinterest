class Api::PinsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update]

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
    @pin = Pin.new(pin_params)
    @pin.user = current_user
    
    if @pin.save!
      # render "api/pins/show"
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end

    # @pin = Pin.create!(pin_params)
    # render :show
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update(pin_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :image_url, :user_id, :description)
  end
end