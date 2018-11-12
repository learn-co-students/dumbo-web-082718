class Api::V1::BeyController < ApplicationController
  def index
    @beys = Bey.all
    render json: @beys
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
