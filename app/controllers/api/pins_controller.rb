class Api::PinsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update, :destroy]

  def index
    @pins = Pin.all
    @pins = bounds ? Pin.in_bounds(param[:bounds]) : Pin.all
    
    render :index
    render 'api/pins/index'
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def create
    @pin = Pin.new(pin_params)
    
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])

    if @pin.update(pin_params)
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy     
    @pin = Pin.find(params[:id])

    if @pin.destroy
      index
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :image_url, :user_id, :description)
  end
end