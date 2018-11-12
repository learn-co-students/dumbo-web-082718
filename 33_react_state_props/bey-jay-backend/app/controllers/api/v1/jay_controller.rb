class Api::V1::JayController < ApplicationController
  def index
    @jays = Jay.all
    render json: @jays
  end
  def create

  end
  def show

  end
  def update

  end
  def delete

  end
end
