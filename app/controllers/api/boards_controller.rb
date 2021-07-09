class Api::BoardsController < ApplicationController
  before_action :require_logged_in, only: [:create, :edit, :update]
end